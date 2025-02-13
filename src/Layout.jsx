import { Outlet } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext";
import { Footer, Navbar } from "./components";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <FormProvider>
      <Toaster richColors position="top-right" />
      <div className="p-5">
        <div className="gradient-circle" />
        <div className="space-y-5">
          <Navbar />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </div>
    </FormProvider>
  );
}
