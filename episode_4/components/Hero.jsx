import Card from "./Card";

export const Hero = ({ foodAPI }) => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-search">
          <input type="search" placeholder="Start searching food..." />
          <button>Search</button>
        </div>
        <div className="hero-section-card">
          {foodAPI.map((e) => (
            <div key={e.id}>
              {console.log(e)}
              <Card
                srcImg={e.srcImg}
                restaName={e.restaName}
                foodName={e.foodName}
                star={e.star}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
