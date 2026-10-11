import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Card, CardTitle } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatCard } from "@/components/ui/StatCard";
import { enquiries, projects, tasks } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Overview" };

export default function DashboardOverviewPage() {
  const won = enquiries.filter((e) => e.status === "WON").length;
  const lost = enquiries.filter((e) => e.status === "LOST").length;
  const conversion = won + lost === 0 ? 0 : Math.round((won / (won + lost)) * 100);
  const activeProjects = projects.filter((p) => p.status === "IN_PROGRESS").length;
  const openTasks = tasks.filter((t) => t.status !== "DONE").length;
  const recent = [...enquiries]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 4);

  return (
    <>
      <PageHeader title="Overview" description="A quick look at how the agency is doing." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total enquiries" value={enquiries.length} />
        <StatCard label="Active projects" value={activeProjects} />
        <StatCard label="Open tasks" value={openTasks} />
        <StatCard label="Conversion rate" value={`${conversion}%`} hint="Won / (Won + Lost)" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardTitle>Recent enquiries</CardTitle>
          <ul className="mt-4 divide-y divide-slate-100">
            {recent.map((enquiry) => (
              <li key={enquiry.id} className="flex items-center justify-between py-3">
                <div>
                  <Link
                    href={`/dashboard/enquiries/${enquiry.id}`}
                    className="font-medium text-blue-800 hover:underline"
                  >
                    {enquiry.company}
                  </Link>
                  <p className="text-xs text-slate-500">
                    {enquiry.projectType} &middot; {formatDate(enquiry.createdAt)}
                  </p>
                </div>
                <StatusBadge status={enquiry.status} />
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <CardTitle>Project progress</CardTitle>
          <ul className="mt-4 space-y-4">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-800">{project.name}</span>
                  <span className="text-slate-500">{project.progress}%</span>
                </div>
                <ProgressBar value={project.progress} label={project.name} />
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
