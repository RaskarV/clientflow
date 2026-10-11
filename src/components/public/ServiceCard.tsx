import { Card, CardTitle } from "@/components/ui/Card";

export function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </Card>
  );
}
