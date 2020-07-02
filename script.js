let hamburger = document.querySelector('.hamburger');
let li = document.querySelectorAll('li');
hamburger.addEventListener('click', () => {
    document.querySelector('.navigation .items').
    classList.toggle('next');
    li.forEach(function (link) {
        link.classList.toggle('fade');
    })
})