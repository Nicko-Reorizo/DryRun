function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center justify-center px-6 py-10">
      <section className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">UI-04</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Create Account</h1>
        <p className="mt-2 text-sm text-slate-600">Fill in the required details to register a new user.</p>

        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <FormField label="First name" name="firstName" />
          <FormField label="Last name" name="lastName" />
          <FormField label="Email address" name="email" type="email" wide />
          <FormField label="Password" name="password" type="password" />
          <FormField label="Confirm password" name="confirmPassword" type="password" />

          <label className="sm:col-span-2">
            <span className="block text-sm font-medium text-slate-700">Role</span>
            <select
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              name="role"
            >
              <option>Admin</option>
              <option>Staff</option>
              <option>Viewer</option>
            </select>
          </label>

          <button
            className="rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 sm:col-span-2"
            type="submit"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
}

function FormField({ label, name, type = "text", wide = false }) {
  return (
    <label className={wide ? "sm:col-span-2" : ""}>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <input
        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        name={name}
        required
        type={type}
      />
    </label>
  );
}

export default RegisterPage;
