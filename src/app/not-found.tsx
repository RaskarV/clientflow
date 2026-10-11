import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 py-20 text-center">
      <p className="text-5xl font-bold text-blue-900">404</p>
      <p className="text-slate-600">We could not find that page.</p>
      <ButtonLink href="/">Go home</ButtonLink>
    </div>
  );
}
