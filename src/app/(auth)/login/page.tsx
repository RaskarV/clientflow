import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = { title: "Staff login" };

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-2xl font-bold text-blue-900">ClientFlow</h1>
        <Card>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Staff login</h2>
          <LoginForm />
        </Card>
        <p className="mt-4 text-center text-sm">
          <Link href="/" className="text-blue-700 hover:underline">
            Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
