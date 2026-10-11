import Link from "next/link";

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <p className="text-sm text-slate-500">Agency dashboard</p>
      <div className="flex items-center gap-3 text-sm">
        <span className="text-slate-700">Admin User</span>
        <Link href="/login" className="text-blue-700 hover:underline">
          Log out
        </Link>
      </div>
    </header>
  );
}
