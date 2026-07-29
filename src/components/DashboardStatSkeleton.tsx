import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardStatSkeleton() {
  return (
    <div className="rounded-xl border p-6 space-y-3">
      <Skeleton className="h-4 w-24" />

      <Skeleton className="h-10 w-20" />

      <Skeleton className="h-4 w-32" />
    </div>
  );
}
