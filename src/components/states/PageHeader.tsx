type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-bold">{title}</h1>

      {description && <p className="text-muted-foreground">{description}</p>}
    </section>
  );
}
