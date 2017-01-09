var photoset = document.getElementsByClassName('podcast-year--images');
var wrapper = document.getElementsByClassName('podcast-year');

setInterval(function(){
  var a = document.querySelector('.podcast-year--images.active');
  var n = document.querySelector('.podcast-year--images.active + .podcast-year--images');
  if(!wrapper[0].classList.contains('blue')){
    wrapper[0].classList.add('blue');
  }else{
    wrapper[0].classList.remove('blue');
  }
  if(!n){
    var n = photoset[0];
  }
  a.classList.remove('active');
  n.classList.add('active');
}, 3500)
