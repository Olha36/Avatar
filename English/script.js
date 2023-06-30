let trailer = document.querySelector('.trailer')
console.log(trailer);
const menuButton = document.querySelector(".menu-button");
console.log(menuButton);
const video = document.querySelector(".video");

trailer.addEventListener('click', function() {
    video.style.display = 'block';
    if (video.style.display === 'block') {
        trailer.style.display = 'none';
        menuButton.style.display='flex'
    }
})
menuButton.addEventListener('click', function() {
    video.style.display = 'none';
    if (video.style.display === 'none') {
        trailer.style.display = 'block'
        menuButton.style.display='none'
    }
})