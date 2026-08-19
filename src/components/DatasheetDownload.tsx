import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";

interface DatasheetDownloadProps {
  pdfUrl: string | null;
  productName: string;
  modelNumber: string;
}

export default function DatasheetDownload({
  pdfUrl,
  productName,
  modelNumber,
}: DatasheetDownloadProps) {
  return (
    <div className="border border-[#303030] bg-[#101010] p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center border border-[#303030] shrink-0">
          <FileText size={18} className="text-[#9A9A9A]" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-label text-[#B87333] mb-1">TECHNICAL DOCUMENTATION</p>
          <h4 className="font-heading text-base font-medium text-[#F5F5F0] mb-1">
            {modelNumber} Datasheet
          </h4>

          {pdfUrl ? (
            <>
              <p className="text-xs text-[#9A9A9A] mb-4">
                Download the complete technical documentation for this product.
              </p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <Download size={13} />
                DOWNLOAD DATASHEET PDF
              </a>
            </>
          ) : (
            <>
              <p className="text-xs text-[#9A9A9A] mb-1">
                DATASHEET AVAILABLE ON REQUEST
              </p>
              <p className="text-xs text-[#6b6b6b] mb-4">
                Contact our team to request technical documentation for {productName}.
              </p>
              <Link href="/contact" className="btn-secondary inline-flex text-xs">
                CONTACT US
                <ArrowRight size={12} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
