type ErrorMessageProps = {
  message?: string;
};

export default function ErrorMessage({
  message = "Something went wrong",
}: ErrorMessageProps) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-6">
      <h2 className="font-bold text-red-700">Error</h2>

      <p className="mt-2 text-red-600">{message}</p>
    </div>
  );
}
