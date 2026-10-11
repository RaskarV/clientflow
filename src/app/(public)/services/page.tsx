import type { Metadata } from "next";
import { ServiceCard } from "@/components/public/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { SERVICES } from "@/lib/site-data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Our services</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        From a simple marketing site to a full web application, we cover the whole journey.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <ButtonLink href="/enquiry" className="mt-8">
        Start a project
      </ButtonLink>
    </div>
  );
}
