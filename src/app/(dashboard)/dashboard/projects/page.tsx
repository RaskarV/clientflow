import type { Metadata } from "next";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Card, CardTitle } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { projects } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" description="All projects from kickoff to delivery." />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <CardTitle>{project.name}</CardTitle>
                <p className="text-sm text-slate-500">{project.clientName}</p>
              </div>
              <StatusBadge status={project.status} />
            </div>
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs text-slate-600">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <ProgressBar value={project.progress} label={`${project.name} progress`} />
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-600">
              <span>Team: {project.team.join(", ")}</span>
              <span>Due {formatDate(project.deadline)}</span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
