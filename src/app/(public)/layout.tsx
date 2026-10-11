import { Footer } from "@/components/public/Footer";
import { Navbar } from "@/components/public/Navbar";

// Route group "(public)": the folder name in parentheses is NOT part of the URL.
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
