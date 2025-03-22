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

const foodAPI = [
  {
    id: 1,
    srcImg:
      "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐",
  },

  {
    id: 2,
    srcImg:
      "https://media.istockphoto.com/id/1127522349/photo/indian-food-chicken-biryani-curry-butter-chicken-palak-paneer-papad-dal-and-naan-bread-on.jpg?s=1024x1024&w=is&k=20&c=nemXBtyJPVUsmim0hrhFx6FJjAcIVGZ38iuojmlvUVU=",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐",
  },

  {
    id: 3,
    srcImg:
      "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐⭐",
  },

  {
    id: 4,
    srcImg:
      "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐",
  },

  {
    id: 5,
    srcImg:
      "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    srcImg:
      "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 7,
    srcImg:
      "https://media.istockphoto.com/id/1127522349/photo/indian-food-chicken-biryani-curry-butter-chicken-palak-paneer-papad-dal-and-naan-bread-on.jpg?s=1024x1024&w=is&k=20&c=nemXBtyJPVUsmim0hrhFx6FJjAcIVGZ38iuojmlvUVU=",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 8,
    srcImg:
      "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 9,
    srcImg:
      "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 10,
    srcImg:
      "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg",
    restaName: "Asifi briyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },
];

const logoImg =
  "https://www.figma.com/community/resource/d3ce5064-a3ee-468b-8245-0e47504800f2/thumbnail";

export const App = () => {
  return (
    <>
      <div className="app">
        <Header logoImg={logoImg} />
        <Hero foodAPI={foodAPI} />
        <Footer />
      </div>
    </>
  );
};
