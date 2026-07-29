import { TriangleAlert } from "lucide-react";

type ErrorStateProps = {
  message?: string;
};

export default function ErrorState({
  message = "Something went wrong.",
}: ErrorStateProps) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-4">
      <TriangleAlert className="h-10 w-10 text-red-500" />

      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
