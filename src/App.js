import "./App.css";
import "@mantine/core/styles.css";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import NavbarNested from "./Component/Dashboard/Sidebar/NavbarNested";
import Dashboard from "./Component/pages/dashboard/Dashboard";
import Header from "./Component/Dashboard/Navbar/Header";


function App() {
  return (
    <div className="flex bg-slate-50 h-screen">
      <div className=" w-1/4 h-full overflow-hidden ">
        <NavbarNested />
      </div>
      <div className="w-3/4 overflow-y-auto ">
      <div className="">

        <Header />
      </div>
        <div className="pl-4 pt-6">
          <Routes>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
