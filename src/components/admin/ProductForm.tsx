"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Upload, X, Loader2, AlertCircle } from "lucide-react";
import { createProduct, updateProduct } from "@/lib/products";
import { uploadProductImage, uploadProductPDF, validateImageFile, validatePDFFile } from "@/lib/storage";
import { slugify } from "@/lib/utils";
import type { Product, ProductCategory, ProductFormData, ProductSpecification } from "@/types/product";

interface ProductFormProps {
  product?: Product;
  mode: "create" | "edit";
}

const emptyForm: ProductFormData = {
  name: "",
  slug: "",
  model_number: "",
  category: "motherboard",
  short_description: "",
  description: "",
  applications: [],
  features: [],
  specifications: {},
  is_featured: false,
};

export default function ProductForm({ product, mode }: ProductFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<ProductFormData>(
    product
      ? {
          name: product.name,
          slug: product.slug,
          model_number: product.model_number,
          category: product.category,
          short_description: product.short_description,
          description: product.description ?? "",
          applications: product.applications ?? [],
          features: product.features ?? [],
          specifications: product.specifications ?? {},
          is_featured: product.is_featured,
        }
      : emptyForm
  );

  const [newApplication, setNewApplication] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecValue, setNewSpecValue] = useState("");

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState("");
  const [pdfError, setPdfError] = useState("");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleNameChange = (name: string) => {
    setForm((prev) => ({
      ...prev,
      name,
      slug: mode === "create" ? slugify(name) : prev.slug,
    }));
  };

  const addApplication = () => {
    if (!newApplication.trim()) return;
    setForm((prev) => ({
      ...prev,
      applications: [...prev.applications, newApplication.trim()],
    }));
    setNewApplication("");
  };

  const removeApplication = (i: number) => {
    setForm((prev) => ({
      ...prev,
      applications: prev.applications.filter((_, idx) => idx !== i),
    }));
  };

  const addFeature = () => {
    if (!newFeature.trim()) return;
    setForm((prev) => ({
      ...prev,
      features: [...prev.features, newFeature.trim()],
    }));
    setNewFeature("");
  };

  const removeFeature = (i: number) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.filter((_, idx) => idx !== i),
    }));
  };

  const addSpec = () => {
    if (!newSpecKey.trim() || !newSpecValue.trim()) return;
    setForm((prev) => ({
      ...prev,
      specifications: { ...prev.specifications, [newSpecKey.trim()]: newSpecValue.trim() },
    }));
    setNewSpecKey("");
    setNewSpecValue("");
  };

  const removeSpec = (key: string) => {
    const { [key]: _, ...rest } = form.specifications;
    setForm((prev) => ({ ...prev, specifications: rest }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setImageError("");
    const errors: string[] = [];
    const valid: File[] = [];
    files.forEach((f) => {
      const err = validateImageFile(f);
      if (err) errors.push(err);
      else valid.push(f);
    });
    if (errors.length) setImageError(errors[0]);
    setImageFiles((prev) => [...prev, ...valid]);
  };

  const handlePDFUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPdfError("");
    if (!file) return;
    const err = validatePDFFile(file);
    if (err) { setPdfError(err); return; }
    setPdfFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    setError("");

    try {
      let productId: string;

      if (mode === "create") {
        const result = await createProduct(form);
        if (!result) throw new Error("Failed to create product.");
        productId = result.id;
      } else {
        const ok = await updateProduct(product!.id, form);
        if (!ok) throw new Error("Failed to update product.");
        productId = product!.id;
      }

      // Upload images
      const imageUrls: string[] = [...(product?.gallery_images ?? [])];
      let primaryUrl = product?.primary_image ?? null;

      for (let i = 0; i < imageFiles.length; i++) {
        const { url } = await uploadProductImage(productId, imageFiles[i], i);
        if (url) {
          if (i === 0 && !primaryUrl) primaryUrl = url;
          else imageUrls.push(url);
        }
      }

      // Upload PDF
      let pdfUrl = product?.pdf_url ?? null;
      if (pdfFile) {
        const { url } = await uploadProductPDF(productId, pdfFile);
        if (url) pdfUrl = url;
      }

      // Update with media URLs
      await updateProduct(productId, {
        primary_image: primaryUrl,
        gallery_images: imageUrls,
        pdf_url: pdfUrl,
      });

      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
      {/* Basic info */}
      <fieldset className="border border-[#303030] p-6 space-y-4">
        <legend className="text-label text-[#F5F5F0] px-2">PRODUCT INFORMATION</legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-label block mb-1.5">PRODUCT NAME *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleNameChange(e.target.value)}
              required
              className="input-industrial"
              placeholder="e.g. Industrial Control Motherboard"
            />
          </div>
          <div>
            <label className="text-label block mb-1.5">MODEL NUMBER *</label>
            <input
              type="text"
              value={form.model_number}
              onChange={(e) => setForm((p) => ({ ...p, model_number: e.target.value }))}
              required
              className="input-industrial"
              placeholder="e.g. MB-2401"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-label block mb-1.5">URL SLUG *</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
              required
              className="input-industrial font-mono text-sm"
              placeholder="industrial-control-motherboard"
            />
          </div>
          <div>
            <label className="text-label block mb-1.5">CATEGORY *</label>
            <select
              value={form.category}
              onChange={(e) => setForm((p) => ({ ...p, category: e.target.value as ProductCategory }))}
              className="input-industrial"
            >
              <option value="motherboard">Motherboard</option>
              <option value="transformer">Transformer</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-label block mb-1.5">SHORT DESCRIPTION *</label>
          <input
            type="text"
            value={form.short_description}
            onChange={(e) => setForm((p) => ({ ...p, short_description: e.target.value }))}
            required
            maxLength={200}
            className="input-industrial"
            placeholder="One-line product summary"
          />
          <p className="text-xs text-[#6b6b6b] mt-1">{form.short_description.length}/200</p>
        </div>

        <div>
          <label className="text-label block mb-1.5">FULL DESCRIPTION</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
            className="textarea-industrial"
            rows={4}
            placeholder="Detailed product description"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="is_featured"
            checked={form.is_featured}
            onChange={(e) => setForm((p) => ({ ...p, is_featured: e.target.checked }))}
            className="accent-[#B87333] w-4 h-4"
          />
          <label htmlFor="is_featured" className="text-sm text-[#9A9A9A]">
            Show as featured product on homepage
          </label>
        </div>
      </fieldset>

      {/* Specifications */}
      <fieldset className="border border-[#303030] p-6 space-y-4">
        <legend className="text-label text-[#F5F5F0] px-2">TECHNICAL SPECIFICATIONS</legend>

        {Object.entries(form.specifications).length > 0 && (
          <div className="border border-[#303030] divide-y divide-[#303030]">
            {Object.entries(form.specifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between px-4 py-2.5">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span className="spec-label shrink-0">{key.toUpperCase()}</span>
                  <span className="spec-value text-xs truncate">{value}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeSpec(key)}
                  className="ml-3 p-1 text-[#6b6b6b] hover:text-[#c94040] transition-colors"
                >
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={newSpecKey}
            onChange={(e) => setNewSpecKey(e.target.value)}
            placeholder="Parameter (e.g. Input Voltage)"
            className="input-industrial flex-1 text-sm py-2"
          />
          <input
            type="text"
            value={newSpecValue}
            onChange={(e) => setNewSpecValue(e.target.value)}
            placeholder="Value (e.g. 230V AC)"
            className="input-industrial flex-1 text-sm py-2"
          />
          <button
            type="button"
            onClick={addSpec}
            className="btn-secondary px-3 py-2 text-xs"
          >
            <Plus size={13} />
          </button>
        </div>
      </fieldset>

      {/* Features */}
      <fieldset className="border border-[#303030] p-6 space-y-4">
        <legend className="text-label text-[#F5F5F0] px-2">FEATURES</legend>

        {form.features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {form.features.map((f, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#151515] border border-[#303030]">
                <span className="text-xs text-[#9A9A9A]">{f}</span>
                <button type="button" onClick={() => removeFeature(i)} className="text-[#6b6b6b] hover:text-[#c94040]">
                  <X size={11} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
            placeholder="Add a product feature"
            className="input-industrial flex-1 text-sm py-2"
          />
          <button type="button" onClick={addFeature} className="btn-secondary px-3 py-2 text-xs">
            <Plus size={13} />
          </button>
        </div>
      </fieldset>

      {/* Applications */}
      <fieldset className="border border-[#303030] p-6 space-y-4">
        <legend className="text-label text-[#F5F5F0] px-2">APPLICATIONS</legend>

        {form.applications.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {form.applications.map((app, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#151515] border border-[#303030]">
                <span className="text-xs font-mono text-[#9A9A9A]">{app.toUpperCase()}</span>
                <button type="button" onClick={() => removeApplication(i)} className="text-[#6b6b6b] hover:text-[#c94040]">
                  <X size={11} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={newApplication}
            onChange={(e) => setNewApplication(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addApplication())}
            placeholder="Add an application (e.g. Industrial Automation)"
            className="input-industrial flex-1 text-sm py-2"
          />
          <button type="button" onClick={addApplication} className="btn-secondary px-3 py-2 text-xs">
            <Plus size={13} />
          </button>
        </div>
      </fieldset>

      {/* Images */}
      <fieldset className="border border-[#303030] p-6 space-y-4">
        <legend className="text-label text-[#F5F5F0] px-2">PRODUCT IMAGES</legend>
        <p className="text-xs text-[#6b6b6b]">
          JPG, JPEG, PNG, WEBP — max 10MB each. First image will be used as the primary image.
        </p>

        <label className="flex flex-col items-center justify-center border border-dashed border-[#303030] p-8 cursor-pointer hover:border-[#B87333]/50 transition-colors">
          <Upload size={20} className="text-[#6b6b6b] mb-2" />
          <span className="text-label text-[#9A9A9A]">CLICK TO SELECT IMAGES</span>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        {imageError && (
          <p className="text-xs text-[#c94040] flex items-center gap-1.5">
            <AlertCircle size={12} /> {imageError}
          </p>
        )}

        {imageFiles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {imageFiles.map((f, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#151515] border border-[#303030]">
                <span className="text-xs text-[#9A9A9A] max-w-[180px] truncate">{f.name}</span>
                <button type="button" onClick={() => setImageFiles((prev) => prev.filter((_, idx) => idx !== i))} className="text-[#6b6b6b] hover:text-[#c94040]">
                  <X size={11} />
                </button>
              </div>
            ))}
          </div>
        )}
      </fieldset>

      {/* PDF */}
      <fieldset className="border border-[#303030] p-6 space-y-4">
        <legend className="text-label text-[#F5F5F0] px-2">DATASHEET PDF</legend>
        <p className="text-xs text-[#6b6b6b]">PDF format only — max 25MB.</p>

        <label className="flex flex-col items-center justify-center border border-dashed border-[#303030] p-6 cursor-pointer hover:border-[#B87333]/50 transition-colors">
          <Upload size={20} className="text-[#6b6b6b] mb-2" />
          <span className="text-label text-[#9A9A9A]">
            {pdfFile ? pdfFile.name : "CLICK TO SELECT PDF"}
          </span>
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePDFUpload}
            className="hidden"
          />
        </label>

        {pdfError && (
          <p className="text-xs text-[#c94040] flex items-center gap-1.5">
            <AlertCircle size={12} /> {pdfError}
          </p>
        )}

        {product?.pdf_url && !pdfFile && (
          <div className="flex items-center gap-2 text-xs text-[#9A9A9A]">
            <span>Current PDF:</span>
            <a href={product.pdf_url} target="_blank" rel="noopener noreferrer" className="text-[#B87333] hover:underline">
              View current datasheet
            </a>
          </div>
        )}
      </fieldset>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-[#c94040]/10 border border-[#c94040]/30">
          <AlertCircle size={14} className="text-[#c94040]" />
          <p className="text-xs text-[#c94040]">{error}</p>
        </div>
      )}

      {/* Submit */}
      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {saving ? (
            <>
              <Loader2 size={13} className="animate-spin" />
              {mode === "create" ? "CREATING..." : "SAVING..."}
            </>
          ) : mode === "create" ? (
            "CREATE PRODUCT"
          ) : (
            "SAVE CHANGES"
          )}
        </button>
        <a href="/admin/products" className="btn-ghost text-xs text-[#6b6b6b]">
          CANCEL
        </a>
      </div>
    </form>
  );
}
