import type { Metadata } from "next";
import Link from "next/link";
import { Package, MessageSquare, Plus, BarChart3 } from "lucide-react";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-label-copper mb-2">DASHBOARD</p>
        <h1 className="font-heading text-2xl font-bold text-[#F5F5F0]">
          {companyData.name} — Admin
        </h1>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          {
            icon: Package,
            label: "PRODUCTS",
            description: "Manage product catalogue",
            href: "/admin/products",
            primary: false,
          },
          {
            icon: Plus,
            label: "ADD PRODUCT",
            description: "Create a new product",
            href: "/admin/products/new",
            primary: true,
          },
          {
            icon: MessageSquare,
            label: "ENQUIRIES",
            description: "View customer enquiries",
            href: "/admin/enquiries",
            primary: false,
          },
          {
            icon: BarChart3,
            label: "VIEW SITE",
            description: "Open public website",
            href: "/",
            primary: false,
          },
        ].map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className={`flex flex-col gap-3 p-5 border transition-colors duration-150 ${
                action.primary
                  ? "border-[#B87333] bg-[#B87333]/10 hover:bg-[#B87333]/20"
                  : "border-[#303030] bg-[#101010] hover:border-[#6b6b6b]"
              }`}
            >
              <Icon
                size={20}
                className={action.primary ? "text-[#B87333]" : "text-[#9A9A9A]"}
              />
              <div>
                <p className="text-label text-[#F5F5F0] mb-0.5">{action.label}</p>
                <p className="text-xs text-[#6b6b6b]">{action.description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Info */}
      <div className="border border-[#303030] bg-[#101010] p-6">
        <p className="text-label text-[#F5F5F0] mb-4">SYSTEM STATUS</p>
        <div className="space-y-3">
          <div className="spec-row mx-0 px-0">
            <span className="spec-label">SUPABASE</span>
            <span className="text-xs font-mono text-[#9A9A9A]">
              Configure in .env.local
            </span>
          </div>
          <div className="spec-row mx-0 px-0">
            <span className="spec-label">STORAGE</span>
            <span className="text-xs font-mono text-[#9A9A9A]">
              Requires Supabase project
            </span>
          </div>
          <div className="spec-row mx-0 px-0">
            <span className="spec-label">AUTH</span>
            <span className="text-xs font-mono text-[#9A9A9A]">
              Supabase Auth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
