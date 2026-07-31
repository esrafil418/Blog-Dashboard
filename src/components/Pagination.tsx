type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="cursor-pointer rounded border px-4 py-2 transition-opacity disabled:opacity-50"
      >
        Previous
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="cursor-pointer rounded border px-4 py-2 transition-opacity disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
