import { Outlet } from "react-router";
import foodAPI from "../utils/foodAPIData";
import { LOGO_URL } from "../utils/image";
import { Header, Footer, Hero } from "./components/index";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import ErrorConponent from "./components/ErrorComponent";
import { Hero } from "./components";
import Career from "./components/Career";
import RestaMenu from "./components/RestaMenu";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/image";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "../utils/context/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

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

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      loginUser: "test user"
    };
    setUserName(data.loginUser);
  }, []);

  return (
    <>
      <div className="app">
        {/* providing it like all */}
        <Provider store={appStore}>
          <UserContext.Provider value={{ loginUser: userName, setUserName }}>
            <UserContext.Provider value={{ loginUser: "elon musk" }}>
              <Header LOGO_URL={LOGO_URL} />
            </UserContext.Provider>
            {/* <Hero foodAPI={foodAPI} /> */}
            <Outlet />
          </UserContext.Provider>
          <Footer />
        </Provider>
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
        path: "/cart",
        element: <Cart />,
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
