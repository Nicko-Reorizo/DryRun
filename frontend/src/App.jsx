import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">UI-02</p>
          <h1 className="mt-3 text-3xl font-bold">Navigation Bar</h1>
          <p className="mt-3 text-slate-600">
            The frontend now has navigation links for Home, Dashboard, and Records. Page content will be added in
            later ticket branches.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
