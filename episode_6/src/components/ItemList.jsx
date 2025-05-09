import { useEffect, useState } from "react";
import CartBtn from "./CartBtn";

// controlled component
export const ItemList = ({ itemCards, dummy }) => {

    // cart related
    // const [cartCount, setCartCount] = useState(0);
    // const [addToggle, setAddToggle] = useState(true);


    return (<div>
        {
            itemCards.map((item) => {
                return (
                    <div key={item?.card?.info?.id} >
                        <div className="">
                            <span>{item?.card?.info?.name} </span>
                            <CartBtn />
                        </div>
                        {item?.card?.info?.imageId ? <img
                            className="food-img"
                            src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                                item?.card?.info?.imageId
                            }
                        />
                            : ""}
                        <div>
                            ₹
                            {item.card.info.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice / 100}
                        </div>
                        <p>{item?.card?.info?.description}</p>
                    </div>)
            })
        }
    </div>)
};