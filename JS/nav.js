// const header = document.querySelector("nav-bg");
// const topSection = document.querySelector(".hero");
// const options = {
//     threshold: 0.5,
// }

// const onScroll = (entries, observer) => {
//     const entry = entries[0];
//     if(!entry.isIntersecting){
//         header.classList.add("on-scroll");
//     }else{
//         header.classList.remove("on-scroll");
//     }
// };

// const navObserver = new IntersectionObserver(onScroll, options);

// navObserver.observe(topSection);

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".nav-bg").css("background" , "var(--darkBlue)");
//         }
  
//         else{
//             $(".nav-bg").css("background" , "transparent");  	
//         }
//     })
//   })

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 0 ){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})