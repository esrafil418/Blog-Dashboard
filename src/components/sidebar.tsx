"use client";

import NavigationLinks from "./NavigationLinks";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-60 border-r bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto shrink-0">
      <div className="p-4">
        <NavigationLinks />
      </div>
    </aside>
  );
}
