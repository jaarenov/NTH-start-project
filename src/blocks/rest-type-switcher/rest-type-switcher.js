// (function(){
// код
// }());


var tabs = document.querySelectorAll('.tabs-nav .tabs-nav__item a');
var divs = document.querySelectorAll('.tabs-content__item');

function changeTab(event) {

 for (var i=0; i<tabs.length; i++) {
  tabs[i].parentNode.classList.remove('is-active');
  }

  event.target.parentNode.classList.add('is-active');

  for (var i=0; i<divs.length; i++) {
    divs[i].classList.remove('is-active');
  }

  var link = event.target.getAttribute('href');
  document.querySelector(link).classList.add('is-active');
}


for (var i=0; i<tabs.length; i++) {
  tabs[i].addEventListener('click', changeTab);
}
