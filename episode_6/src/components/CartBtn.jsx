import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, clearCart, removeItems } from "../../utils/context/cartSlice";

const CartBtn = ({ item }) => {

    const [cartCount, setCartCount] = useState(0);
    const [addToggle, setAddToggle] = useState(true);


    const dispatch = useDispatch();

    useEffect(() => {
        if (cartCount <= 0) {
            setAddToggle(true);
            setCartCount(0);
        };
    }, [cartCount]);

    const handleCartClick = (argu) => {
        switch (argu) {
            case "add":
                dispatch(addItems(item));
                break;

            case "+":
                dispatch(addItems(item));
                break;

            case "-":
                dispatch(removeItems());
                break;

            case "clear":
                dispatch(clearCart());
                break;

            default:
                break;
        }
    };

    return (<span>
        {addToggle ? (
            <button type="button" onClick={() => {
                handleCartClick("add");
                setAddToggle(false);
                setCartCount((prev) => prev + 1);
            }}>ADD</button>
        ) : (
            <div>
                <button type="button" onClick={() => {
                    handleCartClick("+");
                    setCartCount((prev) => prev + 1);
                }}>+</button>
                <span>{cartCount}</span>
                <button type="button" onClick={() => {
                    handleCartClick("-");
                    setCartCount((prev) => prev - 1);
                }}>-</button>
                {/* <button type="button" onClick={() => {
                    handleCartClick("clear");
                    setCartCount(0);
                }}>Clear</button> */}

            </div>
        )}
    </span>
    )
};
export default CartBtn;