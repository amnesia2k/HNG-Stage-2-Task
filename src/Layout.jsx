import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="p-5">
      <div className="gradient-circle" />
      <div className="space-y-5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
