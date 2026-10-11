// Simple horizontal bar chart made with plain divs (no chart library yet).

export interface BarItem {
  label: string;
  value: number;
}

export function BarChart({ items, unit = "" }: { items: BarItem[]; unit?: string }) {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-slate-700">{item.label}</span>
            <span className="font-medium text-slate-900">
              {item.value}
              {unit}
            </span>
          </div>
          <div className="h-3 rounded bg-slate-100">
            <div
              className="h-3 rounded bg-blue-600"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
