const summaryCards = [
  { label: "Total Users", value: "128", note: "Registered accounts" },
  { label: "Active Records", value: "342", note: "Currently managed" },
  { label: "Pending Reviews", value: "18", note: "Need attention" },
  { label: "Archived", value: "64", note: "Completed records" }
];

function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">UI-05</p>
          <h1 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Dashboard</h1>
          <p className="mt-2 text-slate-600">Summary placeholders for the Mini Management System.</p>
        </div>
        <button className="w-full rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 active:scale-[0.99] sm:w-auto">
          View Records
        </button>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md" key={card.label}>
            <p className="text-sm font-medium text-slate-500">{card.label}</p>
            <p className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">{card.value}</p>
            <p className="mt-2 text-sm text-slate-500">{card.note}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-950">Recent Activity</h2>
          <div className="mt-4 divide-y divide-slate-100">
            <p className="py-3 text-sm text-slate-600">Record activity placeholder.</p>
            <p className="py-3 text-sm text-slate-600">User activity placeholder.</p>
            <p className="py-3 text-sm text-slate-600">System update placeholder.</p>
          </div>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-950">Quick Status</h2>
          <div className="mt-4 space-y-3 text-sm">
            <StatusRow label="Frontend" value="Ready" />
            <StatusRow label="Backend API" value="Pending" />
            <StatusRow label="Database" value="Pending" />
          </div>
        </article>
      </section>
    </main>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md bg-slate-50 px-3 py-2">
      <span className="text-slate-600">{label}</span>
      <span className="font-semibold text-slate-950">{value}</span>
    </div>
  );
}

export default DashboardPage;
