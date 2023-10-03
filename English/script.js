let trailer = document.querySelector('.trailer')
console.log(trailer);
const menuButton = document.querySelector(".menu-button");
console.log(menuButton);
const video = document.querySelector(".video");
const modalJoinClan = document.querySelector('.modal-join-clan');

const joinClanButton = document.querySelector('.button');
console.log(joinClanButton);
const crossModalJoinClan = document.querySelector('.cross');
console.log(crossModalJoinClan);

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

joinClanButton.addEventListener('click', function() {
    modalJoinClan.classList.add('active');
})

crossModalJoinClan.addEventListener('click', function() {
    modalJoinClan.classList.remove('active');
})