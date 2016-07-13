function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error) {
                    error(xhr);
                }
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


function getQueryParams(qs) {
  qs = qs.split('+').join(' ');
  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}

var o;
loadJSON("https://interactive.guim.co.uk/docsdata-test/19rdYZQAumdMvq0WR0eXdci6z8yrf55P30U9KZNjw5Hk.json", function(data) {
  var line = parseInt(getQueryParams(document.location.search).cta);
  var d = data.sheets.Sheet1[line-1];
  if (!isNaN(line)) {
    if (d) {
      // console.log('can do replacements')
      // console.log(d.Link)
      // console.log(d.CTA)

      var $cta_link = document.getElementById("cta-link");
        $cta_link.setAttribute('href', d.Link);
      var $cta_text = document.getElementById("cta-text");
        $cta_text.innerHTML = d.CTA;

      // console.log($cta_link);
      // console.log($cta_text);

    }
  }
});

//
//   var $player = document.getElementById("podcard-player");
//   var $audio = document.getElementById("podcard-audio");
//   var $play_btn = document.getElementById("podcard-play-btn");
//   var $total_time = document.getElementById("podcard-total-time");
//   var $progress_bar = document.getElementById("podcard-svg-bar");
//   var $podcast_title = document.getElementById("podcard-podcast-title");
//   var $podcast_link = document.getElementById("podcard-podcast-link");
//   var $episode_link = document.getElementById("podcard-episode-title");
//
//
//   // update text content fr spreadsheet
//   $episode_link.innerHTML = episode_title;
//   $episode_link.setAttribute('href', episode_link);
//
//   $podcast_link.setAttribute('href', podcast_link);
//
//   $podcast_title.innerHTML = podcast_title;
//
//   // set src on audio
//   $audio.setAttribute("src", episode_mp3);
//
//   // set total time once it can play thru
//   var audio_duration = 3600; // default to one hour…
//   $audio.onloadedmetadata = function(){
//     audio_duration = $audio.duration;
//     $total_time.innerHTML = duration_in_min_sec($audio.duration);
//   }
//
//   // play / pause with button
//   $play_btn.onclick = function(){
//     if ($audio.paused) {
//       $audio.play();
//       $player.setAttribute("data-status", "playing");
//       // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
//       ga('send', 'event', 'Audio', 'Play', 'Play', 1);
//     } else {
//       $audio.pause();
//       $player.setAttribute("data-status", "paused");
//       ga('send', 'event', 'Audio', 'Pause', 'Pause', 1);
//     }
//   };
//
//   // as time passes:
//   // - update current time indicator
//   // - update progress bar
//   // - set up times to track google analytics
//   var track = {};
//     track[3] = {s:false, n: '3 seconds (i.e started playing)'};
//     track[60] = {s:false, n: 'One minute'};
//     track[120] = {s:false, n: 'two minute'};
//     track[audio_duration/4] = {s:false, n: '25% complete'};
//     track[audio_duration/2] = {s:false, n: '50% complete'};
//     track[audio_duration/4*3] = {s:false, n: '75% complete'};
//     track[audio_duration-60] = {s:false, n: 'Complete'};
//
//   $audio.ontimeupdate = function(){
//     var current_time = $audio.currentTime;
//     var $current_time = document.getElementById("podcard-current-time");
//     $current_time.innerHTML = duration_in_min_sec(current_time);
//
//     var progress = Math.ceil(current_time/audio_duration*860);
//     $progress_bar.setAttribute("stroke-dasharray", progress + "," + "1000");
//
//     for(var i in track) {
//       if (track[i]['s']==false && current_time>i) {
//         track[i]['s']=true; // dont track again
//         ga('send', 'event', 'Audio', track[i]['n'], track[i]['n'], 1);
//       }
//     }
//   }
//
//   // track outbound links
//   $podcast_link.onclick = function(e) {
//     ga('send', 'event', {
//       eventCategory: 'Podcast index link',
//       eventAction: 'click',
//       eventLabel: event.target.href,
//       transport: 'beacon'
//     });
//   }
//   $episode_link.onclick = function(e) {
//     ga('send', 'event', {
//       eventCategory: 'Episode link',
//       eventAction: 'click',
//       eventLabel: event.target.href,
//       transport: 'beacon'
//     });
//   }
//
//
//
// });