import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type DashboardStatCardProps = {
  title: string;
  value: string | number;
  description?: string;
};

export default function DashboardStatCard({
  title,
  value,
  description,
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
    </Card>
  );
}
