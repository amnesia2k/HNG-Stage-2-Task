import { Outlet } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext";
import { Footer, Navbar } from "./components";

export default function Layout() {
  return (
    <FormProvider>
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
