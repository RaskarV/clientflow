import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = { title: "Start a project" };

export default function EnquiryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Start a project</h1>
      <p className="mt-2 mb-8 text-slate-600">
        Tell us about your idea. The more detail you share, the better we can help.
      </p>
      <EnquiryForm />
    </div>
  );
}
