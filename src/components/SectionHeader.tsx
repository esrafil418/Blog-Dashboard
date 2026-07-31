type Props = {
  title: string;
  description?: string;
};

export default function SectionHeader({ title, description }: Props) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>

      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
