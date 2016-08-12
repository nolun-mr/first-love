//nav 显示二级菜单
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
	
})

