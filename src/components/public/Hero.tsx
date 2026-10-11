import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-blue-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          We turn client ideas into delivered websites
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Tell us what you need. We match your project with the right experts and keep you
          updated from first enquiry to launch.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/enquiry" className="bg-white text-blue-900 hover:bg-blue-50">
            Start a project
          </ButtonLink>
          <ButtonLink
            href="/services"
            variant="ghost"
            className="text-white hover:bg-blue-800"
          >
            See our services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
