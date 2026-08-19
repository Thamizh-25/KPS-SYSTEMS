export type ProductCategory = "motherboard" | "transformer";

export type ProductStatus = "active" | "discontinued";

export interface ProductSpecification {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  model_number: string;
  category: ProductCategory;
  short_description: string;
  description: string | null;
  applications: string[];
  features: string[];
  specifications: ProductSpecification;
  primary_image: string | null;
  gallery_images: string[];
  pdf_url: string | null;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductFormData {
  name: string;
  slug: string;
  model_number: string;
  category: ProductCategory;
  short_description: string;
  description: string;
  applications: string[];
  features: string[];
  specifications: ProductSpecification;
  is_featured: boolean;
}

export type ProductListItem = Pick<
  Product,
  | "id"
  | "name"
  | "slug"
  | "model_number"
  | "category"
  | "short_description"
  | "primary_image"
  | "specifications"
  | "is_featured"
  | "pdf_url"
>;
