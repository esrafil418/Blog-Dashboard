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
};

export default function DashboardStatCard({
  title,
  value,
  description,
  href,
}: DashboardStatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>

        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>

      <CardFooter className="justify-end">
        <Link href={href} className="text-sm text-primary hover:underline">
          View more →
        </Link>
      </CardFooter>
    </Card>
  );
}
