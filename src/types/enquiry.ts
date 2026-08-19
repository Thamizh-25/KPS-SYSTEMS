export type EnquiryStatus = "new" | "contacted" | "closed";

export interface Enquiry {
  id: string;
  name: string;
  company: string | null;
  phone: string;
  email: string;
  product_id: string | null;
  product_name: string | null;
  message: string;
  status: EnquiryStatus;
  created_at: string;
}

export interface EnquiryFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  product_id: string;
  product_name: string;
  message: string;
}
