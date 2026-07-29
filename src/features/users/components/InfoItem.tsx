import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  value: string;
};

export default function InfoItem({ icon, label, value }: Props) {
  return (
    <div className="rounded-lg border p-4">
      <div className="mb-2 flex items-center gap-2">
        {icon}

        <span className="text-sm text-muted-foreground">{label}</span>
      </div>

      <p className="font-medium">{value}</p>
    </div>
  );
}
