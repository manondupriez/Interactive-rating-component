const ratingBar = []
const setRatingBar = (minScore, maxScore) => {
    for (let i = minScore; i <= maxScore; i++) {
        ratingBar.push(document.getElementById('rating-item-' + i))
    }
}
setRatingBar(1, 5)

const selectRating = () => {
    ratingBar.forEach(element => {
        element.addEventListener('click', () => {
            ratingBar.forEach(item => {
                item.classList.remove('selected');
                item.classList.remove('before-selected')
            })
            element.classList.add('selected')
            element.nextElementSibling.classList.add('before-selected')
        })
    })
}
selectRating()

const submitRating = () => {
    document.getElementById('submit-button').addEventListener('click', () => {
        ratingBar.forEach((element, index) => {
            if (element.classList.contains('selected')) {
                document.getElementById('rating-area').classList.add('d-none')
                document.getElementById('thanks-area').classList.remove('d-none')
                document.getElementById('user-rating-value').innerText = index + 1
            } else {
                document.getElementById('error').classList.remove('d-none')
            }
        })
    })
}
submitRating()