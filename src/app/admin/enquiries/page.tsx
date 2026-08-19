import type { Metadata } from "next";
import Link from "next/link";
import { getEnquiries, updateEnquiryStatus } from "@/lib/enquiries";
import { formatDate } from "@/lib/utils";
import type { EnquiryStatus } from "@/types/enquiry";

export const metadata: Metadata = {
  title: "Enquiries",
};

const statusColors: Record<EnquiryStatus, string> = {
  new: "badge-new",
  contacted: "badge-contacted",
  closed: "badge-closed",
};

export default async function AdminEnquiriesPage() {
  const enquiries = await getEnquiries();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-label-copper mb-1">CUSTOMER COMMUNICATIONS</p>
          <h1 className="font-heading text-xl font-bold text-[#F5F5F0]">Enquiries</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge-new">{enquiries.filter((e) => e.status === "new").length} NEW</span>
        </div>
      </div>

      {/* Enquiries */}
      <div className="space-y-3">
        {enquiries.length === 0 ? (
          <div className="py-16 text-center border border-[#303030] bg-[#101010]">
            <p className="text-label text-[#6b6b6b] mb-2">NO ENQUIRIES</p>
            <p className="text-sm text-[#9A9A9A]">
              Customer enquiries will appear here.
            </p>
          </div>
        ) : (
          enquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="border border-[#303030] bg-[#101010] p-5 hover:border-[#6b6b6b] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-sm text-[#F5F5F0] font-medium">{enquiry.name}</p>
                    {enquiry.company && (
                      <span className="text-xs text-[#6b6b6b]">— {enquiry.company}</span>
                    )}
                    <span className={statusColors[enquiry.status]}>
                      {enquiry.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#6b6b6b]">
                    <a href={`tel:${enquiry.phone}`} className="hover:text-[#9A9A9A] transition-colors">
                      📞 {enquiry.phone}
                    </a>
                    <a href={`mailto:${enquiry.email}`} className="hover:text-[#9A9A9A] transition-colors">
                      ✉ {enquiry.email}
                    </a>
                    {enquiry.product_name && (
                      <span>📦 {enquiry.product_name}</span>
                    )}
                  </div>
                </div>
                <span className="text-label text-[#6b6b6b] shrink-0">
                  {formatDate(enquiry.created_at)}
                </span>
              </div>

              <p className="text-sm text-[#9A9A9A] leading-relaxed border-l-2 border-[#303030] pl-3 mb-4">
                {enquiry.message}
              </p>

              {/* Status actions */}
              <div className="flex items-center gap-2">
                <form action={async () => {
                  "use server";
                  await updateEnquiryStatus(enquiry.id, "contacted");
                }}>
                  {enquiry.status === "new" && (
                    <button
                      type="submit"
                      className="text-label text-[#9A9A9A] hover:text-[#B87333] transition-colors px-3 py-1.5 border border-[#303030] hover:border-[#B87333]/50"
                    >
                      MARK CONTACTED
                    </button>
                  )}
                </form>
                <form action={async () => {
                  "use server";
                  await updateEnquiryStatus(enquiry.id, "closed");
                }}>
                  {enquiry.status !== "closed" && (
                    <button
                      type="submit"
                      className="text-label text-[#6b6b6b] hover:text-[#9A9A9A] transition-colors px-3 py-1.5 border border-[#303030]"
                    >
                      MARK CLOSED
                    </button>
                  )}
                </form>
                <a
                  href={`tel:${enquiry.phone}`}
                  className="text-label text-[#B87333] hover:text-[#D99555] transition-colors px-3 py-1.5"
                >
                  CALL NOW
                </a>
                <a
                  href={`mailto:${enquiry.email}?subject=Re: Enquiry from ${enquiry.name}`}
                  className="text-label text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors px-3 py-1.5"
                >
                  REPLY
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
