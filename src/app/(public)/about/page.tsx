import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">About ClientFlow</h1>
      <p className="mt-4 text-slate-700">
        We are a small digital agency that believes good projects start with clear
        communication. Every enquiry is reviewed by a real person, matched with the team
        members whose skills fit best, and tracked until delivery.
      </p>
      <p className="mt-4 text-slate-700">
        Our internal platform keeps requirements, people and progress in one place, so you
        always know where your project stands.
      </p>
    </div>
  );
}
