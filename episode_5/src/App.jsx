import foodAPI from "../utils/foodAPIData";
import { LOGO_URL } from "../utils/image";
import { Header, Footer, Hero } from "./components/index";

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
        <Hero foodAPI={foodAPI} />
        <Footer />
      </div>
    </>
  );
};
