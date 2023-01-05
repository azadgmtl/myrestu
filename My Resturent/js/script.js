var navbar = document.querySelector('.header .navbar');

var menu = document.querySelector('#menu_bars');

menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};




// Slider Swiper js 

var swiper = new Swiper(".home_slider", 
{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: 
    {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".food_slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    // spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });





 let previewContainer = document.querySelector('.food_preview_container');
let previewBox = previewContainer.querySelectorAll('.food_preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#preview_close').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};





var swiper = new Swiper(".menu_slider", {
    grabCursor:true,
    loop:true,
    autoHeight: true,
    centeredSlides:true,
    spaceBetween: 10,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
 });




 var swiper = new Swiper(".blog_slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });










function loader()
{
   document.querySelector('.loader_container').classList.add('fade-out');
}
 
function fadeOut()
{
   setInterval(loader, 4000);
}
 
window.onload = fadeOut();
 






