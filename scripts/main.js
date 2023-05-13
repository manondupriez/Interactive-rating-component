const ratingBar = []
const setRatingBar = (minScore, maxScore) => {
    for (let i = minScore; i <= maxScore; i++) {
        ratingBar.push(document.getElementById('rating-item-' + i))
    }
}
setRatingBar(1, 5)
console.log(ratingBar.length)

