import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RecordsPage from "./pages/RecordsPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

const pages = {
  home: HomePage,
  dashboard: DashboardPage,
  records: RecordsPage,
  login: LoginPage,
  register: RegisterPage
};

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const ActivePage = pages[activePage];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <ActivePage onNavigate={setActivePage} />
    </div>
  );
}

export default App;
