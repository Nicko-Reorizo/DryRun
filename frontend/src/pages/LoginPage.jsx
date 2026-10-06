function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center justify-center px-6 py-10">
      <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">UI-03</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Login</h1>
        <p className="mt-2 text-sm text-slate-600">Enter your account details to continue.</p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Email address</span>
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              name="email"
              placeholder="user@example.com"
              required
              type="email"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              name="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </label>

          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input className="h-4 w-4 rounded border-slate-300 text-blue-700" name="remember" type="checkbox" />
              Remember me
            </label>
            <a className="font-medium text-blue-700 hover:text-blue-900" href="#forgot-password">
              Forgot password?
            </a>
          </div>

          <button
            className="w-full rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
