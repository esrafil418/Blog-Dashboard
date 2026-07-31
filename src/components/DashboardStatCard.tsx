import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type DashboardStatCardProps = {
  title: string;
  value: string | number;
  description?: string;
  href: string;
  icon: LucideIcon;
};

export default function DashboardStatCard({
  title,
  value,
  description,
  href,
  icon: Icon,
}: DashboardStatCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-4xl font-bold tracking-tight">{value}</p>

        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>

      <CardFooter className="justify-end">
        <Link
          href={href}
          className="text-sm font-medium text-primary hover:underline"
        >
          View details →
        </Link>
      </CardFooter>
    </Card>
  );
}
