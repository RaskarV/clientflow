import type { Metadata } from "next";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { clients } from "@/lib/mock-data";
import type { Client } from "@/types";

export const metadata: Metadata = { title: "Clients" };

const columns: Column<Client>[] = [
  { header: "Name", cell: (c) => <span className="font-medium text-slate-900">{c.name}</span> },
  { header: "Company", cell: (c) => c.company },
  { header: "Email", cell: (c) => c.email },
  { header: "Projects", cell: (c) => c.projects },
];

export default function ClientsPage() {
  return (
    <>
      <PageHeader title="Clients" description="People and companies we work with." />
      <DataTable columns={columns} rows={clients} />
    </>
  );
}
