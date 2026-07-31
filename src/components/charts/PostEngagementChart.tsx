// PostEngagementChart.tsx
"use client";

import { Post } from "@/types/post";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  posts: Post[];
};

export default function PostEngagementChart({ posts }: Props) {
  // Get top 10 posts by views
  const data = posts
    .sort((a, b) => b.views - a.views)
    .slice(0, 10)
    .map((post) => ({
      title:
        post.title.length > 15 ? `${post.title.slice(0, 15)}...` : post.title,
      views: post.views,
      likes: post.reactions.likes,
      dislikes: post.reactions.dislikes,
    }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
      >
        <XAxis
          dataKey="title"
          tick={{
            fontSize: 10,
            className: "fill-muted-foreground",
            fontWeight: 500,
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
        />
        <Tooltip
          content={({ active, payload }: any) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-3 shadow-lg">
                  <p className="font-medium text-foreground">
                    {payload[0].payload.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Views: {payload[0].payload.views}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Likes: {payload[0].payload.likes}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dislikes: {payload[0].payload.dislikes}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Bar dataKey="views" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        <Bar dataKey="likes" fill="#22c55e" radius={[6, 6, 0, 0]} />
        <Bar dataKey="dislikes" fill="#ef4444" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
