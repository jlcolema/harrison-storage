if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/floatdialog.js')
$.include('js/coin-slider.js')
$.include('js/FF-cash.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.cycle.all.min.js')
$.include('js/jquery.color.js')
$.include('js/jquery.backgroundPosition.js')
$(function(){
	if($('.fixedtip').length||$('.clicktip').length||$('.normaltip').length)$.include('js/jquery.atooltip.pack.js')
	if($('#contact-form').length)$.include('js/forms.js')
	if($('.top1').length||$('.layouts-nav li a').length)$.include('js/scrollTop.js')
	if($('.kwicks').length)$.include('js/kwicks-1.5.1.pack.js')
	if($("#thumbs").length){
		$.include('js/jquery.galleriffic.js')
	}
	if($(".lightbox-image").length || $(".lightbox-video").length)$.include('js/jquery.prettyPhoto.js')
	if($("#transl-form").length)$.include('js/jquery.jqtransform.js')
	if($("#transl-form").length)$.include('js/jquery.filestyle.js')
	if($("#twitter").length)$.include('js/jquery.twitter.js')
	if($('#countdown_dashboard').length)$.include('js/jquery.lwtCountdown-1.0.js')
	if($('.tabs').length)$.include('js/tabs.js')
		$("body").append('<div id="advanced"><span class="trigger"></span><ul><li class="trigger_adv"><span>Pages</span><ul><li><a href="under_construction.html">Under construction</a></li><li><a href="intro.html">intro page</a></li><li><a href="404.html">404 page</a></li></ul></li><li><a href="layouts.html">Layouts</a><li><a href="typography.html">Typography</a></li><li class="trigger_adv"><span>Interactive</span><ul><li><a href="coin-slider.html">slider</a><ul><li><a href="coin-slider.html">coin slider</a></li><li><a href="kwicks.html">kwicks slider</a></li></ul></li><li><a href="functional-slider.html">functional slider</a></li><li><a href="gallery-page1.html">simple gallery</a></li><li><a href="gallery-page2.html">advanced gallery</a></li><li><a href="misc.html" class="current">misc</a></li></ul></li></ul></div>')
		$("#advanced .trigger").toggle(function(){$(this).parent().animate({right:0},"medium")},function(){$(this).parent().animate({right:-172},"medium")})
	$('.top1').click(function(e){$('html,body').animate({scrollTop:'0px'},800);return false})
	$('.layouts-nav li a').click(function(){var offset=$($(this).attr('href')).offset();$('html,body').animate({scrollTop:offset.top},800);return false})
	$("#accordion dt a").append('<span></span>');
	$("#accordion dt.active").next("#accordion dd").css({display:'block'});
	$("#accordion dt").click(function(){$(this).next("#accordion dd").slideToggle("slow").siblings("#accordion dd:visible").slideUp("slow");$(this).toggleClass("active");$(this).siblings("#accordion dt").removeClass("active");return false})
	$("#hr_accordion dt.active").next("#hr_accordion dd").css({display:'block'});
	$("#hr_accordion dt").click(function(){$(this).next("#hr_accordion dd").animate({width:'toggle'}).siblings("#hr_accordion dd:visible").animate({width:'hide'});$(this).toggleClass("active");$(this).siblings("#hr_accordion dt").removeClass("active");return false})
	$(".slideDown dt").click(function(){$(this).toggleClass("active").parent(".slideDown").find("dd").slideToggle()})
	$(".code a.code-icon").toggle(function(){$(this).find("i").text("-");$(this).next("div.grabber").slideDown()},function(){$(this).find("i").text("+");$(this).next("div.grabber").slideUp()})
	$('table').find('tr').find('td:last').addClass('last');
	$('table').find('tr').find('th:last').addClass('last');
	$('table').find('tr:last').addClass('last');
	$('table').find('tr').find('td:first').addClass('first');
	$('table').find('tr').find('th:first').addClass('first')
	$('.list-1 li').append('<span></span>');
	if ($.browser.msie && $.browser.version < 9) {
	$('.list-1 li a').hover(
		function(){$(this).parent().find('span').addClass('lhover')},
		function(){$(this).parent().find('span').removeClass('lhover')}
	) }
	else {
		$('.list-1 li a').hover(
			function(){$(this).parent().find('span').stop().animate({width:'19px', height:'19px', top:7,left:0}, 200)},
			function(){$(this).parent().find('span').stop().animate({width:'0', height:'0', top:16,left:9}, 200)}
		)
	}
	$('.list-3 li').append('<span></span>');
	if ($.browser.msie && $.browser.version < 9) {
	$('.list-3 li a').hover(
		function(){$(this).parent().find('span').addClass('lhover')},
		function(){$(this).parent().find('span').removeClass('lhover')}
	) }
	else {
		$('.list-3 li a').hover(
			function(){$(this).parent().find('span').stop().animate({width:'19px', height:'19px', top:2,left:0}, 200)},
			function(){$(this).parent().find('span').stop().animate({width:'0', height:'0', top:11,left:9}, 200)}
		)
	}
	$('.kwicks.horizontal li .kwicks-title').click(function(){return false});
	$('.footer-list li a').wrapInner('<span/>').append('<em></em>').append('<i></i>').find('i').fadeOut(0)
	$('.footer-list li a').hover(
		function(){
			$(this).find('em').stop().animate({right:0}, 300, 'easeOutBack')
			$(this).find('i').stop().fadeTo(300,1)
			$(this).find('span').stop().animate({color:'#fff'},300)
		},
		function(){
			$(this).find('em').stop().animate({right:'100%'}, 300)
			$(this).find('i').stop().fadeTo(300,0)
			$(this).find('span').stop().animate({color:'#c2c2c1'},300)
		}
	)
	$('.alt-social-links li a').hover(
		function(){$(this).stop().animate({backgroundPosition:'0 5px'},200)},
		function(){$(this).stop().animate({backgroundPosition:'0 0'},200)}
	)
	$('.social-links li a').hover(
		function(){$(this).stop().animate({backgroundPosition:'0 4px'},200)},
		function(){$(this).stop().animate({backgroundPosition:'0 0'},200)}
	)
	$('.languages li a').hover(
		function(){$(this).stop().animate({backgroundPosition:'0 3px'},100)},
		function(){$(this).stop().animate({backgroundPosition:'0 0'},100)}
	)
})

function onAfter(curr, next, opts, fwd){var $ht=$(this).height();$(this).parent().animate({height:$ht})}