import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import BasePage from "../pages/BasePage";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
  {
    Component: BasePage,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
