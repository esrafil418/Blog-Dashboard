"use client";

import NavigationLinks from "./NavigationLinks";

export default function Sidebar() {
  return (
    <aside className="hidden w-60 border-r bg-white p-4 md:block">
      <NavigationLinks />
    </aside>
  );
}
