import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Layout from "../Layout";
import Tickets from "../pages/Tickets";
import About from "../pages/About";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="my-tickets" element={<Tickets />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
