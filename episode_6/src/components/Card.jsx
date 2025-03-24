export const Card = ({ srcImg, restaName, foodName, star }) => {
  return (
    <>
      {" "}
      <div className="resta-container">
        <div className="card">
          <div className="card-main">
            <h4>{restaName}</h4>
            <img className="food-img" src={srcImg} />
          </div>
          <div className="card-details">
            <h4>{foodName}</h4>
            <h4>{star}</h4>
          </div>
          <div className="card-details">
            <h4>{foodName}</h4>
            <h4>{star}</h4>
          </div>
          <div className="card-details">
            <h4>{foodName}</h4>
            <h4>{star}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
