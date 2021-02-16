export default function calcAvRate(reviews) {
    let rateSum = 0;
    if (reviews.length > 0) {
        reviews.forEach(review => {
            rateSum = rateSum + review.rating
        })
        rateSum = rateSum / reviews.length
    }
    return rateSum.toFixed(2);
}
