import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/context/cartSlice";

const Cart = () => {

  const cartValue = useSelector((store) => store.cart.items);
  console.log(cartValue);

  const dispatch = useDispatch();

  return cartValue.length ? (
    <>
      <div className="">
        <h1>Cart</h1>
      </div>
      <h3>you're at the Cart page!</h3>
      <button type="button" onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>
      {cartValue.map((item, i) => (
        <div className="" key={item?.card?.info?.id}>
          <div className="food-cart-container">
            <img
              className="food-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
            />
            <span className="food-name-details">
              <div className="food-name">{item?.card?.info?.name}</div>
              <div className="food-description">{item?.card?.info?.description}</div>
            </span>
            <span className="food-price-details">
              <div className="food-price">$ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</div>
              {/* <div className="food-discount">food discount</div> */}
            </span>
          </div>
          <div className="total-sum">
            {/* <div className="calculated-price">$40</div>
            <div className="calculated-discount">$20</div> */}
          </div>
        </div>
      ))}
    </>
  ) : "";
};

export default Cart;
