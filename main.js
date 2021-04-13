const imageElement = document.querySelector('.background-image');
const images = ['./img/cinthia-aguilar-6KL5DRngGRM-unsplash.jpg',
                './img/kid.jpg',
                './img/rowan-heuvel-U6t80TWJ1DM-unsplash.jpg'];
let times = 0;

setInterval(changeImage, 2500)

function changeImage(){
    imageElement.src = images[times];
    times = (times + 1) % images.length;
}