import { navigation } from "@/config/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function MobileSidebar() {
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="rounded-md border p-2">
          <Menu className="h-5 w-5" />
        </SheetTrigger>

        <SheetContent side="left">
          <nav className="mt-8 flex flex-col gap-4">
            {navigation.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "font-semibold text-primary"
                      : "text-muted-foreground"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
