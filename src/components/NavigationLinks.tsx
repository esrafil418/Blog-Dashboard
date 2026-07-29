"use client";

import { navigation } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLinksProps = {
  onNavigate?: () => void;
};

export default function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 py-4">
      {navigation.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={`rounded-md px-4 py-2 transition-colors ${
              isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
