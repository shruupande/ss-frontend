 jQuery(document).ready(function() {
	jQuery('.products-grid li.item .product-image span.image-box, .products-list li.item .product-image span.image-box').css('opacity', '0');
	jQuery('.products-grid li.item .fancybox, .products-list li.item .fancybox').css({'left': '87%', 'opacity': 0});	
	jQuery('.products-grid.small-grid li.item .product-info-box').css({'right': '5px', 'opacity': 0});
		
	var small_grid = false;	
	if(jQuery('.products-grid.small-grid').length){
		small_grid = true;
	}
		
	jQuery('.products-grid li.item, .products-list li.item').hover(
		 function(){		 
			jQuery(this).find('span.image-box').stop(true, true).animate({
				 opacity: 0.8
			 }, 500);		 
			
			if(!small_grid){
				jQuery(this).find('.fancybox').stop(true, true).animate({
					 left: '87%',
					 opacity: 1
				 }, 500);	
			 }else{
				jQuery(this).find('.fancybox').stop(true, true).animate({
					 left: '87%',
					 opacity: 1
				 }, 500);
			 }			 
			jQuery(this).find('.product-info-box').stop(true, true).animate({
				 right: '61px',
				 opacity: 1
			 }, 500);			 
		 },
		 function(){			
			jQuery(this).find('span.image-box').stop(true, true).animate({
				 opacity: 0
			 }, 500);			
			 jQuery(this).find('.fancybox').stop(true, true).animate({
				 left: '87%',
				 opacity: 0
			 }, 500);
			 jQuery(this).find('.product-info-box').stop(true, true).animate({
				 right: '5px',
				 opacity: 0
			 }, 500);
		 }
	);	
	
	if(navigator.userAgent.indexOf('IE 7')!=-1){
		var flex_nav = jQuery('.flexslider .flex-control-nav');
		flex_nav.css('margin-left', '-'+flex_nav.width()/2+'px');
	}
	  
	jQuery('.iosSlider .slider .item a').after('<h4 class="slider-wr">wwwwwww</h4>');
	  
});  