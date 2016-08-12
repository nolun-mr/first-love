/* 轮播图  */
$(function(){
	var $bannerMove = $('.banner-move');
	var index = 0;
	var $picCircle = $('.pic-circle');
	show();
	var timer = setInterval(move,2000);
	
	$bannerMove.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(move,2000);
			})
	$picCircle.on('click','li',function(){
		clearInterval(timer);
		index = $(this).index();
		show();
	})
	function move(){
				
				index ++ ;
				show();
			}
			
	function show(){
	        if(index==3){
	            index=0;
	        }else if(index < 0){
	            index = 3;
	        }
	       $bannerMove.children('li').eq(index).animate({opacity:1})
	        .siblings().animate({opacity:0});
	        $picCircle.children('li').eq(index).addClass('active')
			.siblings().removeClass('active');       		
	}
})
/* banner right 轮播图 */
$(function(){
	var $bannerRightMove = $('.banner-right-move');
	var index = 0;
	show();
	var timer = setInterval(move,3000);
	$bannerRightMove.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(move,3000);
			})
	function move(){
			
			index ++ ;
			show();
		}
	function show(){
        if(index==3){
            index=0;
        }else if(index < 0){
            index = 3;
        }
       $bannerRightMove.children('li').eq(index).show()
        .siblings().hide();     		
	}
	//手风琴效果
	var $hand_li = $('.list_show').find('li');
	//console.log($hand_li)
	$hand_li.on('mouseenter',function(){
		 $(this).find('.toplist').css('display','none');
		 $(this).find('dl').css('display','block');
		 $(this).siblings().children('.toplist').css('display','block');
		 $(this).siblings().children().find('dl').css('display','none');
	})
	
/*倒计时*/
	/* var intDiff = 12345;//倒计时总毫秒数量
	 timer(intDiff);*/	
	 
	
	//列表切换
	var $tabArrow = $('.tab-arrow');
	var $change_li = $('.saletabs').find('li') 
//	console.log( $change_li)
	var $salebox  =$('.salebox')
	$change_li.on('mouseenter',function(){
		var index = $(this).index();
		//animate里面如何乘以一个index	
		$tabArrow.animate({left:235*(index-1)});
		console.log()
		//console.log(index);
		$salebox.find('.con-two').eq(index).show().siblings().hide();
		//console.log($salebox.find('.con-two').eq(index).siblings())
		
		
	})
})
/*倒计时*/
window.onload=function(){
	var changetimer = 12345;//倒计时总毫秒数量
	timer(changetimer);
	function timer(changetimer){
		window.setInterval(function(){
		var	hour=0,
			minute=0,
			second=0,
			haomiao=0//时间默认值		
		if(changetimer > 0){
			hour = Math.floor(changetimer / (60 * 60));
			minute = Math.floor(changetimer / 60) - (hour * 60);
			second = (parseFloat(changetimer) - (hour * 60 * 60) - (minute * 60)).toFixed(1);
			//second = ((Math.floor(intDiff) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60)/10).toFixed(1);
		}
		if (minute <= 9) {
			minute = '0' + minute;
		}
		if (second <= 9) {
			second = '0' + second;
		}
		$('.hour_show').html(hour);
		$('.minute_show').html(minute);
		$('.second_show').html(second);
		changetimer-=0.1;
		}, 100);
	}
	
		/*当滚动距离大于500时，出现返回顶部按钮，点击跳到顶部*/
	window.onscroll=function(){
		var oTop = document.getElementById('top');
		var oTopH = document.documentElement.scrollTop||document.body.scrollTop;
		console.log(oTopH)
		if(oTopH > 500){
			oTop.style.display = 'block';
		}else{
			oTop.style.display = 'none';
		}
		oTop.onclick=function(){
			document.documentElement.scrollTop = document.body.scrollTop =0;
		}
	}
}
