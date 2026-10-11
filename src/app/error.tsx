"use client";

import { Button } from "@/components/ui/Button";

// Error boundary: shown when something crashes while rendering a page.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 py-20 text-center">
      <p className="text-xl font-semibold text-slate-900">Something went wrong</p>
      <p className="max-w-md text-sm text-slate-600">{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
