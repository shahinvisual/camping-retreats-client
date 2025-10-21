import useCard from "../../Hooks/useCard";
import ShowCard from "./ShowCard";

const CardItem = () => {
    const [cartItems] = useCard();
    console.log(cartItems);
    return (
        <div className=" mx-auto m-24 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <h1>{cartItems.length}</h1> */}
                {
                    cartItems.map(item => <ShowCard key={item.ID} item={item} />)
                }
            </div>
        </div>
    );
};

export default CardItem;