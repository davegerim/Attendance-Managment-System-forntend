import "./App.css";
import "@mantine/core/styles.css";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarNested from "./Component/Dashboard/Sidebar/NavbarNested";
import Dashboard from "./Component/pages/dashboard/Dashboard";
import Header from "./Component/Dashboard/Navbar/Header";
import { Attendance } from "./Component/dashboard pages/Attendance";

function App() {
  const location = useLocation();
  const hideSidebarAndHeader = location.pathname === "/login" || location.pathname === "/profile"; 
 


  return (
    <div className="flex bg-slate-50 h-screen">
      {!hideSidebarAndHeader && ( // Conditionally render the sidebar
        <div className="w-1/4 h-full overflow-hidden">
          <NavbarNested />
        </div>
      )}
      <div
        className={`${
          hideSidebarAndHeader ? "w-full" : "w-3/4"
        } overflow-y-auto`}
      >
        {!hideSidebarAndHeader && ( // Conditionally render the header
          <div>
            <Header />
          </div>
        )}
        <div className="pl-4 pt-6">
          <Routes>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
