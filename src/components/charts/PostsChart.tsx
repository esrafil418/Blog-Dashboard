"use client";

import { Post } from "@/types/post";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  posts: Post[];
};

const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"];

export default function PostsChart({ posts }: Props) {
  const counts = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });

  const data = [...counts.entries()]
    .map(([tag, total]) => ({
      tag,
      total,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  const maxValue = Math.max(...data.map((item) => item.total));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-3 shadow-lg">
          <p className="font-medium text-foreground">
            {payload[0].payload.tag}
          </p>
          <p className="text-sm text-muted-foreground">
            {payload[0].value} posts
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
      >
        <XAxis
          dataKey="tag"
          tick={{
            fontSize: 12,
            fontWeight: 500,
            className: "fill-muted-foreground",
          }}
          axisLine={{ stroke: "hsl(var(--border))" }}
          tickLine={false}
          interval={0}
          angle={-15}
          textAnchor="end"
          height={60}
        />
        <YAxis
          tick={{
            fontSize: 12,
            className: "fill-muted-foreground",
          }}
          axisLine={{ stroke: "hsl(var(--border))" }}
          tickLine={false}
          domain={[0, maxValue + 1]}
        />
        <Tooltip content={<CustomTooltip />} />

        <Bar
          dataKey="total"
          radius={[6, 6, 0, 0]}
          maxBarSize={50}
          className="cursor-pointer"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              className="hover:opacity-80 transition-opacity"
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
