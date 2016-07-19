$.getJSON("https://interactive.guim.co.uk/docsdata-test/11aao6b2cD9twEd4FSRPncmPDgwnqASkHfqR_0h2ro4k.json", function(json) {
	console.log(json.sheets);
	var timelineDate = json.sheets;
	var source   = $("#data__template").html();
	var template = Handlebars.compile(source);
	var data = timelineDate;
	$(".story-timeline").append(template(data));
  var clickCount = 1;
  var canClickDown = true;
  var canClickUp = false;
  var leftButton = $('.left-button')[0];
  var downButton = $('.right-button')[0]
	var listItem = $('.story-timeline--item');
	var list = $('.story-timeline--list');
	var itemHeights = [];
	var itemHeightsBack = [];
	var moveAmount = 0;
	var moveAmountUp = 0;
	var totalHeight = 0;
	console.log('up', canClickUp);

	//get the height of each of the items in the list
	$(document).ready(function(){
		for(i=0; i<json.sheets.Sheet1.length; i++){
				//height of the item
				var itemHeight = listItem[i].scrollHeight;
				//the amount which the timeline should move each time when the button is clicked
				moveAmount = listItem[0].scrollHeight + 16;
				//array of heights of each of the items used to calculate the amount which needs to be moved
				itemHeights.push(itemHeight);
		}
	});

  $(downButton).click(function(){
    if(canClickDown != false){
      // $(list).not('.last').css('transform', 'translateY('+'-'+ moveAmount + 'px' +')');
			$('.story-timeline--container').animate({scrollTop:moveAmount});
			$(list).not('.last').scrollTop()
      clickCount++;
			moveAmount = moveAmount + itemHeights[clickCount-1] + 16;
      canClickUp = true;
			$('.story-timeline--title.first').css('display', 'block').delay(100).animate({opacity:'1'});/*.css('height', '25px').css('opacity', '1')/*.css('padding-top', '6px').css('padding-bottom', '12px')*/;
			console.log('down', canClickDown);
			console.log('up', canClickUp);
    }
  });
  $(leftButton).click(function(){
    if(canClickUp != false){
			itemHeightsBack = itemHeights.reverse();
			moveAmount = listItem[0].scrollHeight + 16;
			$('.story-timeline--container').animate({scrollTop:-moveAmountUp});
      clickCount--;
      canClickDown = true;
			moveAmountUp = moveAmountUp + itemHeights[clickCount-1] + 16;
			console.log('moveup', moveAmountUp);
			console.log(clickCount);
    }
  });
});

Handlebars.registerHelper("inc", function(value, options){
  return parseInt(value) + 1;
});
