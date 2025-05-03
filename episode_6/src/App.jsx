import { Outlet } from "react-router";
import foodAPI from "../utils/foodAPIData";
import { LOGO_URL } from "../utils/image";
import { Header, Footer, Hero } from "./components/index";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorConponent from "./components/ErrorComponent";
import { Hero } from "./components";
import Career from "./components/Career";
import RestaMenu from "./components/RestaMenu";
import React, { lazy, Suspense } from "react";
import { LOGO_URL } from "../utils/image";
import ShimmerUI from "./components/ShimmerUI";

/* 
- Header;
    -> logo
    -> btn for home, carceer, contact, and about
- Hero;
    -> search bar,
    -> resta-container;
        -> card in grid;
            -> details
- Footer;
    -> usual text
*/

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

export const App = () => {
  return (
    <>
      <div className="app">
        <Header LOGO_URL={LOGO_URL} />
        {/* <Hero foodAPI={foodAPI} /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero foodAPI={foodAPI} />,
        errorElement: <ErrorConponent />,
      },
      {
        path: "/career",
        element: <Career />,
        errorElement: <ErrorConponent />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<ShimmerUI />}><About /></Suspense>,
        errorElement: <ErrorConponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorConponent />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<ShimmerUI />}>
          <Grocery />
        </Suspense>,
        errorElement: <ErrorConponent />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaMenu />,
        errorElement: <ErrorConponent />,
      },
    ],
    errorElement: <ErrorConponent />,
  },
]);
