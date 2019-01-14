;
(function($) {
  "use strict";

  function preloader() {
    if ($('.preloader').length) {
      $(window).on('load', function() {
        $(".preloader").delay(5000).fadeOut('1000');
        $('body').delay(5000).css({
          'overflow': 'visible'
        });
        setTimeout(function(){
          $(".section-left").addClass("preloader-animation-left");
          $(".section-right").addClass("preloader-animation-right");
        }, 3000);
      });
    }
  };
  new WOW().init();
  preloader();
})(jQuery);

// Btn Top
$(window).scroll(function() {
  if ($(this).scrollTop() >= 75) {
    $('.btn-top').fadeIn(50);
  }
  else {
    $('.btn-top').fadeOut(50);
  }
});

$('.btn-top').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 1300);
});

$(".readMore").css("color","blue");
$(".readMore").click(function(e){
  e.preventDefault();
  var open = $(this).attr("data-open");
  if(open==="false"){
    $(this).text("Згорнути");
    $(this).attr("data-open","true");
    // $(this).css("color","blue");
    $(this).parent().find(".dots").css("display","none");
    $(this).parent().find(".more").css("display","inline");
  }else{
    $(this).text("Детальніше...");
    $(this).attr("data-open","false");
    // $(this).css("color","blue");
    $(this).parent().find(".dots").css("display","inline");
    $(this).parent().find(".more").css("display","none");

  }
});

// Read More
function readMore1() {
  var dots = document.getElementById("dots-1");
  var moreText = document.getElementById("more-1");
  var btnText = document.getElementById("readMoreBtn-1");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}
function readMore2() {
  var dots = document.getElementById("dots-2");
  var moreText = document.getElementById("more-2");
  var btnText = document.getElementById("readMoreBtn-2");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}
function readMore3() {
  var dots = document.getElementById("dots-3");
  var moreText = document.getElementById("more-3");
  var btnText = document.getElementById("readMoreBtn-3");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше... ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}
function readMore4() {
  var dots = document.getElementById("dots-4");
  var moreText = document.getElementById("more-4");
  var btnText = document.getElementById("readMoreBtn-4");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}
function readMore5() {
  var dots = document.getElementById("dots-5");
  var moreText = document.getElementById("more-5");
  var btnText = document.getElementById("readMoreBtn-5");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}
function readMore6() {
  var dots = document.getElementById("dots-6");
  var moreText = document.getElementById("more-6");
  var btnText = document.getElementById("readMoreBtn-6");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}
function readMore7() {
  var dots = document.getElementById("dots-7");
  var moreText = document.getElementById("more-7");
  var btnText = document.getElementById("readMoreBtn-7");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}
function readMore8() {
  var dots = document.getElementById("dots-8");
  var moreText = document.getElementById("more-8");
  var btnText = document.getElementById(" Btn-8");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Детальніше... ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Згорнути";
    moreText.style.display = "inline";
  }
}

// Navbar
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  $('.fixHamb').css('display', 'none');
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  $('.hamburger').removeClass('is-active');
  $('.fixHamb').css('display', 'block');
  $('#hambFadeIn').addClass('animated fadeIn');
}

// Smooth Scroll
$('.dropdown-item ,.navLink, .navbar-brand, .logo').click(function() {
  var sectionTo = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(sectionTo).offset().top
  }, 1000);
});
var forEach = function(t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else
    for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
