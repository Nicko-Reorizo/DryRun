function HomePage({ onNavigate }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Home</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Mini Management System</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Use the navigation bar to open the dashboard, records section, login page, or registration page.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            className="rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
            onClick={() => onNavigate("login")}
            type="button"
          >
            Go to Login
          </button>
          <button
            className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            onClick={() => onNavigate("dashboard")}
            type="button"
          >
            View Dashboard
          </button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
