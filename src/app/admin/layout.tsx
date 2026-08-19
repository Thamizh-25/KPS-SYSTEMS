import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Package, MessageSquare, LogOut, ExternalLink } from "lucide-react";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: `Admin — %s | ${companyData.name}`,
  },
  robots: { index: false, follow: false },
};

const adminNavLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#080808] flex">
      {/* Sidebar */}
      <aside className="w-56 border-r border-[#303030] bg-[#101010] flex flex-col shrink-0">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-[#303030]">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-6 h-6 flex items-center justify-center border border-[#B87333]">
              <div className="w-3 h-3 border border-[#B87333] rotate-45" />
            </div>
            <span className="font-heading text-xs font-bold tracking-widest text-[#F5F5F0]">
              ADMIN
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4">
          {adminNavLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-5 py-3 text-sm text-[#9A9A9A] hover:text-[#F5F5F0] hover:bg-[#151515] transition-colors duration-150"
              >
                <Icon size={15} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-[#303030] py-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-5 py-3 text-xs text-[#6b6b6b] hover:text-[#9A9A9A] transition-colors"
          >
            <ExternalLink size={13} />
            View Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-14 border-b border-[#303030] bg-[#101010] flex items-center justify-between px-6 shrink-0">
          <p className="text-label text-[#6b6b6b]">{companyData.name}</p>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/products/new"
              className="btn-primary text-xs py-2 px-4"
            >
              + ADD PRODUCT
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
