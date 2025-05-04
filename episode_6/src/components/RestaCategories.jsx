import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaCategories = ({
    title,
    itemCards
}) => {
    const [showAccordion, setShowAccordion] = useState(false);
    // console.log(itemCards);
    return (
        <div onClick={() => { setShowAccordion((prev) => !prev) }} style={{ cursor: "pointer" }}>
            {/* header */}
            < h3 > {title}({itemCards.length})</h3 >
            {/* body */}
            {showAccordion && <ItemList itemCards={itemCards} />}
        </div >
    )
};