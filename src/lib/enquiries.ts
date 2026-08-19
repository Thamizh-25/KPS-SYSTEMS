import { supabase, isSupabaseConfigured } from "./supabase";
import type { Enquiry, EnquiryFormData, EnquiryStatus } from "@/types/enquiry";

// ── Create enquiry ───────────────────────────────────────────────────────────

export async function createEnquiry(
  formData: EnquiryFormData
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      error: "Database not configured. Please contact us directly.",
    };
  }

  const { error } = await supabase.from("enquiries").insert([
    {
      name: formData.name,
      company: formData.company || null,
      phone: formData.phone,
      email: formData.email,
      product_id: formData.product_id || null,
      product_name: formData.product_name || null,
      message: formData.message,
      status: "new" as EnquiryStatus,
    },
  ]);

  if (error) {
    console.error("Error creating enquiry:", error.message);
    return { success: false, error: "Failed to submit enquiry. Please try again." };
  }

  return { success: true };
}

// ── Get all enquiries (admin) ────────────────────────────────────────────────

export async function getEnquiries(
  status?: EnquiryStatus
): Promise<Enquiry[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  let query = supabase
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching enquiries:", error.message);
    return [];
  }

  return (data as Enquiry[]) ?? [];
}

// ── Update enquiry status ────────────────────────────────────────────────────

export async function updateEnquiryStatus(
  id: string,
  status: EnquiryStatus
): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase) return false;

  const { error } = await supabase
    .from("enquiries")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Error updating enquiry status:", error.message);
    return false;
  }

  return true;
}
