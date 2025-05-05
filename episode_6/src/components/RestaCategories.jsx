import { useState } from "react";
import { ItemList } from "./ItemList";

// controlled component
export const RestaCategories = ({
    title,
    itemCards,
    showAccordion,
    setShowIndex,
    setToggle,
    dummy
}) => {
    // const [showAccordion, setShowAccordion] = useState(false);
    // console.log(showAccordion);
    // console.log(dummy);
    return (
        <div
            onClick={() => { setShowIndex(); setToggle((prev) => !prev) }}
            style={{ cursor: "pointer" }}>
            {/* header */}
            < h2 > {title}({itemCards.length})</h2 >
            {/* body */}
            {showAccordion && <ItemList itemCards={itemCards} dummy={dummy} />}
        </div >
    )
};