import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 2,
    srcImg:
      "https://media.istockphoto.com/id/1127522349/photo/indian-food-chicken-biryani-curry-butter-chicken-palak-paneer-papad-dal-and-naan-bread-on.jpg?s=1024x1024&w=is&k=20&c=nemXBtyJPVUsmim0hrhFx6FJjAcIVGZ38iuojmlvUVU=",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 3,
    srcImg:
      "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 4,
    srcImg:
      "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 5,
    srcImg:
      "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },
  {
    id: 6,
    srcImg:
      "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 7,
    srcImg:
      "https://media.istockphoto.com/id/1127522349/photo/indian-food-chicken-biryani-curry-butter-chicken-palak-paneer-papad-dal-and-naan-bread-on.jpg?s=1024x1024&w=is&k=20&c=nemXBtyJPVUsmim0hrhFx6FJjAcIVGZ38iuojmlvUVU=",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 8,
    srcImg:
      "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 9,
    srcImg:
      "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },

  {
    id: 10,
    srcImg:
      "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg",
    restaName: "Asifibriyani",
    foodName: "briyani",
    star: "⭐⭐⭐⭐",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo-img"
            src="https://www.figma.com/community/resource/d3ce5064-a3ee-468b-8245-0e47504800f2/thumbnail"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Carceer</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-search">
          <input type="search" placeholder="Start searching food..." />{" "}
          <button>Search</button>
        </div>
        <div className="hero-section-card">
          {foodAPI.map((e) => (
            <div key={e.id}>
              <div className="resta-container">
                <div className="card">
                  <div className="card-main">
                    <h4>{e.restaName}</h4>
                    <img className="food-img" src={e.srcImg} />
                  </div>
                  <div className="card-details">
                    <h4>{e.foodName}</h4>
                    <h4>{e.star}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
    </>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);
