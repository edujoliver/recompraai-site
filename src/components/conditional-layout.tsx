"use client";

import { usePathname } from "next/navigation";
import { Navbar4 } from "@/components/navbar4";
import FooterSection from "@/components/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar4 />
      <main className="flex-1">{children}</main>
      <FooterSection />
    </>
  );
}
