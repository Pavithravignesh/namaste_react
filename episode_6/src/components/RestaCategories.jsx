import { useState } from "react";
import { ItemList } from "./ItemList";

// controlled component
export const RestaCategories = ({
    title,
    itemCards,
    showAccordion,
    setShowIndex,
    index
}) => {
    // const [showAccordion, setShowAccordion] = useState(false);
    // console.log(itemCards);
    return (
        <div
            onClick={() => { setShowIndex(index) }}
            style={{ cursor: "pointer" }}>
            {/* header */}
            < h2 > {title}({itemCards.length})</h2 >
            {/* body */}
            {showAccordion && <ItemList itemCards={itemCards} />}
        </div >
    )
};