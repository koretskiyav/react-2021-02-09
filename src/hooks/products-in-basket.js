export default function productsInBasket(orders, restaurants) {
    const allProducts = findAllProductsFromRestaurants(restaurants);
    return getProductsById(orders, allProducts);
}
function findAllProductsFromRestaurants(restaurants) {

    let arr = restaurants.map((restaurant) => {
        let result = restaurant.menu.map((data) => {
            return data;
        });
        return result;
    });

    let result = [];
    arr.forEach(function(item) {
        result.push(...item)
    });
    return result;
}

function getProductsById(orders, allProducts) {
    const products = [];
    for (let key in orders) {
        let product = allProducts.find(item => item.id === key);
        if (product !== undefined && orders[key] > 0) {
            products.push(product);
        }
    }
    return products;
}