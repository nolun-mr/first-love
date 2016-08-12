$(function(){
	$('.banner-list').on('click',function(){
		$('.banner-list').children('dl').css({
			'display':'block'
		})
	})
	$('.banner-list').on('mouseleave',function(){
		$('.banner-list').children('dl').css({
			'display':'none'
		})
	})
	
	//点击小图切换大图
	var $mainLshowsmall = $('.mainL_show_small li img');
	var $mainLshowbig_img = $('.mainL_show_big img');
	$mainLshowsmall.hover(function(){
		//console.log($(this))
		$(this).css({
			'border-color':'#f00'
		})
		var index=$(this).parent().index();
		$mainLshowbig_img.eq(index).show().siblings().hide();
		//console.log($mainLshowbig.parent())
	},function(){
		$(this).css({
			'border-color':'#e4e4e4'
		})	
	})
	
	// 放大镜
	var $mainL_show_big = $('.mainL_show_big');
	var $magnifier = $('.magnifier');
	var $showBig = $('.showBig');
	var $showBigPic = $('.showBig img')
	$mainL_show_big.find("img").hide().eq(0).show();
	$showBigPic.hide();
	$showBigPic.eq(0).show();
	$mainL_show_big.on('mousemove',function(evt){
		$magnifier.show();
		$showBig.show();
		var nLeft = $mainL_show_big.offset().left;
		//console.log(nLeft)
		var nTop = $mainL_show_big.offset().top;
		var nx = evt.clientX-nLeft+$(window).scrollLeft()-85;
		var ny= evt.clientY-nTop+$(window).scrollTop()-85;
		//console.log(nx)
		  if(nx>$mainL_show_big.width()-$magnifier.width()){
			   nx=$mainL_show_big.width()-$magnifier.width();
			 }
		   if(ny>$mainL_show_big.height()-$magnifier.height()){
			   ny=$mainL_show_big.height()-$magnifier.height();
			   }
		   if(nx<0){
			   nx=0;
			   }
		   if(ny<0){
			   ny=0;
			   }
		 	
		    $magnifier.css({left:nx,top:ny});
		   	$showBigPic.css({left:nx*-2,top:ny*-2});
	}).on('mouseleave',function(){
		$magnifier.hide();
		$showBig.hide();
	})
	
	//商品详情页数量的增加与减少
	var $boxBuy = $('.mainR_boxbuy');
	var  $input = $boxBuy.children().find("input");
	var num = $input.val();
	var $reduce = $input.prev();
	console.log($reduce)
	var $add = $input.next();
	$reduce.on('click',function(){
		num--;
		if(num==0){num=1}
		$(this).next().val(num);
	})
	$add.on('click',function(){
		num++;
		$(this).prev().val(num);
	});
})
