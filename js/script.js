var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
    delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  
  
  function lift1(){
  
  document.getElementById('myImage1')
  
  .src="images/lift1.jpg";  
  
  }
  
  function lift2(){
  
  document.getElementById('myImage1')
  
  .src="images/lift2.jpg";  
  
  }
 
  
  function hd1(){
  
  document.getElementById('myImage2')
  
  .src="images/hydraulic1.jpg";  
  
  }
  
  function hd2(){
  
  document.getElementById('myImage2')
  
  .src="images/hydraulic2.jpg";  
  
  }
  
  function apfc1(){
  
  document.getElementById('myImage3')
  
  .src="images/apfc2.jpg";  
  
  }
  
  function apfc2(){
  
  document.getElementById('myImage3')
  
  .src="images/apfc3.jpg";  
  
  }
  
  function apfc3(){
  
  document.getElementById('myImage3')
  
  .src="images/Apfc.jpeg";  
  
  }
  
  function meter1(){
  
  document.getElementById('myImage4')
  
  .src="images/meter1.jpg";  
  
  }
  
  function meter2(){
  
  document.getElementById('myImage4')
  
  .src="images/meter2.jpg";  
  
  }
  
    
  function feed1(){
  
  document.getElementById('myImage5')
  
  .src="images/feeder1.jpg";
  
  }
  
  function feed2(){
  
  document.getElementById('myImage5')
  
  .src="images/feeder2.jpg";
  
  
  }
  
  function feed3(){
  
  document.getElementById('myImage5')
  
  .src="images/feeder3.jpg";  
  
  }
  
  function flp1(){
  
  document.getElementById('myImage6')
  
  .src="images/flp3.jpg";
  
  }
  
  function flp2(){
  
  document.getElementById('myImage6')
  
  .src="images/flpremote1.jpg";
  
  
  }
  
  function flp3(){
  
  document.getElementById('myImage6')
  
  .src="images/flp4.jpg";  
  
  }
  
  function flp4(){
  
  document.getElementById('myImage6')
  
  .src="images/flp2.jpg";
  
  }
  
  
  function vfd1(){
  
  document.getElementById('myImage7')
  
  .src="images/vfd2.jpg";  
  
  }
  
  function vfd2(){
  
  document.getElementById('myImage7')
  
  .src="images/vfd1.png";  
  
  }
  
  function vfd3(){
  
  document.getElementById('myImage7')
  
  .src="images/vfd3.jpg";  
  
  }
  
  $(".carousel").owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
            0:{
            items:1,
            nav: false
            },
            600:{
            items:3,
            nav: false
            },
            1000:{
            items:3,
            nav: false
            }
            }
            });
    
    $(".carousel2").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
    0:{
    items:1,
    nav: false
    },
    600:{
    items:2,
    nav: false
    },
    1000:{
    items:3,
    nav: false
    }
    }
    });