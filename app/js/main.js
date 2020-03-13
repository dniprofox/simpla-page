$(function () {
  ////////menu
	$('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.header__menu-md').slideToggle();
  });
  //////////searh-form
  $(".header__content-search").click(function() {
    $(".content-search__form").toggle(400);    
  }); 

  //slider
  $('.catalog__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,         
    vertical: true,  
    nextArrow: '<span><i class="fas fa-chevron-down"></i></span>',
    prevArrow: false,
    asNavFor: '.catalog__slider-nav'
  });
  $('.catalog__slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.catalog__items',    
    vertical: true,        
    centerMode: true,    
    focusOnSelect: true
  });

  // read more  
  $(".about__text").elimore({
    maxLength: 146,
    moreText: "полный текст",
    lessText: "Свернуть текст"    
    });
     
  ///rateo
    $(".rate-star").rateYo({
      rating: 5,
      starWidth: "13px",      
      ratedFill: "#ff3801"
    });
  /////////////////basket-count
    var bagItem = 0;
    function buyItem() {  
      var increasedBagItem = bagItem += 1;
      $('.basket__count').html( increasedBagItem);
    }
    $(document).on('click', '.catalog-item__button', buyItem);  
  });
// active-link  
  $('a[href^="#"').click(function () {       
    $(this).css({
      'color': '#004bee'
    });    
  
});