import { Menu } from "lucide-react";
import NavigationLinks from "./NavigationLinks";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function MobileSidebar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="rounded-md border p-2">
          <Menu className="h-5 w-5" />
        </SheetTrigger>

        <SheetContent side="left">
          <nav className="mt-8 flex flex-col gap-4">
            <SheetContent side="left">
              <div className="mt-8">
                <NavigationLinks />
              </div>
            </SheetContent>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
