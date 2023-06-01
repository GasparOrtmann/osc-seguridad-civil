document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 0 ){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})


const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const img = document.querySelector("#header");
const navList = document.querySelector("#nav-list");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    img.classList.add("shadow");
})

navList.addEventListener("click", () => {
    nav.classList.remove("visible");
    img.classList.remove("shadow");
})