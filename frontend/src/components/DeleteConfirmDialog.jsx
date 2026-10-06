import { useEffect } from "react";

function DeleteConfirmDialog({
  open,
  record,
  onCancel,
  onConfirm,
  loading = false,
}) {
  // Close on Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape" && !loading) onCancel?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, loading, onCancel]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
      onClick={() => {
        if (!loading) onCancel?.();
      }}
      role="presentation"
    >
      <div
        aria-labelledby="delete-confirm-title"
        aria-modal="true"
        className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
        role="alertdialog"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
            ⚠
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              COMP-05
            </p>
            <h2
              className="mt-2 text-lg font-semibold text-slate-950"
              id="delete-confirm-title"
            >
              Delete record?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              This action cannot be undone.
              {record?.title ? (
                <>
                  {" "}
                  You are about to delete{" "}
                  <span className="font-semibold text-slate-950">
                    "{record.title}"
                  </span>
                  .
                </>
              ) : null}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={loading}
            onClick={onCancel}
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={loading}
            onClick={onConfirm}
            type="button"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmDialog;