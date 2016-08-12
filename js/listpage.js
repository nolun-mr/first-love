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
	
	/*左侧点击+号展开，点击-号收缩*/
	 var $h3 = $('.listPages-ltop').children('h3');
	 $h3.on('click',function(){
		$(this).children('.close').toggleClass('unfold');
		if( $(this).children().hasClass('unfold') ){
			$(this).next().css('display','block');
		}else{
			$(this).next().css('display','none');
		}
	 });
	 /*右侧点击‘更多’显示更多的效果*/
	 var $ul = $('#boxdl').find('ul');
	 var $more =$('.more');
	 $more.on('click',function(){
		 $ul.toggleClass('t-height')
	 });
	 var $listPageT=$('.listPages-rbottom');
	 $listPageT.on('click','dt',function(){
		 window.location.href='detail.html';
	 });
	 
	  // 点击按钮时，把商品信息存入cookie
	$('.listPages-rbottom').on('click','.gwc',function(){
		var $proName = $(this).closest('dl');
		var $proname = $proName.children('.pro-name');
		var $proguige =$proName.children('.pro-name').find('span');
		var $price = $proName.children('.pro-price').find('.num');
		var $zhekou = $proName.children('.pro-price').find('.zhekou');
		console.log($proName+$proguige+$price+$zhekou);
		
		var index = $proName.index();
		var goodName = '.listPages-rbottom' + index;

		// 创建一个空对象，用来保存商品信息
		var value = {};
		value.name = $proname.text();
		value.guige = $proguige.text();
		value.price = $price.text();
		value.zhekou = $zhekou.text();

		// 写入商品数量
		var lastCookie = document.cookie;
		if(lastCookie.indexOf(goodName) != -1){
			// 遍历cookie，获取原来的数量
			$.each(lastCookie.split('; '),function(idx,val){
				// val:goods0={"imgurl":"images/shirt_1.jpg","name":"短袖衬衣","price":"98.88","qty":1}
				var name = val.split('=')[0];
				if(name == goodName){
					value.qty = JSON.parse(val.split('=')[1]).qty + 1;

					// 得到当前商品数量后，没必要再遍历后面的商品，所以直接退出
					return false;
				}
			});
		}else{
			value.qty = 1;
		}

		// JSON.parse():把json字符串转换成json对象
		// JSON.stringify():把json对象转换成json字符串（JSON.parse的逆向操作）
		var _cookie = goodName + '=' + JSON.stringify(value);
		console.log(_cookie)
		// name:goods0=
		// value:{name:"短袖衬衣",imgurl:"images/shirt_1.jpg",price:98.88}
		document.cookie = _cookie;
		window.location.href='shoppingcar.html';
	});
	 
})

