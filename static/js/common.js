if(typeof(Worker) == "undefined"){
$("body").addClass("ieBody");
}else{
animateImg();
if($(window).width() < 992){
	//$("video:not('#mPPmv')").attr("src","");
	$(".hmc2bg video").attr("src","");
	$(".hmc2bg video").remove();
	$("body").wrapInner("<div class='wrapper'></div>");
}
function animateImg(){
   var wow = new WOW({
		mobile: false,
		live: true
  });
  wow.init();
  AOS.init({
	disable: 'mobile',
	easing: 'ease-out-back',
	duration: 1000
  });
}	
}


if(!!window.ActiveXObject || "ActiveXObject" in window){
  $("body").addClass("ieBody");
}

if($(".indexBody").length){
	$(".header").addClass("headerTransparent");
	}
/*$(window).resize(function(){
	window.location.href=window.location.href
	});*/


//导航
function webHeader(){
	if($(window).width() <= 993){
        $(".mMmenuLay dl").each(function(i) {
			var _this = $(this);
            if(_this.find("dd").size()>0){
				_this.find(".mToggle").show();
				}
        });
		$(".mToggle").click(function(e){
		if($(this).parents("dl").hasClass("on")){
			$(this).parents("dl").removeClass("on");
			$(this).removeClass("mToggle2");
			}else{
				$(".mMmenuLay dl").removeClass("on");
				$(".mToggle").removeClass("mToggle2");
				$(this).addClass("mToggle2");
				$(this).parents("dl").addClass("on");
				}
		});
		$(".mOpenBtn").click(function(e){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").addClass("on");
			$("body").css("overflow","hidden");
			});
		$(".mCloseBtn,.mMenuLayBg").click(function(){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").removeClass("on");
			$("body").css("overflow","inherit");
			});
	}
}
webHeader();
$(window).scroll(function(){
	if($(document).scrollTop()>10){
		$(".backTop").addClass("on");
		}else{
			$(".backTop").removeClass("on");
			}
	});
//$(window).resize(function(){webHeader();});


jQuery(document).ready(function($) {
	
setTimeout(function(){$("body").addClass("bodyIn")},100);


$(".hmc3changBtn a").click(function(){
	$(this).addClass("on").siblings("a").removeClass("on");
	$(".hmc3Ltop,.hmc3Imgs img").removeClass("on");
	$(".hmc3Ltop").eq($(".hmc3changBtn a").index(this)).addClass("on");
	$(".hmc3Imgs img").eq($(".hmc3changBtn a").index(this)).addClass("on");
	});
	
	
if($(".hmc4Swiper").length){
    $('.hmc4Swiper').slick({
        autoplay: true, 
        arrows: false,
        dots:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });
}

if($(".m2usYrs").length){
    $('.m2usYrs').slick({
        autoplay: true, 
        arrows: false,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.m2usBswiper',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
    });
	$('.m2usBswiper').slick({
        autoplay: true, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        asNavFor: '.m2usYrs',
        fade: true,
		responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
            }
          }
        ]
    });
	
    $('.m2usBswiper').on('afterChange',function(slick,currentSlide){
		$(".m2usYrs").removeClass("active");
        setTimeout(function(){$(".m2usYrs").addClass("active");},10);
    })
	
}

if($(".m3pro3swiper").length){
    $('.m3pro3swiper').slick({
        autoplay: true, 
        arrows: false,
        dots:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });
    $('.m3pro3swiper').init(function(slick){
		$('.m3pro3_sani').removeClass("on");
        $('.m3pro3_sani').eq($('.m3pro3swiper').slick('slickCurrentSlide')).addClass('on');
    })
    $('.m3pro3swiper').on('afterChange',function(slick,currentSlide){
		$('.m3pro3_sani').removeClass("on");
        $('.m3pro3_sani').eq($('.m3pro3swiper').slick('slickCurrentSlide')).addClass('on');
    })
    $('.m3pro3_sani').click(function(){
        $('.m3pro3swiper').slick('slickGoTo',$('.m3pro3_sani').index(this));
		$('.m3pro3_sani').removeClass("on");
        $(this).addClass("on");
    });
}

if($(".m3p4swiper").length){
    $('.m3p4swiper').slick({
        autoplay: true, 
        arrows: false,
        dots:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
		  {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
}

if($(".m2proTswiper").length){
    $('.m2proTswiper').slick({
        autoplay: true, 
        arrows: false,
        dots:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });
}


//if($(".m2proBomBox").size()){autoH(".m2proBomBox");}
if($(".m2xy_c2a p").size()){autoH(".m2xy_c2a p");}




$('input, textarea').placeholder();


//img as background
if($(".bgImg").size()>0){
$(".bgImg").each(function(i){$(".bgImg").eq(i).css("background-image","url("+$(this).find("img").attr("src")+")")});
}


$(".backTop").click(function(){$("body,html").animate({"scrollTop":0},500);});
$(window).scroll(function(){
	if($(document).scrollTop()>10){
		$(".backWpr").addClass("on");
		}else{
			$(".backWpr").removeClass("on");
			}
	});

//搜素
$(".topSerBtn").click(function(){
	$(".serBg,.serLayer").fadeIn(500);
	$(".serClose").removeClass("on");
	});
$(".serClose").click(function(){
	$(".serBg,.serLayer").fadeOut(500);
	$(".serClose").addClass("on");
	});
	

//分页样式
/*$(".page li:first a").text("<").css("font-size","18px");
$(".page li:last a").text(">").css("font-size","18px");*/

});


//百度分享
if($(".bdsharebuttonbox").size()){
window._bd_share_config = { "common": { "bdSign": "off", "bdSize": "24" }, "share": { "bdCustomStyle": "/css/style.css" } }
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
}


function picTxtHeight() {
$(".picTxtBox").each(function(i){if($(this).find(".txtBox").height()>$(this).find(".picBox").height()){$(this).height($(this).find(".txtBox").height());}else{$(this).height($(this).find(".picBox").height());}$(this).find(".picBox-wp,.txtBox-wp").css("min-height",$(this).height())})}
if($(document).width()>993){
	picTxtHeight(); setTimeout(function(){picTxtHeight();},300);
}
$(window).resize(function(){
	if($(document).width()>993){
		picTxtHeight();
	}
})

function autoH(className){
	var maxH = 0;
	$(className).each(function() {
    var cutH = $(this).innerHeight();
	if(cutH>maxH){
		maxH = cutH;
		}
    });

    $(className).innerHeight(maxH);
}
function autoW(className){
	var maxW = 0;
	$(className).each(function() {
    var cutW = $(this).innerWidth();
	if(cutW>maxW){
		maxW = cutW;
		}
    });

    $(className).innerWidth(maxW);
}

function addPreZero(num){
	 if(num<10){
	 var t = (num+'').length,
	  s = '';
	 for(var i=0; i<2-t; i++){
	  s += '0';
	 }
	 return s+num;
	 }else{
		 return num;
		 }
}

//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});
