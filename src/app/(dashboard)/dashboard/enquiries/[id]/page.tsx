import Link from "next/link";
import { notFound } from "next/navigation";
import { RecommendationList } from "@/components/dashboard/RecommendationList";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { employees, enquiries } from "@/lib/mock-data";
import { recommendEmployees } from "@/lib/recommendation";
import { formatCurrency, formatDate } from "@/lib/utils";

// Tells Next.js which [id] values exist, so these pages can be built ahead of time.
// Later (with a database) this will query the real enquiry ids.
export function generateStaticParams() {
  return enquiries.map((enquiry) => ({ id: enquiry.id }));
}

// In this Next.js version, route params arrive as a Promise, so we await them.
export default async function EnquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const enquiry = enquiries.find((e) => e.id === id);
  if (!enquiry) notFound();

  const recommendations = recommendEmployees(enquiry.requiredSkills, employees);

  return (
    <>
      <p className="mb-3 text-sm">
        <Link href="/dashboard/enquiries" className="text-blue-700 hover:underline">
          &larr; Back to enquiries
        </Link>
      </p>
      <PageHeader
        title={`${enquiry.company}: ${enquiry.projectType}`}
        description={`Received ${formatDate(enquiry.createdAt)} from ${enquiry.clientName} (${enquiry.email})`}
        action={<StatusBadge status={enquiry.status} />}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardTitle>Requirements</CardTitle>
          <p className="mt-3 text-sm text-slate-700">{enquiry.description}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-slate-500">Budget</dt>
              <dd className="font-medium text-slate-900">{formatCurrency(enquiry.budget)}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Timeline</dt>
              <dd className="font-medium text-slate-900">{enquiry.timeline}</dd>
            </div>
          </dl>
          <div className="mt-4">
            <p className="mb-2 text-sm text-slate-500">Requested features</p>
            <div className="flex flex-wrap gap-2">
              {enquiry.features.map((feature) => (
                <Badge key={feature}>{feature}</Badge>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-sm text-slate-500">Skills required</p>
            <div className="flex flex-wrap gap-2">
              {enquiry.requiredSkills.map((skill) => (
                <Badge key={skill} tone="blue">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        <div>
          <h2 className="mb-3 text-base font-semibold text-slate-900">
            Recommended team members
          </h2>
          <RecommendationList items={recommendations} />
        </div>
      </div>
    </>
  );
}
