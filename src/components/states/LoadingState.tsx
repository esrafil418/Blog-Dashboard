import { Loader2 } from "lucide-react";

type LoadingStateProps = {
  message?: string;
};

export default function LoadingState({
  message = "Loading...",
}: LoadingStateProps) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />

      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
