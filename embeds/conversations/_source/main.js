var left = document.querySelector('.button-left');
var right = document.querySelector('.button-right');
var carousel = document.querySelectorAll('li.carousel-item');
var countRight = 3;
var countLeft = 0;
var pixels = 378;
var pixelsl = -378;
var b = 378;
var r = true;
var l = false;

right.addEventListener('click', function(){
  if(r === true){
    for(var i = 0; i < carousel.length; i++){
      carousel[i].style.transform = "translateX(-"+pixels+"px)";
    }
    pixels = pixels + 378;
    pixelsl = pixelsl + 378;
    console.log(pixelsl);
    countRight --;
    countLeft ++;
    l = true;
    left.dataset.active = 'true';
    if(countRight === 1){
      r = false;
      right.dataset.active = 'false';
    }
  }
});

left.addEventListener('click',function(){
  if(l === true) {
    for(var i = 0; i < carousel.length; i++){
      carousel[i].style.transform = "translateX(-"+pixelsl+"px)";
    }
    pixels = pixels - 378;
    pixelsl = pixelsl - 378;
    countRight ++;
    countLeft --;
    r = true;
    right.dataset.active= 'true';
    if(countLeft === 0){
      l = false;
      left.dataset.active = 'false';
    }
  }
});
