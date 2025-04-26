import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "./Card";
import { RestaMockData } from "../../utils/mockData";
// import foodAPI from "../../utils/foodAPIData";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

export const Hero = ({ foodAPI }) => {
  let updatedFoodAPI = foodAPI; // it's an normal js variable(state variable), which require developer to do the shallow and deep copy,

  // RestaMockData;
  const [initialData, setInitialData] = useState([]);
  const [state, setState] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [ipValue, setIpValue] = useState("");

  // console.log(state);
  // console.log(filtered);

  useEffect(() => {
    fetchData();
    setState(initialData);
    setFiltered(initialData);
  }, []);

  //   fetchData(); // this will surely get you error!

  // const declarion of function, usually cannot accessed before it's initialization, however we're that respective fn in called inside useEffect which rendering condition is after render, so that's the reason why it didn't throw any error's
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.023645&lng=77.003261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setInitialData(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setState(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFiltered(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      console.log("fetched successfully!!!");
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  function findSearch() {
    // console.log("findSearch()");
    // setState(foodAPI);
    setFiltered(
      updatedFoodAPI.filter((e) =>
        e.restaName.toLowerCase().includes(ipValue.toLowerCase())
      )
    );
  }

  // condition render
  return state.length === 0 ? (
    <>
      {/* {state.map((e) => (
          <div id={e.id}> */}
      <ShimmerUI />
      {/* </div>
        ))} */}
    </>
  ) : (
    <>
      <div className="hero-section">
        <div className="hero-section-top">
          <div className="search-section">
            <input
              type="search"
              placeholder="Start searching food..."
              value={ipValue}
              onChange={(e) => setIpValue(e.target.value)}
            />
            <button className="search-btn" onClick={() => findSearch()}>
              Search
            </button>
          </div>
          <div className="filter-section">
            <button
              className="filter-btn"
              onClick={() => {
                // updatedFoodAPI = updatedFoodAPI.filter(
                //   (e) => e.star.length > 4
                // );
                setFiltered(updatedFoodAPI.filter((e) => e.star.length >= 4));
              }}
              onMouseOver={() => console.log("onMouseOver")}
            >
              Filter the food
            </button>
          </div>
        </div>
        <div className="hero-section-card">
          {filtered.map((e) => (
            <Link key={e?.info?.id} to={"/restaurants/" + e?.info?.id}>
              <Card
                cloudinaryImageId={e?.info?.cloudinaryImageId}
                restaName={e?.info?.name}
                localtion={e?.info?.locality}
                costForTwo={e?.info?.costForTwo}
                avgRating={e?.info?.avgRating}
                cuisines={e?.info?.cuisines}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
