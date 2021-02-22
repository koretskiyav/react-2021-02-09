export default function totalInBasket(products, orders) {
    let total = 0;
    for (let key in orders) {
        let product = products.find(item => item.id === key);
        if (product !== undefined && orders[key] > 0) {
            total += orders[key] * product.price;
        }
    }
    return total;
}
