document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 0 ){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))