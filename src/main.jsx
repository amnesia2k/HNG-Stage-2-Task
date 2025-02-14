import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.jsx";
import { FormProvider } from "./contexts/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <FormProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </FormProvider>
);
