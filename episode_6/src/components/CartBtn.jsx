import { useEffect, useState } from "react";

const CartBtn = () => {

    const [cartCount, setCartCount] = useState(0);
    const [addToggle, setAddToggle] = useState(true);

    useEffect(() => {
        if (cartCount <= 0) {
            setAddToggle(true);
            setCartCount(0);
        };
    }, [cartCount]);

    return (<span>
        {addToggle ? (
            <button type="button" onClick={() => {
                setAddToggle(false);
                setCartCount((prev) => prev + 1);
            }}>ADD</button>
        ) : (
            <div>
                <button type="button" onClick={() => setCartCount((prev) => prev + 1)}>+</button>
                <span>{cartCount}</span>
                <button type="button" onClick={() => setCartCount((prev) => prev - 1)}>-</button>
            </div>
        )}
    </span>
    )
};
export default CartBtn;