define([], function () {
   return {
       boot: function (el, context, config, mediator) {
           var styles = document.createElement('link');
           styles.setAttribute('rel', 'stylesheet');
           styles.setAttribute('href', 'https://localhost:8000/embeds/membership-timeline/style.css');
           var head = document.getElementsByTagName('head');
           head[0].appendChild(styles);
           console.log('this is working');
       }
   };
});
