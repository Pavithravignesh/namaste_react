import { Card } from ".";

export const Hero = ({ foodAPI }) => {
  let updatedFoodAPI = foodAPI;

  return (
    <>
      <div className="hero-section">
        <div className="hero-section-top">
          <div className="search-section">
            <input type="search" placeholder="Start searching food..." />
            <button className="search-btn">Search</button>
          </div>
          <div className="filter-section">
            <button
              className="filter-btn"
              onClick={() => {
                updatedFoodAPI = updatedFoodAPI.filter((e) => e.star.length > 4);
                console.log(updatedFoodAPI);
              }}
              onMouseOver={() => console.log("onMouseOver")}
            >
              Filter the food
            </button>
          </div>
        </div>
        <div className="hero-section-card">
          {foodAPI.map((e) => (
            <div key={e?.id}>
              <Card
                srcImg={e?.srcImg}
                restaName={e?.restaName}
                foodName={e?.foodName}
                star={e?.star}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
