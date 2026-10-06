import Navbar from "./components/Navbar.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <DashboardPage />
    </div>
  );
}

export default App;
