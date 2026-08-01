import { Suspense } from "react";
import UsersClient from "./UsersClient";

export default function UsersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsersClient />
    </Suspense>
  );
}
