import { supabase, isSupabaseConfigured } from "./supabase";

export type StorageBucket = "product-images" | "product-pdfs";

// ── Upload file ──────────────────────────────────────────────────────────────

export async function uploadFile(
  bucket: StorageBucket,
  path: string,
  file: File
): Promise<{ url: string | null; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { url: null, error: "Storage not configured." };
  }

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(path, file, { upsert: true });

  if (uploadError) {
    console.error("Upload error:", uploadError.message);
    return { url: null, error: uploadError.message };
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);

  return { url: data.publicUrl };
}

// ── Upload product image ─────────────────────────────────────────────────────

export async function uploadProductImage(
  productId: string,
  file: File,
  index: number = 0
): Promise<{ url: string | null; error?: string }> {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const path = `${productId}/${index}-${Date.now()}.${ext}`;
  return uploadFile("product-images", path, file);
}

// ── Upload product PDF ───────────────────────────────────────────────────────

export async function uploadProductPDF(
  productId: string,
  file: File
): Promise<{ url: string | null; error?: string }> {
  const path = `${productId}/datasheet-${Date.now()}.pdf`;
  return uploadFile("product-pdfs", path, file);
}

// ── Delete file ──────────────────────────────────────────────────────────────

export async function deleteFile(
  bucket: StorageBucket,
  path: string
): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase) return false;

  const { error } = await supabase.storage.from(bucket).remove([path]);

  if (error) {
    console.error("Delete error:", error.message);
    return false;
  }

  return true;
}

// ── Validate file type ───────────────────────────────────────────────────────

export function validateImageFile(file: File): string | null {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return "Only JPG, JPEG, PNG, and WEBP images are allowed.";
  }
  if (file.size > 10 * 1024 * 1024) {
    return "Image file must be less than 10MB.";
  }
  return null;
}

export function validatePDFFile(file: File): string | null {
  if (file.type !== "application/pdf") {
    return "Only PDF files are allowed.";
  }
  if (file.size > 25 * 1024 * 1024) {
    return "PDF file must be less than 25MB.";
  }
  return null;
}
