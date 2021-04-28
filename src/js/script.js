const slider = tns(  {
    container: '.slider-wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navContainer: ".nav-controls__dots",
    speed: "1000"
    });
    

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });


  const carousel = tns({
    container: '.carousel__solution',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false,
    speed: '1000'

  });

  document.querySelector('.prev2').onclick = function () {
    carousel.goTo('prev');
  };
  document.querySelector('.next2').onclick = function () {
    carousel.goTo('next');
  };

  $(document).ready(function(){
    $('[data-modal=access]').on('click', function() {
      $('.overlay, #access').fadeIn('slow');
    });
    $('[data-modal=contact]').on('click', function() {
      $('.overlay, #contact').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay,#access, #contact').fadeOut('slow');
    });
  });