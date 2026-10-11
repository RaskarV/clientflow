import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { employees } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Employees" };

export default function EmployeesPage() {
  return (
    <>
      <PageHeader title="Employees" description="Skills, workload and availability." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {employees.map((employee) => {
          const utilisation = Math.round(
            (employee.allocatedHours / employee.capacityHours) * 100,
          );
          return (
            <Card key={employee.id}>
              <CardTitle>{employee.name}</CardTitle>
              <p className="text-sm text-slate-500">{employee.role}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {employee.skills.map((skill) => (
                  <Badge key={skill.name} tone="blue">
                    {skill.name} {skill.level}/5
                  </Badge>
                ))}
              </div>

              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs text-slate-600">
                  <span>
                    Workload ({employee.allocatedHours}/{employee.capacityHours} hrs)
                  </span>
                  <span>{utilisation}%</span>
                </div>
                <ProgressBar value={utilisation} label={`${employee.name} workload`} />
              </div>

              <p className="mt-3 text-xs text-slate-500">
                {employee.activeProjects} active &middot; {employee.completedProjects} completed
                projects
              </p>
            </Card>
          );
        })}
      </div>
    </>
  );
}
