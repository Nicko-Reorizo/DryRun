import { useEffect, useState } from "react";
import AddRecordForm from "../components/AddRecordForm.jsx";
import RecordsTable from "../components/RecordsTable.jsx";
import EditRecordModal from "../components/EditRecordModal.jsx";
import DeleteConfirmDialog from "../components/DeleteConfirmDialog.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

// 🔌 Mock data — Dev 5 will replace with API calls (INT-03 → INT-07)
const MOCK_RECORDS = [
  {
    id: "1",
    title: "Quarterly report",
    description: "Q3 financials for the leadership review.",
    category: "Finance",
    status: "active",
  },
  {
    id: "2",
    title: "Onboarding checklist",
    description: "Steps for new hires joining the team.",
    category: "HR",
    status: "pending",
  },
  {
    id: "3",
    title: "Legacy migration notes",
    description: "Archived notes from the 2023 migration.",
    category: "Engineering",
    status: "archived",
  },
];

function RecordsPage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [recordToDelete, setRecordToDelete] = useState(null);

  // Simulate fetching records on mount
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setRecords(MOCK_RECORDS);
      setLoading(false);
    }, 600); // fake network delay to show the spinner (COMP-07)
    return () => clearTimeout(timer);
  }, []);

  // COMP-01 — Add
  const handleAdd = async (newRecord) => {
    setSaving(true);
    try {
      // Dev 5: await createRecord(newRecord)
      const created = { ...newRecord, id: String(Date.now()) };
      setRecords((current) => [created, ...current]);
    } finally {
      setSaving(false);
    }
  };

  // COMP-04 — Edit
  const handleSaveEdit = async (updatedRecord) => {
    setSaving(true);
    try {
      // Dev 5: await updateRecord(updatedRecord.id, updatedRecord)
      setRecords((current) =>
        current.map((record) =>
          (record.id ?? record._id) === (updatedRecord.id ?? updatedRecord._id)
            ? { ...record, ...updatedRecord }
            : record
        )
      );
      setEditingRecord(null);
    } finally {
      setSaving(false);
    }
  };

  // COMP-05 — Delete
  const handleConfirmDelete = async () => {
    if (!recordToDelete) return;
    setSaving(true);
    try {
      const id = recordToDelete.id ?? recordToDelete._id;
      // Dev 5: await deleteRecord(id)
      setRecords((current) =>
        current.filter((record) => (record.id ?? record._id) !== id)
      );
      setRecordToDelete(null);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            COMP-01 → COMP-07
          </p>
          <h1 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl lg:text-4xl">
            Records
          </h1>
          <p className="mt-2 text-slate-600">
            Add, search, edit, and delete records from one place.
          </p>
        </div>
      </section>

      <div className="mt-8 space-y-6">
        <AddRecordForm onAdd={handleAdd} loading={saving} />

        {loading ? (
          <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
            <LoadingSpinner message="Fetching records..." />
          </section>
        ) : (
          <RecordsTable
            onDelete={(id) => {
              const match = records.find((r) => (r.id ?? r._id) === id);
              setRecordToDelete(match ?? { id });
            }}
            onEdit={(record) => setEditingRecord(record)}
            records={records}
          />
        )}
      </div>

      <EditRecordModal
        loading={saving}
        onClose={() => setEditingRecord(null)}
        onSave={handleSaveEdit}
        record={editingRecord}
      />

      <DeleteConfirmDialog
        loading={saving}
        onCancel={() => setRecordToDelete(null)}
        onConfirm={handleConfirmDelete}
        open={Boolean(recordToDelete)}
        record={recordToDelete}
      />
function RecordsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Records</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Records</h1>
        <p className="mt-3 text-slate-600">Records content will be added by the records CRUD ticket.</p>
      </section>
    </main>
  );
}

export default RecordsPage;
export default RecordsPage;
