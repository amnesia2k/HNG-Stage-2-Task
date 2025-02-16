import { Outlet } from "react-router-dom";
import { useFormContext } from "./contexts/FormContext";
import { Navbar } from "./components";
import { Toaster } from "sonner";
import useNetworkStatus from "./hooks/useNetworkStatus";
import Offline from "./pages/Offline";

export default function Layout() {
  const { step } = useFormContext();
  const { isOnline } = useNetworkStatus();

  if (!isOnline) {
    return (
      <>
        <div className="gradient-circle" />
        <Offline />
      </>
    );
  }

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className={`${step === 3 ? "p-3" : "p-5"}`}>
        <div className="gradient-circle" />
        <div className="space-y-5">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
