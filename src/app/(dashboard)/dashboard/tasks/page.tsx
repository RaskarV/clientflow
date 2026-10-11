import type { Metadata } from "next";
import { TaskBoard } from "@/components/dashboard/TaskBoard";
import { PageHeader } from "@/components/ui/PageHeader";
import { tasks } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Tasks" };

export default function TasksPage() {
  return (
    <>
      <PageHeader title="Tasks" description="Work in progress across all projects." />
      <TaskBoard tasks={tasks} />
    </>
  );
}
