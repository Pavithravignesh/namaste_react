import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { RESTUAURANT_CARD_DATA } from "../../utils/constants";
import useFetchRestaMenu from "../../utils/useFetchRestatMenu";

export const Hero = ({ foodAPI }) => {
  const [initialData, setInitialData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [ipValue, setIpValue] = useState("");

  // Fetch restaurant data using custom hook
  const data = useFetchRestaMenu(RESTUAURANT_CARD_DATA);

  // Extract restaurants safely
  const restaurants = data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle;

  // Load data when restaurants change
  useEffect(() => {
    if (restaurants?.restaurants) {
      setInitialData(restaurants.restaurants);
      setFiltered(restaurants.restaurants);
    }
  }, [restaurants]);

  // Search handler
  function findSearch() {
    const searchValue = ipValue.toLowerCase();
    const filteredResults = initialData.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchValue)
    );
    setFiltered(filteredResults);
  }

  // Filter by rating
  function filterHighRated() {
    const filteredResults = initialData.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4.1
    );
    setFiltered(filteredResults);
  }

  // Show loading shimmer if restaurants haven't loaded yet
  if (!restaurants?.restaurants) return <ShimmerUI />;

  return (
    <div className="hero-section">
      <div className="hero-section-top">
        <div className="search-section">
          <input
            type="search"
            placeholder="Start searching food..."
            value={ipValue}
            onChange={(e) => setIpValue(e.target.value)}
          />
          <button className="search-btn" onClick={findSearch}>
            Search
          </button>
        </div>

        <div className="filter-section">
          <button className="filter-btn" onClick={filterHighRated}>
            Filter the food
          </button>
        </div>
      </div>

      <div className="hero-section-card">
        {filtered.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
            <Card
              cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
              restaName={restaurant?.info?.name}
              localtion={restaurant?.info?.locality}
              costForTwo={restaurant?.info?.costForTwo}
              avgRating={restaurant?.info?.avgRating}
              cuisines={restaurant?.info?.cuisines}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
