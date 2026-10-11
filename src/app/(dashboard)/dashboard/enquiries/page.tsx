import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { enquiries } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Enquiry } from "@/types";

export const metadata: Metadata = { title: "Enquiries" };

const columns: Column<Enquiry>[] = [
  {
    header: "Client",
    cell: (e) => (
      <div>
        <p className="font-medium text-slate-900">{e.company}</p>
        <p className="text-xs text-slate-500">{e.clientName}</p>
      </div>
    ),
  },
  { header: "Type", cell: (e) => e.projectType },
  { header: "Budget", cell: (e) => formatCurrency(e.budget) },
  { header: "Status", cell: (e) => <StatusBadge status={e.status} /> },
  { header: "Received", cell: (e) => formatDate(e.createdAt) },
  {
    header: "",
    cell: (e) => (
      <Link
        href={`/dashboard/enquiries/${e.id}`}
        className="font-medium text-blue-700 hover:underline"
      >
        View
      </Link>
    ),
  },
];

export default function EnquiriesPage() {
  return (
    <>
      <PageHeader
        title="Enquiries"
        description="Every project request submitted through the website."
      />
      <DataTable columns={columns} rows={enquiries} />
    </>
  );
}
