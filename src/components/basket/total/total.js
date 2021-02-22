import totalInBasket from "../../../hooks/total-in-basket";
import {useMemo} from "react";

export default function Total({products, orders}) {
    const total = useMemo(() => {
        return totalInBasket(products, orders)
    }, [products, orders]);
    return(
        <div>Общая стоимость: {total}</div>
    )
}