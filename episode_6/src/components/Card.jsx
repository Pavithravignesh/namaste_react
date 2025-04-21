export const Card = ({
  cloudinaryImageId,
  restaName,
  localtion,
  costForTwo,
  avgRating,
  cuisines,
}) => {
  // console.log({ cloudinaryImageId });

  // const fetchRestatMenu = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0414192&lng=77.010272&restaurantId=67645&catalog_qa=undefined&submitAction=ENTER"
  //     );
  //     const jsonData = await response.json();
  //     // console.log(jsonData);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     console.log("Fetch error:", error);
  //   }
  // };

  return (
    <>
      {" "}
      <div className="resta-container">
        <div className="card">
          <div className="card-main">
            <h4>{restaName}</h4>
            <img
              className="food-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
              }
            />
          </div>
          <div className="card-details">
            <h4>{localtion}</h4>
          </div>
          <div className="card-details">
            <h4>{costForTwo}</h4>
          </div>
          <div className="card-details">
            <h4>{avgRating}</h4>
          </div>
          <div className="card-details">
            <h4 className="wrap-text">{cuisines.join(", ")}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
