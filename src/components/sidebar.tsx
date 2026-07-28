import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/users", label: "Users" },
  ];
  return (
    <aside className="w-60 border-r p-4">
      <nav className="flex flex-col gap-3">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "font-bold text-blue-500" : ""}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
