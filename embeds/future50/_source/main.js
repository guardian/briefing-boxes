var photoset = document.getElementsByClassName('future-fifty--images');
var wrapper = document.getElementsByClassName('future-fifty');

setInterval(function(){
  var a = document.querySelector('.future-fifty--images.active');
  var n = document.querySelector('.future-fifty--images.active + .future-fifty--images');
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

$(document).ready(function(){
  console.log('running');
  // Click function just used as an example
  $('.spotify-button').click(function(e) {
      console.log('clicked');
      // Set Track ID
      // var track = "3A2CGMrYr5wbfQ0m3kV93kvm";
      var track = "spotify%3Atrack%3A2CGMrYr5wbfQ0m3kV93kvm,spotify%3Atrack%3A4ZAWpkCs5E22vL9qlSnoMg,spotify%3Atrack%3A64jQ1sSjTQjqH0bEdq5xmH,spotify%3Atrack%3A33oWnARWnqYqLWHuS3tLKi,spotify%3Atrack%3A3CcusG82EiJ36JOvYWh9tG,spotify%3Atrack%3A2IkMx9wQFNwZfadUtDQLVW,spotify%3Atrack%3A6I8M0qc0XP4Q5Ig8K16FWJ,spotify%3Atrack%3A2WTxIQ0ufU7AxT43ZKpllY,spotify%3Atrack%3A2eONHUmqUgHZMfGz5myENJ,spotify%3Atrack%3A3Y890loCRYBhqdGk05ZfuF,spotify%3Atrack%3A2eONHUmqUgHZMfGz5myENJ,spotify%3Atrack%3A3Y890loCRYBhqdGk05ZfuF,spotify%3Atrack%3A353AGEEWh5rL6P8xTbqqk6,spotify%3Atrack%3A6rlvOslKxBaNBTmTrKvnni,spotify%3Atrack%3A5sUrK9hjd7dMijl9RtPlc5,spotify%3Atrack%3A4gJjgZQpOiSWwf6CmaOyK8,spotify%3Atrack%3A7y7jKe3Uhn6NYUSibczyRa,spotify%3Atrack%3A6O2kn3BTbedhYlUZCVY9ft,spotify%3Atrack%3A6Muhl8sEPbYbx0phuo2hQb,spotify%3Atrack%3A62uQgbuXrtPo2LAM0bl2xi,spotify%3Atrack%3A2B64OxsLo76zUoZJ1uZTs2,spotify%3Atrack%3A0ZpBPavoID3eDbaXKSWpAD,spotify%3Atrack%3A6LNWYRFQttw6e0s2xSoxsY,spotify%3Atrack%3A53YKOFtq7UYAxdMZZHVt2A,spotify%3Atrack%3A24OMROxBMFq6feOywYhYaD,spotify%3Atrack%3A15tNKbnVn3CmU4SFPWQMDE,spotify%3Atrack%3A3bPlMzfHJMYqdAC80NLPTb,spotify%3Atrack%3A5hmiwCobK8W7KvYWozHnlR,spotify%3Atrack%3A36UuD5tbu7TyugjJLMTzCr,spotify%3Atrack%3A172rW45GEnGoJUuWfm1drt,spotify%3Atrack%3A57K5RyWj4jOlc07wRz6axh,spotify%3Atrack%3A0u13feIppLKVCojCA1bPYZ,spotify%3Atrack%3A6JvfBzqZmSiEG5MjM7OcSY,spotify%3Atrack%3A4hFnlpT7IqxdR9wfCayRw6,spotify%3Atrack%3A6BE1ayeoIJQHPPqJN79AvU,spotify%3Atrack%3A66q3yNMEO2tOsiFny1IPQW,spotify%3Atrack%3A1EBjHC2N7R5L5t6Bl0g5Hv,spotify%3Atrack%3A4x2Qjvx6ro6XM7WppiEGTt,spotify%3Atrack%3A4fi5KJ7cA8A4ivm9PdTvCX,spotify%3Atrack%3A0aGGDhjoTricJpg7BBM3SN,spotify%3Atrack%3A21E8IqPzXj5lAfEan8ODjL,spotify%3Atrack%3A4EqxIzgFYTLgrE8hjthcBH,spotify%3Atrack%3A7qqtYJj2vaSiZcYq4AyIne,spotify%3Atrack%3A0ClH9sarIXTrQLidGiM2XQ";
      console.log(track);
      $(this).spotify_add_to_playlist({
          // Playlist Name - can be whatever you like
          playlist_name:'The Guardian Future 50',
          // Client ID from your Spotify application in step 2
          client_id:'ea538a8470594993886a24cd43fc4795',
          // Track Spotify ID
          track: track
      });
      e.preventDefault();
  });

});
