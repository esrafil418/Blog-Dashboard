import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export default function EmptyState({
  title = "Nothing here",
  description = "There is no data to display.",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-63 flex-col items-center justify-center gap-3">
      <Inbox className="h-10 w-10 text-muted-foreground" />

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
}
