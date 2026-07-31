"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

type Props = {
  onEdit: () => void;
  deleteButton: React.ReactNode;
};

export default function PostActions({ onEdit, deleteButton }: Props) {
  return (
    <div className="mt-3 flex gap-3">
      <Button type="button" variant="outline" onClick={onEdit}>
        <Pencil className="mr-2 h-4 w-4" />
        Edit
      </Button>

      {deleteButton}
    </div>
  );
}
