import './scss/index.scss'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// Voting system variables

const likesInput = document.querySelector('#likes-count')
const dislikesInput = document.querySelector('#dislikes-count')
const likeBtn = document.querySelector('#like-btn')
const dislikeBtn = document.querySelector('#dislike-btn')
// Likes and dislikes counters
let likes = 0
let dislikes = 0

// Like button click listener
likeBtn.addEventListener('click', () => {
   dislikeBtn.classList.remove('active')
   likeBtn.classList.add('active')
   likes++
   likesInput.value = likes
})

// Dislike button click listener
dislikeBtn.addEventListener('click', () => {
   likeBtn.classList.remove('active')
   dislikeBtn.classList.add('active')
   dislikes++
   dislikesInput.value = dislikes
})