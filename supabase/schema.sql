-- ============================================================
-- KPS Systems — Supabase PostgreSQL Schema
-- Run this in the Supabase SQL Editor to set up the database
-- ============================================================

-- ── Products table ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS products (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name            TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  model_number    TEXT NOT NULL,
  category        TEXT NOT NULL CHECK (category IN ('motherboard', 'transformer')),
  short_description TEXT NOT NULL,
  description     TEXT,
  applications    TEXT[] DEFAULT '{}',
  features        TEXT[] DEFAULT '{}',
  specifications  JSONB DEFAULT '{}',
  primary_image   TEXT,
  gallery_images  TEXT[] DEFAULT '{}',
  pdf_url         TEXT,
  is_featured     BOOLEAN DEFAULT FALSE,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Index for slug lookups
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = TRUE;

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trigger_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Enquiries table ───────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS enquiries (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name         TEXT NOT NULL,
  company      TEXT,
  phone        TEXT NOT NULL,
  email        TEXT NOT NULL,
  product_id   UUID REFERENCES products(id) ON DELETE SET NULL,
  product_name TEXT,
  message      TEXT NOT NULL,
  status       TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at DESC);

-- ── Row Level Security ────────────────────────────────────────────────────────

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Products: Public read, authenticated write
CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  TO public
  USING (TRUE);

CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (TRUE);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (TRUE);

CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (TRUE);

-- Enquiries: Public insert only, authenticated read
CREATE POLICY "Anyone can create an enquiry"
  ON enquiries FOR INSERT
  TO public
  WITH CHECK (TRUE);

CREATE POLICY "Authenticated users can view enquiries"
  ON enquiries FOR SELECT
  TO authenticated
  USING (TRUE);

CREATE POLICY "Authenticated users can update enquiry status"
  ON enquiries FOR UPDATE
  TO authenticated
  USING (TRUE);

-- ── Storage Buckets ───────────────────────────────────────────────────────────
-- Run these in the Storage section of Supabase dashboard OR via the SQL below:

INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', TRUE)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('product-pdfs', 'product-pdfs', TRUE)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for product images
CREATE POLICY "Product images are publicly accessible"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'product-images');

CREATE POLICY "Authenticated users can upload product images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'product-images');

CREATE POLICY "Authenticated users can update product images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'product-images');

CREATE POLICY "Authenticated users can delete product images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'product-images');

-- Storage policies for product PDFs
CREATE POLICY "Product PDFs are publicly accessible"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'product-pdfs');

CREATE POLICY "Authenticated users can upload product PDFs"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'product-pdfs');

CREATE POLICY "Authenticated users can update product PDFs"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'product-pdfs');

CREATE POLICY "Authenticated users can delete product PDFs"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'product-pdfs');
