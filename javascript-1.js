<script type="text/javascript">
$('document').ready(function(){
	dynamic_masthead();
	in_the_news_slider();
	companies_slider();});
function dynamic_masthead(){
	$theme = getQueryVariable("blm");
	if($theme){
		$('#feature-background').css('background-image', 'url("https://blooom-static.s3.amazonaws.com/lp/images/new-years-masthead-4.jpg")');
		$('.sub-headline').css('display', 'block');
		switch($theme){
			case "magazine":
				$('#main-headline').html('read more trashy magazines*');
				break
			case "tv":
				$('#main-headline').html('watch more<br/>reality tv*');
				break
			case "snooze":
				$('#main-headline').html('hit snooze bar*');
				break
			case "worry":
				$('#main-headline').html('worry less*');
				break
			default:
				$('#main-headline').html('worry less*');
		}
	}else{
	}
}
function getQueryVariable(variable){
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}
function in_the_news_slider(){
	$('#in-the-news .content-wrapper .image-container').animate({
		left: "-140px"
	},500,"swing",function(){
		// move the image that just moved off screen back to the end of the loop
		$('#in-the-news .content-wrapper .image-container').append($('#in-the-news .content-wrapper img:first-child'));
		$('#in-the-news .image-container').css('left','30px');
		// repeat
		$next_slide = setTimeout("in_the_news_slider()",2500);
	});
}
function companies_slider(){
	$('#companies .content-wrapper .image-container').animate({
		left: "-140px"
	},500,"swing",function(){
		// move the image that just moved off screen back to the end of the loop
		$('#companies .content-wrapper .image-container').append($('#companies .content-wrapper img:first-child'));
		$('#companies .image-container').css('left','30px');
		// repeat
		$next_slide = setTimeout("companies_slider()",2500);
	});
}
</script>