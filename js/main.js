let rating = document.querySelector('.film__app'),
    ratingItem = document.querySelectorAll('.film__star');

rating.onclick = function(e){
  let target = e.target;
  if(target.classList.contains('film__star')){
    removeClass(ratingItem,'current-active')
    target.classList.add('film__active','current-active');
  }
}
 
rating.onmouseover = function(e) {
  let target = e.target;
  if(target.classList.contains('film__star')){
    removeClass(ratingItem,'film__active')
    target.classList.add('film__active');
    mouseOverActiveClass(ratingItem)
  }
}
rating.onmouseout = function(){
  addClass(ratingItem,'film__active');
  mouseOutActiveClas(ratingItem);
}

function removeClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.remove(arguments[j]);
    }
  }
}
function addClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr){
  for(let i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('film__active')){
      break;
    }else {
      arr[i].classList.add('film__active');
    }
  }
}

function mouseOutActiveClas(arr){
  for(let i = arr.length-1; i >=1; i--) {
    if(arr[i].classList.contains('current-active')){
      break;
    }else {
      arr[i].classList.remove('film__active');
    }
  }
}

+function () {

  document.querySelector('.tab').classList.add('people__active')
  document.querySelector('.people__wrapper').classList.add('people__active')
  
  function selectPanel (e) {
      var target = e.target.dataset.target
  
      document.querySelectorAll('.tab, .people__wrapper').forEach(el => el.classList.remove('people__active'))
      e.target.classList.add('people__active')
      console.log(document.querySelector('.' + target))
      document.querySelector('.' + target).classList.add('people__active')
  }
  
  document.querySelectorAll('.tab').forEach(el => {
      el.addEventListener('click', selectPanel)
  })
  
  }();
// Слайдер
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    speed: 400,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1335: {
        slidesPerView: 4,
      },
      990: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    }
});

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__m-menu,.header__mid').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
