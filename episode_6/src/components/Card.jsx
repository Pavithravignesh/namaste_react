import { useContext } from "react";
import UserContext from "../../utils/context/userContext";

export const Card = ({
  cloudinaryImageId,
  restaName,
  localtion,
  costForTwo,
  avgRating,
  cuisines,
  isOpen
}) => {

  // consuming it
  const { loginUser } = useContext(UserContext);

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
            <h4>{loginUser}</h4>
          </div>
          <div className="card-details">
            {/* <h4 className="wrap-text">{cuisines.join(", ")}</h4> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const HigherOrderComponent = (Component) => {
  return ({
    cloudinaryImageId,
    restaName,
    localtion,
    costForTwo,
    avgRating,
    cuisines,
    isOpen
  }) => {
    return (
      <>
        <label htmlFor="">open</label>
        <Component
          cloudinaryImageId={cloudinaryImageId}
          restaName={restaName}
          localtion={localtion}
          costForTwo={costForTwo}
          avgRating={avgRating}
          cuisines={cuisines}
          isOpen={isOpen}
        />
      </>
    )
  }
}; 