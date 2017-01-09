var photoset = document.getElementsByClassName('year-in--images');
var wrapper = document.getElementsByClassName('year-in');
function animate(){
  setInterval(function(){
    var a = document.querySelector('.year-in--images.active');
    var n = document.querySelector('.year-in--images.active + .year-in--images');
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
}
