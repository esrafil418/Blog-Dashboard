"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button onClick={() => router.push("/posts")}>Click me</Button>
    </main>
  );
}
