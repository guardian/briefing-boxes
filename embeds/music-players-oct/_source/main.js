console.log('running 1');
var musicPlayer = document.getElementsByClassName('guardian__music-player');
console.log(musicPlayer, 'outside loop');
console.log(musicPlayer.length, 'outside loop');

for(var i=0; i < musicPlayer.length; i++) {
    musicPlayer[i].addEventListener('click', function(){
        this.classList.toggle('clicked');
    });
}
