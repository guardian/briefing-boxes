r(function(){

  console.log('this is mained');

  var $coverImgAll = document.querySelectorAll('#docs-circular .image img');
  var randIndex = Math.floor(Math.random()*$coverImgAll.length);
  var $coverImg = $coverImgAll[randIndex];

  $coverImg.setAttribute('src', $coverImg.getAttribute('data-src'));
  $coverImg.setAttribute('srcset', $coverImg.getAttribute('data-srcset'));
  $coverImg.classList.add('selected');

  var $link = document.querySelector('#docs-4by3-card');
  var n = $link.getAttribute('data-link-name') + ' : ' + $coverImg.getAttribute('alt');
  $link.setAttribute('data-link-name', n);

});
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
