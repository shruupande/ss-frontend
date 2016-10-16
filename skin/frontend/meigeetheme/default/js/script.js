jQuery.noConflict();    
jQuery(window).load(function() {

	/* Fix for IE */
    	if (jQuery.browser.msie && jQuery.browser.version >= 9) {
		 jQuery.support.noCloneEvent = true;
		}
	/* End fix for IE */

	/* Top Cart */
	jQuery('.top-cart').click(function(){
		jQuery(this).toggleClass('active');
		jQuery('#topCartContent').slideToggle(500).toggleClass('active')
	})
	/* Top Cart */
	
	/* More Views Slider */
	if(jQuery('#more-views-slider').length) {
		jQuery('#more-views-slider').iosSlider({
	      responsiveSlideWidth: true,
	      snapToChildren: true,
	      desktopClickDrag: true,
	      infiniteSlider: true,
	      navSlideSelector: '.sliderNavi .naviItem',
	      navNextSelector: '.more-views .next',
	      navPrevSelector: '.more-views .prev'
	    });
	}
	
	/* More Views Slider */

	
	/* More Views */
	left_title_indent = jQuery('.more-views-title h2').outerWidth()/2;
	holder_height =  jQuery('.more-views').height();
	jQuery('.more-views-title h2').css('margin-left', '-'+left_title_indent+'px');
	jQuery('.more-views').css({'height': '60px'});
	jQuery('.more-views-holder').css('left', '-100000px');
	jQuery('.more-views-title h2').on('click', function(){
		if(!jQuery(this).parent().hasClass('active')){
			jQuery(this).parent().addClass('active');
			jQuery(this).animate({
				marginLeft: 0,
				left: 0
			}, 500, 'easeInQuart');
			jQuery('.more-views-holder').fadeOut(1);
			setTimeout(function(){
				jQuery('.more-views').animate({
					height: holder_height
				}, 200, 'linear', function(){
					jQuery('.more-views').addClass('visible');
				});
				jQuery('.more-views-holder').css({'left': '0'}).fadeIn(200);
			}, 500);
		}else if(jQuery(this).parent().hasClass('active')){
			jQuery(this).animate({
				marginLeft: '-'+left_title_indent+'px',
				left: '50%'
			}, 500, 'easeInQuart');
			jQuery('.more-views-holder').fadeOut(200, function(){
				jQuery(this).css({'left': '-100000px'});
			});
			jQuery('.more-views').removeClass('visible').animate({
				height: '60px'
			}, 200, 'linear');
			jQuery(this).parent().removeClass('active');
		}
	});
	
	/* Related Block Slider */
	 if(jQuery('#block-related-slider').length) {
		jQuery('#block-related-slider').iosSlider({
	      responsiveSlideWidth: true,
	      snapToChildren: true,
	      desktopClickDrag: true,
	      infiniteSlider: true,
	      navSlideSelector: '.sliderNavi .naviItem',                
	      navNextSelector: '.block-related .next',
	      navPrevSelector: '.block-related .prev'
	    });
	} 
	/* Related Block Slider */
	
	/* Wishlist Block Slider */
	if(jQuery('#wishlist-slider').length) {
		jQuery('#wishlist-slider').elastislide({
			imageW 		: 217,
			margin		: 0,
			current     : 0,
			border		: 0,
			minItems    : 1,
			easing		: 'easeInBack'
		});
	}
	/* Wishlist Block Slider */
	
	/* Categories Accorion */
	if (jQuery('#categories-accordion').length) {
		jQuery('#categories-accordion li.level-top.parent ul.level0').before('<div class="btn-cat"></div>')
		jQuery('#categories-accordion li.level-top.parent .btn-cat').each(function(){
		    jQuery(this).toggle(function(){
		        jQuery(this).addClass('closed').next().slideToggle(200);
		    },function(){
		        jQuery(this).removeClass('closed').next().slideToggle(200);
		    })
		});
	}
	/* Categories Accorion */

  /* Layered Navigation Accorion */
  if (jQuery('#layered_navigation_accordion').length) {
    jQuery('.filter-label').each(function(){
        jQuery(this).toggle(function(){
            jQuery(this).addClass('closed').next().slideToggle(200);
        },function(){
            jQuery(this).removeClass('closed').next().slideToggle(200);
        })
    });
  }
  /* Layered Navigation Accorion */


  /* Product Collateral Accordion */
  if (jQuery('#collateral-accordion').length) {
	  jQuery('#collateral-accordion > div.box-collateral').hide();  
	  jQuery('#collateral-accordion > h2').click(function() {
	    var nextDiv = jQuery(this).next();
	    var visibleSiblings = nextDiv.siblings('div:visible');
	 
	    if (visibleSiblings.length ) {
	      visibleSiblings.slideUp(300, function() {
	        nextDiv.slideToggle(500);
	      });
	    } else {
	       nextDiv.slideToggle(300);
	    }
	  });
  }
  /* Product Collateral Accordion */

  /* My Cart Accordion */
  if (jQuery('#cart-accordion').length) {
	  jQuery('#cart-accordion > div.accordion-content').hide();	  
	  
	  jQuery('#cart-accordion > h3.accordion-title').wrapInner('<span/>').click(function(){
	  
		var accordion_title_check_flag = false;
		if(jQuery(this).hasClass('active')){accordion_title_check_flag = true;}
		jQuery('#cart-accordion > h3.accordion-title').removeClass('active');
		if(accordion_title_check_flag == false){
			jQuery(this).toggleClass('active');
	    }
		
		var nextDiv = jQuery(this).next();
	    var visibleSiblings = nextDiv.siblings('div:visible');
	 
	    if (visibleSiblings.length ) {
	      visibleSiblings.slideUp(300, function() {
	        nextDiv.slideToggle(500);
	      });
	    } else {
	       nextDiv.slideToggle(300);
	    }
		
	  });
	  
	  
  }
  /* My Cart Accordion */
  
  /* Coin Slider */

	/* Fancybox */
	if (jQuery.fn.fancybox) {
		jQuery('.fancybox').fancybox();
	}
	/* Fancybox */

	/* Zoom */
	if (jQuery('#zoom').length) {
		jQuery('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
  	}
	/* Zoom */
		
	/* Wishlink Top Link */
    function wishlist_mob(){
    	if (jQuery('#header .links li a.top-link-wishlist').length) {
    		wishlist_link = jQuery('#header .links li a.top-link-wishlist');
			wishlist_start_index = wishlist_link.html().indexOf('(');
			if(wishlist_start_index != -1){
				wishlist_link.html(wishlist_link.html().slice(0, wishlist_start_index));
			}

    	}
    }
	
	
	/* Responsive */
	var responsiveflag = false;
	var topSelectFlag = false;
	var menu_type = jQuery('#nav').attr('class');
	
	function mobile_menu(mode){
		switch(mode)
		 {
		 case 'animate':
		   if(jQuery('.nav-container .menu-item-button').length==0){
				jQuery('.nav-container > ul').slideUp('fast');
				jQuery('.menu-button').on('click', function(){
					jQuery(this).toggleClass('active');
					jQuery('.nav-container > ul').slideToggle('medium');
				});
			   jQuery('.nav-container > ul a').each(function(){
					if(jQuery(this).next('ul').length){
						jQuery(this).before('<span class="menu-item-button" />')
						jQuery(this).next('ul').slideUp('fast');
						jQuery(this).prev('.menu-item-button').on('click', function(){
							jQuery(this).toggleClass('active');
							jQuery(this).nextAll('ul').slideToggle('medium');
						});
					}
			   });
		   }
		   break;
		 default:
		   if(jQuery('.nav-container .menu-item-button').length!=0){
				jQuery('.menu-button').off();
				jQuery('.nav-container > ul').slideDown('fast');
				jQuery('.nav-container .menu-item-button').each(function(){
					jQuery(this).nextAll('ul').slideDown('fast');
					jQuery(this).remove();
				});
		    }
		 }
	}
	
	
	function accordion (status){
		if(status == 'enable'){
			jQuery('.footer-columns-wrapper h3, aside.sidebar header').on('click', function(){
				jQuery(this).toggleClass("active").parent().find(".custom-footer-content, .block-content").slideToggle('medium');
			})
			jQuery('.footer-columns-wrapper, aside.sidebar').addClass('accordion').find(".custom-footer-content, .block-content").slideUp('fast');
		}else{
			jQuery('.footer-columns-wrapper h3, aside.sidebar header').removeClass("active").off().parent().find(".custom-footer-content, .block-content").slideDown('fast');
			jQuery('.footer-columns-wrapper, aside.sidebar').removeClass('accordion');
		}
	}
	function toDo(){
		if (jQuery(document.body).width() < 767 && responsiveflag == false){
		    accordion('enable');
			
			/* Top Menu Select */
			if(topSelectFlag == false){
				jQuery(".nav-container").addClass('mobile');
				topSelectFlag = true;
			}
			
			/* //Top Menu Select */
			responsiveflag = true;
		}
		else if (jQuery(document.body).width() > 767){
			accordion('disable');
			jQuery(".nav-container").removeClass('mobile');
			responsiveflag = false;
		}
	}
	function replacingClass () {

	   if (jQuery(document.body).width() < 480) { //Mobile
	   
		jQuery('.products-grid:not(".carousel-ul, #upsell-product-table, .widget-grid") > li').removeClass('alpha omega clear-2')
	    jQuery('.products-grid#upsell-product-table > li, .widget-grid > li').removeClass('omega clear-2')
		jQuery('.products-grid:not(".carousel-ul") > li:odd').addClass('omega')
		jQuery('.products-grid:not(".carousel-ul") > li:even').addClass('alpha clear-2')
		
		jQuery('.block-related .block-content > div:not(#block-related-slider) li.item').removeClass('clear-2');
		jQuery('.block-related .block-content > div:not(#block-related-slider) li.item:nth-child(2n+2)').next().addClass('clear-2');
		jQuery('.more-views > ul > li').removeClass('clear-2');
		jQuery('.more-views > ul > li:nth-child(2n+2)').next().addClass('clear-2');
		
		wishlist_mob();
		mobile_menu('animate');
	   }

	   if (jQuery(document.body).width() > 479 && jQuery(document.body).width() < 768) { //iPhone
	   
		jQuery('.products-grid:not(".carousel-ul, #upsell-product-table") > li').removeClass('alpha omega clear-2')
	    jQuery('.products-grid#upsell-product-table > li, .widget-grid > li').removeClass('omega clear-2')
		jQuery('.products-grid:not(".carousel-ul") > li:odd').addClass('omega')
		jQuery('.products-grid:not(".carousel-ul") > li:even').addClass('alpha clear-2')
		
		jQuery('.block-related .block-content > div:not(#block-related-slider) li.item').removeClass('clear-2');
		jQuery('.block-related .block-content > div:not(#block-related-slider) li.item:nth-child(3n+3)').next().addClass('clear-2');
		jQuery('.more-views > ul > li').removeClass('clear-2');
		jQuery('.more-views > ul > li:nth-child(4n+4)').next().addClass('clear-2');
		
		jQuery('.col2-layout .col-main').removeClass('grid_9')
		jQuery('.sidebar').removeClass('grid_3')
		jQuery('.col2-layout .col-main, .sidebar').addClass('grid_12')
		
		wishlist_mob();
		mobile_menu('animate');
	   }	   
	   else if (jQuery(document.body).width() > 767) { //Desktop
		jQuery('.products-grid:not(".carousel-ul, #upsell-product-table") > li').removeClass('alpha omega clear-2')
	    jQuery('.products-grid#upsell-product-table > li').removeClass('omega clear-2')
		jQuery('.products-grid#upsell-product-table > li:nth-child(5n+5)').addClass('omega').next().addClass('clear-2');
		
		
		jQuery('.products-grid:not(".carousel-ul") > li').first().addClass('alpha')
		jQuery('.products-grid:not(".carousel-ul, .widget-grid, .small-grid, .large-grid, #upsell-product-table") > li:nth-child(3n+3)').addClass('omega').next().addClass('alpha clear-2')
		
		jQuery('.products-grid.widget-grid').each(function(){
			jQuery(this).find('li').first().addClass('alpha');
		});
		jQuery('.products-grid.widget-grid > li:nth-child(4n+4)').addClass('omega').next().addClass('alpha clear-2')
		
		jQuery('.products-grid.large-grid > li:odd').addClass('omega')
		jQuery('.products-grid.large-grid > li:even').addClass('alpha clear-2')
		jQuery('.products-grid.small-grid > li:nth-child(4n+4)').addClass('omega').next().addClass('alpha clear-2')
		
		jQuery('.block-related .block-content > div:not(#block-related-slider) li.item').removeClass('clear-2');
		jQuery('.block-related .block-content > div:not(#block-related-slider) li.item:nth-child(5n+5)').next().addClass('clear-2');
		jQuery('.more-views > ul > li').removeClass('clear-2');
		jQuery('.more-views > ul > li:nth-child(3n+3)').next().addClass('clear-2');
		
		jQuery('.col2-layout .col-main, .sidebar').removeClass('grid_12')
		jQuery('.sidebar').addClass('grid_3')
		jQuery('.col2-layout .col-main').addClass('grid_9')
		
		mobile_menu('reset');
	   }
		if (jQuery(document.body).width() > 767 && jQuery(document.body).width() < 977){ //Tablet
			jQuery('.products-grid#upsell-product-table > li').removeClass('omega clear-2');
			jQuery('.products-grid#upsell-product-table:not(".carousel-ul") > li:nth-child(3n+3)').addClass('omega').next().addClass('clear-2');
			jQuery('.block-related .block-content > div:not(#block-related-slider) li.item').removeClass('clear-2');
			jQuery('.block-related .block-content > div:not(#block-related-slider) li.item:nth-child(4n+4)').next().addClass('clear-2');
			jQuery('.more-views > ul > li').removeClass('clear-2');
			jQuery('.more-views > ul > li:nth-child(2n+2)').next().addClass('clear-2');
			
			mobile_menu('reset');
	    }  
		if (jQuery(document.body).width() > 1279){ //Extra Large
			jQuery('.block-related .block-content > div:not(#block-related-slider) li.item').removeClass('clear-2');
			jQuery('.block-related .block-content > div:not(#block-related-slider) li.item:nth-child(4n+4)').next().addClass('clear-2');
			jQuery('.more-views > ul > li').removeClass('clear-2');
			jQuery('.more-views > ul > li:nth-child(4n+4)').next().addClass('clear-2');
			
			mobile_menu('reset');
		}
	   
	}
	replacingClass();
	toDo();	
	//menuHeight2();
	jQuery(window).resize(function(){toDo(); replacingClass();});
	/* Responsive */
	
	/* Top Menu */
	function menuHeight2 () {
		var menu_min_height = 0;
		jQuery('#nav li.tech').css('height', 'auto');
		jQuery('#nav li.tech').each(function(){
			if(jQuery(this).height() > menu_min_height){
				menu_min_height = jQuery(this).height();
			}
		});		
		jQuery('#nav li.tech').each(function(){
			jQuery(this).css('height', menu_min_height + 'px');
		});
	}
	
	/* Top Selects */
	function option_class_add(items, is_selector){
		jQuery(items).each(function(){
			if(is_selector){
				jQuery(this).removeAttr('class'); 
				jQuery(this).addClass('sbSelector');
			}
			stripped_string = jQuery(this).html().replace(/(<([^>]+)>)/ig,"");
			RegEx=/\s/g;
			stripped_string=stripped_string.replace(RegEx,"");
			jQuery(this).addClass(stripped_string.toLowerCase());
			if(is_selector){
				tags_add();
			}
		});
	}
	option_class_add('.form-language .sbOptions li a, .form-language .sbSelector, .form-currency .sbOptions li a, .form-currency .sbSelector', false);
	jQuery('.form-language .sbOptions li a, .form-currency .sbOptions li a').on('click', function(){
		option_class_add('.form-language .sbSelector, .form-currency .sbSelector', true);
	});	
	function tags_add(){
		jQuery('.form-language .sbSelector, .form-currency .sbSelector').each(function(){
			if(!jQuery(this).find('span.text').length){
				jQuery(this).wrapInner('<span class="text" />').append('<span />').find('span:last').wrapInner('<span />');
			}
		});
	}
	tags_add();
	/* //Top Selects */
	
	/* Cart Accordion Title Divider */
	jQuery("#cart-accordion .accordion-title").append('<div class="title-divider"><span>&nbsp;</span></div>');
	
});
jQuery(document).ready(function(){

	/* Title divider */
	jQuery(".page-title, aside.sidebar section header, .products-grid .product-name, .products-list .product-name, .block-related .product-name").append('<div class="title-divider"><span>&nbsp;</span></div>');
	jQuery(".catalog-product-view .box-reviews h2, .crosssell .product-name, .cart .crosssell h2, .my-wishlist .data-table .product-name").after('<div class="title-divider"><span>&nbsp;</span></div>');
	
    /* Cart Increase/Decrease Buttons */
	jQuery('.cart .qty, .my-wishlist .qty').each(function(){
		var thisQty = jQuery(this);
		
		var decreaseButton = thisQty.prev();
		decreaseButton.on('click', function(){
			if( !isNaN( thisQty.attr("value") ) && thisQty.attr("value") > 0 ){
			   var el_val = parseFloat(thisQty.attr("value"))-1;
			   thisQty.attr('value', el_val);
		    }
		});
		
		var increaseButton = jQuery(this).next();
		increaseButton.on('click', function(){
			if( !isNaN(thisQty.attr("value"))){
			   var el_val = parseFloat(thisQty.attr("value"))+1;
			   thisQty.attr('value', el_val);
		    }
		});
	});
	
	
	/* Top Menu */
	jQuery('#nav.nav-wide > li.parent').on('mouseenter mouseleave', function(){
		jQuery('.header-wrapper').toggleClass('menu-over');
	});
	
	
	/* OPC Progress Title Block */
	function sidebar_titles(){
		jQuery("section.block-progress header h2").after('<div class="title-divider"><span>&nbsp;</span></div>');
	}
	function title_check(){
		setTimeout(function(){
			if(!jQuery('.opc-block-progress header div').length){
				sidebar_titles();
			}
			title_check();
		}, 100);
	}
	if(jQuery('.opc-block-progress').length){
		title_check();
	}
	
   /* Home Tabs */
   jQuery('.home-tabs ul.tabs').delegate('li:not(.current)', 'click', function() {
	 jQuery(this).addClass('current').siblings().removeClass('current')
	   .parents('div.home-tabs').find('div.tabs-box').eq(jQuery(this).index()).fadeIn(150).siblings('div.tabs-box').hide();
   })
   
});