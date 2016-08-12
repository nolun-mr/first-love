//header 二级菜单
$(function(){
	$('.account-hide').parent().hover(function(){
		$(this).find('.account-hide').show();
	},function(){
		$(this).find('.account-hide').hide();
	})
	
	//二级 菜单侧边显示
	var $bannerList = $('.banner-list');
	 $bannerList.on('mouseenter','dl',function(){
	 	$(this).find('dd').show();
	 	
	 }).on('mouseleave','dl',function(){
	 	$(this).find('dd').hide();
	 })
})
