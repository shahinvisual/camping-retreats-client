import { useEffect, useState } from "react";

const useCard = () => {
    const [cartItems, setCardItems] = useState([])
    useEffect(() => {
        fetch('../../public/camping.json')
            .then(res => res.json())
            .then(data => {
                setCardItems(data)
            })
    }, [])
    return [cartItems];
};

export default useCard;