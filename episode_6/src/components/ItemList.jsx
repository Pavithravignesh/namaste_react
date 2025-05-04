// controlled component
export const ItemList = ({ itemCards }) => {
    // console.log(itemCards);

    return (<div>
        {
            itemCards.map((item) => {
                return (
                    <div key={item?.card?.info?.id} >

                        <div>{item?.card?.info?.name} </div>
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