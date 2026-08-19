# KPS Systems — Premium Manufacturer Website

A complete, production-quality website for a manufacturer of electronic motherboards and power transformers.

## Tech Stack

- **Next.js 14** — App Router, Server Components
- **TypeScript** — Full type safety
- **Tailwind CSS v4** — Custom industrial design system
- **Framer Motion** — Controlled, cinematic animations
- **Supabase** — PostgreSQL database + Storage + Auth
- **Lucide React** — Icons

## Getting Started

### 1. Configure Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key
3. Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 2. Run Database Schema

1. Open the Supabase SQL Editor
2. Copy and run `supabase/schema.sql`
3. This creates the `products` and `enquiries` tables with Row Level Security

### 3. Configure Company Information

Open `src/data/companyData.ts` and replace all placeholder values with actual company information:

- Company name, tagline, description
- Phone, WhatsApp, email
- Address and Google Maps URL
- About content
- Manufacturing process descriptions

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/               # Next.js App Router pages
├── components/        # Reusable UI components
│   └── admin/         # Admin-specific components
├── data/              # Static configuration (companyData.ts)
├── lib/               # Data access functions + utilities
└── types/             # TypeScript interfaces
supabase/
└── schema.sql         # Database schema
public/
└── images/            # Local images (product images from Supabase Storage in production)
```

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/products` | Full product catalogue |
| `/products/motherboards` | Motherboard category |
| `/products/transformers` | Transformer category |
| `/products/[slug]` | Product detail page |
| `/about` | About the company |
| `/capabilities` | Manufacturing capabilities |
| `/contact` | Contact + enquiry form |
| `/admin` | Admin dashboard |
| `/admin/products` | Product management |
| `/admin/products/new` | Add new product |
| `/admin/products/[id]/edit` | Edit product |
| `/admin/enquiries` | View customer enquiries |

## Key Features

- ✅ Premium industrial dark design system
- ✅ Responsive on all screen sizes
- ✅ Product catalogue with search + category filter
- ✅ Product detail pages with image gallery + lightbox
- ✅ Technical specifications table
- ✅ PDF datasheet download
- ✅ Customer enquiry form (saved to database)
- ✅ Direct contact buttons (call, WhatsApp, email)
- ✅ Admin product CRUD with image/PDF upload
- ✅ Admin enquiry management
- ✅ SEO metadata on all pages
- ✅ Graceful handling when Supabase is not configured

## Supabase Storage Buckets

The schema creates two public buckets:

- `product-images` — Product photos (JPG, PNG, WEBP)
- `product-pdfs` — Technical datasheets (PDF)

## Adding the First Admin User

1. Go to Supabase Dashboard → Authentication → Users
2. Create a user with the owner's email/password
3. They can then log in at `/admin`

> Note: The admin routes are not yet protected with middleware. See `SETUP.md` for adding Supabase Auth middleware.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon (public) key |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-only, never expose to browser) |
