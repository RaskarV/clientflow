import { Card } from "@/components/ui/Card";
import { formatDate, formatStatus } from "@/lib/utils";
import type { Task, TaskStatus } from "@/types";

const columns: TaskStatus[] = ["TODO", "IN_PROGRESS", "DONE"];

// Kanban-style board: one column per status.
export function TaskBoard({ tasks }: { tasks: Task[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {columns.map((status) => {
        const items = tasks.filter((t) => t.status === status);
        return (
          <div key={status} className="rounded-xl bg-slate-100 p-3">
            <h2 className="mb-3 flex justify-between text-sm font-semibold text-slate-700">
              <span>{formatStatus(status)}</span>
              <span className="text-slate-500">{items.length}</span>
            </h2>
            <div className="space-y-3">
              {items.map((task) => (
                <Card key={task.id} className="p-3">
                  <p className="text-sm font-medium text-slate-900">{task.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{task.projectName}</p>
                  <div className="mt-2 flex justify-between text-xs text-slate-600">
                    <span>{task.assignee}</span>
                    <span>Due {formatDate(task.due)}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
