import { useMemo, useState } from "react";

const STATUS_STYLES = {
  active: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  archived: "bg-slate-200 text-slate-600",
};

function RecordsTable({ records = [], onEdit, onDelete, pageSize = 5 }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // COMP-03: client-side search across title, description, category, status
  const filteredRecords = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return records;

    return records.filter((record) => {
      const haystack = [
        record.title,
        record.description,
        record.category,
        record.status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [records, search]);

  // COMP-06: pagination
  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const paginatedRecords = filteredRecords.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const goToPrevious = () => setPage((current) => Math.max(1, current - 1));
  const goToNext = () =>
    setPage((current) => Math.min(totalPages, current + 1));

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <header className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            COMP-02 · COMP-03 · COMP-06
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950 sm:text-xl">
            Records
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {filteredRecords.length}{" "}
            {filteredRecords.length === 1 ? "record" : "records"}
            {search ? ` matching "${search}"` : ""}
          </p>
        </div>

        <label className="block w-full sm:w-64">
          <span className="sr-only">Search records</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            onChange={handleSearchChange}
            placeholder="Search records..."
            type="search"
            value={search}
          />
        </label>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3 font-semibold">Title</th>
              <th className="px-5 py-3 font-semibold">Description</th>
              <th className="px-5 py-3 font-semibold">Category</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedRecords.length === 0 ? (
              <tr>
                <td
                  className="px-5 py-10 text-center text-sm text-slate-500"
                  colSpan={5}
                >
                  {records.length === 0
                    ? "No records yet. Add your first record above."
                    : "No records match your search."}
                </td>
              </tr>
            ) : (
              paginatedRecords.map((record) => (
                <tr
                  className="transition hover:bg-slate-50"
                  key={record.id ?? record._id}
                >
                  <td className="px-5 py-3 font-medium text-slate-950">
                    {record.title}
                  </td>
                  <td className="max-w-xs truncate px-5 py-3 text-slate-600">
                    {record.description || "—"}
                  </td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                      {record.category || "General"}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        STATUS_STYLES[record.status] ??
                        "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {record.status || "active"}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        className="text-sm font-medium text-blue-700 hover:text-blue-900"
                        onClick={() => onEdit?.(record)}
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        className="text-sm font-medium text-red-600 hover:text-red-800"
                        onClick={() => onDelete?.(record.id ?? record._id)}
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 ? (
        <footer className="flex flex-col gap-3 border-t border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-medium text-slate-700">
              {startIndex + 1}–
              {Math.min(startIndex + pageSize, filteredRecords.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium text-slate-700">
              {filteredRecords.length}
            </span>
          </p>

          <div className="flex items-center gap-2">
            <button
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={safePage === 1}
              onClick={goToPrevious}
              type="button"
            >
              Previous
            </button>
            <span className="text-sm text-slate-600">
              Page {safePage} of {totalPages}
            </span>
            <button
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={safePage === totalPages}
              onClick={goToNext}
              type="button"
            >
              Next
            </button>
          </div>
        </footer>
      ) : null}
    </section>
  );
}

export default RecordsTable;