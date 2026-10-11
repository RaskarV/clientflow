import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { Recommendation } from "@/types";

const factors: { key: keyof Recommendation["breakdown"]; label: string }[] = [
  { key: "skillMatch", label: "Skills" },
  { key: "availability", label: "Availability" },
  { key: "workloadFit", label: "Workload" },
  { key: "experience", label: "Experience" },
];

// Shows ranked employees with a score AND the reason (breakdown).
export function RecommendationList({ items }: { items: Recommendation[] }) {
  return (
    <div className="space-y-3">
      {items.map((rec, index) => (
        <Card key={rec.employee.id}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">#{index + 1}</p>
              <p className="font-semibold text-slate-900">{rec.employee.name}</p>
              <p className="text-sm text-slate-600">{rec.employee.role}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-800">{rec.score}</p>
              <p className="text-xs text-slate-500">match score</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {factors.map((factor) => (
              <div key={factor.key}>
                <p className="mb-1 text-xs text-slate-600">{factor.label}</p>
                <ProgressBar
                  value={Math.round(rec.breakdown[factor.key] * 100)}
                  label={`${rec.employee.name} ${factor.label}`}
                />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
