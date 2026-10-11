import { Hero } from "@/components/public/Hero";
import { ServiceCard } from "@/components/public/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { SERVICES, STEPS } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-900">What we do</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <ButtonLink href="/services" variant="secondary">
            View all services
          </ButtonLink>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.title} className="text-center">
                <h3 className="font-semibold text-blue-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Ready to start?</h2>
        <p className="mt-2 text-slate-600">It takes about two minutes to send us your enquiry.</p>
        <ButtonLink href="/enquiry" className="mt-5">
          Start a project
        </ButtonLink>
      </section>
    </>
  );
}
