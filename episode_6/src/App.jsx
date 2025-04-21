import { Outlet } from "react-router";
import foodAPI from "../utils/foodAPIData";
import { LOGO_URL } from "../utils/image";
import { Header, Footer, Hero } from "./components/index";

import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorConponent from "./ErrorComponent";
import { Hero } from "./components";
import Career from "./components/Career";
import RestaMenu from "./components/RestaMenu";

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
        element: <About />,
        errorElement: <ErrorConponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
