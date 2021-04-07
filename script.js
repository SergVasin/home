$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
    elem = $(".buy__items");

    if(windowWidth < 1199){
      elem.addClass('owl-carousel');
      elem.addClass('buy__items-add');
  }
  else{
      elem.removeClass('owl-carousel');
      elem.removeClass('buy__items-add');
  }
}

checkWidth();

$(window).resize(function(){
    checkWidth();
});
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
    elem = $(".programm-block");

    if(windowWidth < 639){
      elem.addClass('owl-carousel');
      elem.addClass('programm-block-add');
  }
  else{
      elem.removeClass('owl-carousel');
      elem.removeClass('programm-block-add');
  }
}

checkWidth();

$(window).resize(function(){
    checkWidth();
});
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
    elem = $(".card-profit__box");

    if(windowWidth < 639){
      elem.addClass('owl-carousel');
      elem.addClass('card-profit__box-add');
  }
  else{
      elem.removeClass('owl-carousel');
      elem.removeClass('card-profit__box-add');
  }
}

checkWidth();

$(window).resize(function(){
    checkWidth();
});
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
    elem = $(".profit-box");

    if(windowWidth < 979){
      elem.addClass('owl-carousel');
      elem.addClass('profit-box-add');
  }
  else{
      elem.removeClass('owl-carousel');
      elem.removeClass('profit-box-add');
  }
}

checkWidth();

$(window).resize(function(){
    checkWidth();
});
});




$(document).ready(function(){
	$(".main-arrow__slider").owlCarousel({
		items: 1,
		loop: true,
        dots: false,
        smartSpeed: 500,
    });
    $(".programm-block-add").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 500,
    });
    $(".card-profit__box-add").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 500,
    });
    $(".profit-box-add").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 500,
    });
    $(".main-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 1000,
    });
    $(".hod-slider").owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            479:{
                items:1
            },
            639:{
                items:2
            },
            979:{
                items:2
            },
            1199:{
                items:2
            },
            1439:{
                items:2
            },
            1919:{
                items:3
            },
        }
    });
    $(".news__slider").owlCarousel({
        loop: true,
        dots: false,
        dotsEach: true,
        smartSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            479:{
                items:1
            },
            639:{
                items:2
            },
            979:{
                items:3
            },
            1199:{
                items:3
            },
            1439:{
                items:3
            },
            1919:{
                items:4
            },
        }
    });
    $(".buy__items-add").owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        dotsEach: true,
        smartSpeed: 500,
    });
    $(".object__block-copy").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true,
    });

    var owl = $('.main-arrow__slider');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
     owl.trigger('next.owl.carousel');
 })
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    })
    var owlmain = $('.main-slider');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
     owlmain.trigger('next.owl.carousel');
 })
    $('.customPrevBtn').click(function() {
        owlmain.trigger('prev.owl.carousel', [500]);

    })
    var owlnews = $('.news__slider');
    owl.owlCarousel();
    $('.NextBtn-news').click(function() {
     owlnews.trigger('next.owl.carousel');
 })
    $('.PrevBtn-news').click(function() {
        owlnews.trigger('prev.owl.carousel', [300]);

    })
    var owlprogramm = $('.programm-block-add');
    owl.owlCarousel();
    $('.NextBtn-programm').click(function() {
     owlprogramm.trigger('next.owl.carousel');
 })
    $('.PrevBtn-programm').click(function() {
        owlprogramm.trigger('prev.owl.carousel', [300]);

    })
    var owlprofit = $('.profit-box-add');
    owl.owlCarousel();
    $('.NextBtn-profit').click(function() {
     owlprofit.trigger('next.owl.carousel');
 })
    $('.PrevBtn-profit').click(function() {
        owlprofit.trigger('prev.owl.carousel', [300]);

    })
    var owlprofit_card = $('.card-profit__box-add');
    owl.owlCarousel();
    $('.NextBtn-profit__card').click(function() {
     owlprofit_card.trigger('next.owl.carousel');
 })
    $('.PrevBtn-profit__card').click(function() {
        owlprofit_card.trigger('prev.owl.carousel', [300]);

    })
    var owlhod = $('.hod-slider');
    owl.owlCarousel();
    $('.NextBtn-hod').click(function() {
     owlhod.trigger('next.owl.carousel');
 })
    $('.PrevBtn-hod').click(function() {
        owlhod.trigger('prev.owl.carousel', [300]);

    })
});





$(function() {
  var tab = $('.buy__items'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('.buy__tab').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('.buy__tab').removeClass('active__tab');
    $(this).addClass('active__tab');
    return false;
}).filter(':first').click();
});

$( document ).ready(function(){
  $( ".contact__wr" ).hover(function(){   
    $( ".contact__bg" ).toggleClass( "contact__bg-hover" )
});
});
$( document ).ready(function() {
    $(".header__btn-default").click(function() {        
        $('.header').addClass("header-popup");
    })
});
$( document ).ready(function() {
    $(".header__close-btn").click(function() {        
        $('.header').removeClass("header-popup");
    })
});




$(document).ready(function () {
    var url = document.location.toString();
    $("[href='ouritems.html']").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("current");
});
$(document).ready(function () {
    var url = document.location.toString();
    $("[href='aboutus.html']").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("current");
});
$(document).ready(function () {
    var url = document.location.toString();
    $("[href='bepartner.html']").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("current");
});
$(document).ready(function () {
    var url = document.location.toString();
    $("[href='ourcontact.html']").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("current");
});
$(document).ready(function () {
    var url = document.location.toString();
    $("[href='ournews.html']").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("current");
});





$('.mart21').show();

$("#hod-select2021").change(function(){
    $('.hod-wr21').find('.hide-item').hide();
    var selected = $('#hod-select2021 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});  


$('.deka20').show();

$("#hod-select2020").change(function(){
    $('.hod-wr20').find('.hide-item').hide();
    var selected = $('#hod-select2020 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});  


$(function() {
  var tab = $('.hod-tabs'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('.hod-tab__link').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('.hod-tab__link').removeClass('active__tab-hod');
    $(this).addClass('active__tab-hod');
    return false;
}).filter(':first').click();
});


$( document ).ready(function() {
    $(".openplan1__btn-default").click(function() {        
        $('.openplan1').addClass("openplan-active");
    })
});
$( document ).ready(function() {
    $(".openplan1__close-btn").click(function() {        
        $('.openplan1').removeClass("openplan-active");
    })
});

$( document ).ready(function() {
    $(".openplan2__btn-default").click(function() {        
        $('.openplan2').addClass("openplan-active");
    })
});
$( document ).ready(function() {
    $(".openplan2__close-btn").click(function() {        
        $('.openplan2').removeClass("openplan-active");
    })
});

$( document ).ready(function() {
    $(".news-body__link").click(function() {        
        $('.opennews').addClass("opennews-active");
    })
});
$( document ).ready(function() {
    $(".opennews1__close-btn").click(function() {        
        $('.opennews').removeClass("opennews-active");
    })
});


$(function() {
  var tab = $('.news-body'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('.news-header__link-link').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('.news-header__link-link').removeClass('active__tab-news');
    $(this).addClass('active__tab-news');
    return false;
}).filter(':first').click();
});

