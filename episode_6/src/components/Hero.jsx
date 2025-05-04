import React, { useEffect, useState } from "react";
import { Card, HigherOrderComponent } from "./Card";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { RESTUAURANT_CARD_DATA } from "../../utils/constants";
import useFetchRestaMenu from "../../utils/useFetchRestatMenu";
import { useOnlineStatus } from "../../utils/useOnlineStatus";

export const Hero = ({ foodAPI }) => {
  const [initialData, setInitialData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [ipValue, setIpValue] = useState("");

  const IsOpenComponent = HigherOrderComponent(Card);
  // check the network status
  // act of turning on the internet connection make the page load as it load for the very first time,
  const onlineStatus = useOnlineStatus();

  // console.log(onlineStatus);

  // Fetch restaurant data using custom hook
  const data = useFetchRestaMenu(RESTUAURANT_CARD_DATA);
  // console.log(data);
  // Extract restaurants safely
  const restaurants = data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle;


  // Load data when restaurants change
  useEffect(() => {
    if (restaurants?.restaurants) {
      setInitialData(restaurants.restaurants);
      setFiltered(restaurants.restaurants);
    }
  }, [restaurants]);

  // Search handler
  function findSearch() {
    const searchValue = initialData.filter((e) => e?.info?.name.toLowerCase().includes(ipValue.toLowerCase()));
    setFiltered(searchValue);
  }
  // Filter by rating
  function filterHighRated() {
    const searchValue = initialData.filter((e) => e?.info?.avgRating > 4.4);
    setFiltered(searchValue);
  }
  // watchout for nternet connect
  if (!onlineStatus) return <h1>Internet took down! by the enmies</h1>;

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

            {restaurant?.info?.isOpen ? <IsOpenComponent
              cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
              restaName={restaurant?.info?.name}
              localtion={restaurant?.info?.locality}
              costForTwo={restaurant?.info?.costForTwo}
              avgRating={restaurant?.info?.avgRating}
              cuisines={restaurant?.info?.cuisines}
              isOpen={restaurant?.info?.isOpen}
            /> :
              <Card
                cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
                restaName={restaurant?.info?.name}
                localtion={restaurant?.info?.locality}
                costForTwo={restaurant?.info?.costForTwo}
                avgRating={restaurant?.info?.avgRating}
                cuisines={restaurant?.info?.cuisines}
                isOpen={restaurant?.info?.isOpen}
              />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};
