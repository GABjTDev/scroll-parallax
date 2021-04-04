window.addEventListener('DOMContentLoaded', () => {


    const $moon = document.querySelector('.moon');
    const $mountain = document.querySelector('.mountain');
    const $road = document.querySelector('.road');
    const $h2 = document.querySelector('h2');

    window.addEventListener('scroll', () => {

        const value = window.scrollY;
        
        $moon.style.left = `${value * 0.5}px`;
        $mountain.style.top = `${value * 0.5}px`;
        $road.style.bottom = `${value * 0.5}px`;
        $h2.style.top= `${value * 0.5}px`;

    })


})