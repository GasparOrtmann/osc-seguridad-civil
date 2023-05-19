const accordion = document.getElementsByClassName('faq__active');
// const faqBox = document.getElementsByClassName('faq__boxes');

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        // faqBox.classList.toggle('active');
        this.classList.toggle('active')
    })
}