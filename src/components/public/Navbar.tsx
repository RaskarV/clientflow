import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-900">
          ClientFlow
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="text-slate-600 hover:text-slate-900">
            Staff login
          </Link>
          <ButtonLink href="/enquiry">Start a project</ButtonLink>
        </nav>
      </div>
    </header>
  );
}
