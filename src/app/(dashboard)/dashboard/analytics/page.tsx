import type { Metadata } from "next";
import { BarChart } from "@/components/dashboard/BarChart";
import { Card, CardTitle } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { employees, enquiries, projects } from "@/lib/mock-data";
import { formatCurrency, formatStatus } from "@/lib/utils";
import type { EnquiryStatus, ProjectStatus } from "@/types";

export const metadata: Metadata = { title: "Analytics" };

const enquiryStatuses: EnquiryStatus[] = ["NEW", "IN_REVIEW", "PROPOSAL_SENT", "WON", "LOST"];
const projectStatuses: ProjectStatus[] = ["PLANNING", "IN_PROGRESS", "ON_HOLD", "COMPLETED"];

export default function AnalyticsPage() {
  const won = enquiries.filter((e) => e.status === "WON").length;
  const lost = enquiries.filter((e) => e.status === "LOST").length;
  const conversion = won + lost === 0 ? 0 : Math.round((won / (won + lost)) * 100);
  const pipelineValue = enquiries
    .filter((e) => e.status !== "LOST" && e.status !== "WON")
    .reduce((sum, e) => sum + e.budget, 0);

  return (
    <>
      <PageHeader title="Analytics" description="Enquiries, projects and team workload." />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Conversion rate" value={`${conversion}%`} hint="Won / (Won + Lost)" />
        <StatCard label="Open pipeline value" value={formatCurrency(pipelineValue)} />
        <StatCard label="Enquiries won" value={won} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardTitle>Enquiries by status</CardTitle>
          <div className="mt-4">
            <BarChart
              items={enquiryStatuses.map((status) => ({
                label: formatStatus(status),
                value: enquiries.filter((e) => e.status === status).length,
              }))}
            />
          </div>
        </Card>

        <Card>
          <CardTitle>Projects by status</CardTitle>
          <div className="mt-4">
            <BarChart
              items={projectStatuses.map((status) => ({
                label: formatStatus(status),
                value: projects.filter((p) => p.status === status).length,
              }))}
            />
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <CardTitle>Team workload (% of capacity)</CardTitle>
          <div className="mt-4">
            <BarChart
              unit="%"
              items={employees.map((e) => ({
                label: e.name,
                value: Math.round((e.allocatedHours / e.capacityHours) * 100),
              }))}
            />
          </div>
        </Card>
      </div>
    </>
  );
}
