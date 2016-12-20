$.getJSON("https://interactive.guim.co.uk/docsdata-test/1qK-I9OOB8s38kLmy4sWiy-qWSqHXdCEyHCp7vT9igFQ.json", function(json) {
    console.log(json);
    var bulletinData = json.sheets;
    var source   = $("#data__template").html();
    var template = Handlebars.compile(source);
    var data = bulletinData;
    $(".bulletin--wrapper").append(template(data));
    console.log('do soemthing')

    var button = $('.bulletin--button');
    var c = document.querySelector('.bulletin--counter');
    var cEnd = document.querySelector('.bulletin--counter.end');
    var story = $('li.story');
    var clicker = $('.clicker');
    var l = story.length - 1;
    var counter = $('.bulletin--counter');
    var counterSpan = $('.counter');
    var count = 9;
    var secondsTimer,
        storyTimer;

    function ClearAllIntervals() {
        for (var i = 1; i < 99999; i++)
            window.clearInterval(i);
    }

    function secondsTimerF(){
      var secondsTimer = setInterval(function(){
        count --;
        counterSpan[0].innerHTML = '<span class="counter">' + count + '</span>';
      }, 1000);
    }

    function storyTimerF(){
      var storyTimer = setInterval(function(){
        count = 9;
        console.log(count);
        var a = document.querySelector('li.active');
        var n = document.querySelector('li.active + li.story');
        var oj = document.querySelector('ul.bulletin--onward');
        // console.log(n);
        if(n === null) {
          console.log('stopped');
          ClearAllIntervals()
          oj.classList.add('active');
          $(button).css("display", "none");
          $(story).css("display", "none");
          c.classList.add('end');
        }
          a.classList.remove('active');
          n.classList.add('active');
      }, 8000);
    }

    $(document).ready(function(){
      $(button).click(function(){
        $(this).addClass('active');
        $(story[0]).addClass('active');
        $(counter).addClass('active');
        secondsTimerF();
        storyTimerF();
        $(clicker).click(function(){
          console.log('clicker')
          var oj = document.querySelector('ul.bulletin--onward');
          var a = document.querySelector('li.active');
          var n = document.querySelector('li.active + li.story');
          if(n === null){
            oj.classList.add('active');
            $(button).css("display", "none");
            $(story).css("display", "none");
            c.classList.add('end');
            console.log(c);
          }
          a.classList.remove('active');
          n.classList.add('active');
          ClearAllIntervals()
          count = 8;
          counterSpan[0].innerHTML = count;
          secondsTimerF();
          storyTimerF();
        });
      })
      $(cEnd).click(function(){
        $(story[0]).addClass('active');
        $(counter).addClass('active');
        secondsTimerF();
        storyTimerF();
        $(clicker).click(function(){
          console.log('clicker')
          var oj = document.querySelector('ul.bulletin--onward');
          var a = document.querySelector('li.active');
          var n = document.querySelector('li.active + li.story');
          if(n === null){
            oj.classList.add('active');
            $(button).css("display", "none");
            $(story).css("display", "none");
            c.classList.add('end');
          }
          a.classList.remove('active');
          n.classList.add('active');
          ClearAllIntervals()
          count = 8;
          counterSpan[0].innerHTML = count;
          secondsTimerF();
          storyTimerF();
        });
      });
    });
});
