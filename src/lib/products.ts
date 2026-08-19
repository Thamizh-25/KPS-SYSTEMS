import { supabase, isSupabaseConfigured } from "./supabase";
import type { Product, ProductListItem, ProductCategory, ProductFormData } from "@/types/product";

// ── List products ────────────────────────────────────────────────────────────

export async function getProducts(category?: ProductCategory): Promise<ProductListItem[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  let query = supabase
    .from("products")
    .select(
      "id, name, slug, model_number, category, short_description, primary_image, specifications, is_featured, pdf_url"
    )
    .order("created_at", { ascending: false });

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }

  return (data as ProductListItem[]) ?? [];
}

// ── Featured products ────────────────────────────────────────────────────────

export async function getFeaturedProducts(): Promise<ProductListItem[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, slug, model_number, category, short_description, primary_image, specifications, is_featured, pdf_url"
    )
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching featured products:", error.message);
    return [];
  }

  return (data as ProductListItem[]) ?? [];
}

// ── Single product by slug ───────────────────────────────────────────────────

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isSupabaseConfigured || !supabase) return null;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code !== "PGRST116") {
      console.error("Error fetching product:", error.message);
    }
    return null;
  }

  return data as Product;
}

// ── Single product by ID ─────────────────────────────────────────────────────

export async function getProductById(id: string): Promise<Product | null> {
  if (!isSupabaseConfigured || !supabase) return null;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching product:", error.message);
    return null;
  }

  return data as Product;
}

// ── Create product ───────────────────────────────────────────────────────────

export async function createProduct(
  formData: ProductFormData
): Promise<{ id: string } | null> {
  if (!isSupabaseConfigured || !supabase) return null;

  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        ...formData,
        gallery_images: [],
        primary_image: null,
        pdf_url: null,
      },
    ])
    .select("id")
    .single();

  if (error) {
    console.error("Error creating product:", error.message);
    return null;
  }

  return data as { id: string };
}

// ── Update product ───────────────────────────────────────────────────────────

export async function updateProduct(
  id: string,
  updates: Partial<Product>
): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase) return false;

  const { error } = await supabase
    .from("products")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error updating product:", error.message);
    return false;
  }

  return true;
}

// ── Delete product ───────────────────────────────────────────────────────────

export async function deleteProduct(id: string): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase) return false;

  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error("Error deleting product:", error.message);
    return false;
  }

  return true;
}

// ── Search products ──────────────────────────────────────────────────────────

export async function searchProducts(query: string): Promise<ProductListItem[]> {
  if (!isSupabaseConfigured || !supabase || !query.trim()) return [];

  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, slug, model_number, category, short_description, primary_image, specifications, is_featured, pdf_url"
    )
    .or(
      `name.ilike.%${query}%,model_number.ilike.%${query}%,short_description.ilike.%${query}%`
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error searching products:", error.message);
    return [];
  }

  return (data as ProductListItem[]) ?? [];
}

// ── Toggle featured ──────────────────────────────────────────────────────────

export async function toggleProductFeatured(
  id: string,
  isFeatured: boolean
): Promise<boolean> {
  return updateProduct(id, { is_featured: isFeatured });
}
