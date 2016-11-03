;$(function($){
	var $datalist = $('.dataList');
	//读取本地存储
	var goodlist = localStorage.getItem('GoodsData');
	goodlist = goodlist ? JSON.parse(goodlist) : [];
	//创建购物车
	for(var i = 0;i <goodlist.length;i++){
		var li = $('<li/>');
		//复选框
		var choice = $('<div/>').addClass('iconfont icon-yuan choice col-xs-1');
		li.append(choice);
		//商品图片
		var img = $('<div/>').addClass('goods col-xs-2');
		$('<img/>').attr('src',goodlist[i].image).appendTo(img);
		img.appendTo(li);
		
		//商品标题和价格
		var info = $('<div/>').addClass('info col-xs-5');
		var title = $('<div/>').addClass('title');
		$('<p/>').html(goodlist[i].title).appendTo(title);
		$('<span/>').addClass('price').html('&yen;'+goodlist[i].price).appendTo(title);
		title.appendTo(info);
		info.appendTo(li);
		
		//数量
		var num = $('<div/>').addClass('num col-xs-3');
		$('<input type="button" value="-" class="cut" />').appendTo(num);
		$('<input type="text" value="1" class="count" />').val(goodlist[i].num).appendTo(num);
		$('<input type="button" value="+" class="add" />').appendTo(num);
		num.appendTo(li);
		
		//删除
		$('<span/>').addClass('iconfont icon-lajixiang del col-xs-1').appendTo(li);
	
		//将li追加到购物车列表中
		li.appendTo($datalist);
	}

   var $oli =  $('.dataList li');
   var $choice = $('.dataList li .choice');
  //点击单选
   $oli.on('singleTap','.choice',function(){
   	if($(this).is('.icon-yuan')){
   		 $(this).removeClass('icon-yuan').addClass('icon-gou');
   	}else{
   		$(this).removeClass('icon-gou').addClass('icon-yuan');
   	}   
   	 //判断还是否是全部全选
     	Noall();
   })
   //获取元素节点
   var $allpick = $('.allPick');
   var $allchoice =  $('.allPick .choice');
   var allpay = $('.pay a span');
    //点击全选
   $allpick.on('singleTap','.choice',function(){
   	 if($(this).is('.icon-yuan')){
   		 $(this).removeClass('icon-yuan').addClass('icon-gou');
   		 //遍历每个li
   		 $.each($choice,function(idx,item){
   		 	$(this).removeClass('icon-yuan').addClass('icon-gou');
   		 })
   		Noall(); 
   	}else{
   		$(this).removeClass('icon-gou').addClass('icon-yuan');
   		 $.each($choice,function(idx,item){
   		 	$(this).removeClass('icon-gou').addClass('icon-yuan');
   		 })
   		Noall(); 
   	} 
   	  
   })
   //封装一个判断是否全选
   function Noall(){
   	  var allprice = 0;
   	  var flag1 = false;
   	  
   	  $.each($choice, function(idx,item) {
   	  	  //统计总额
   	  	  if($(this).is('.icon-gou')){
   	  	  
   	  	  	allprice += goodlist[idx].price*goodlist[idx].num;
   	  	  	
   	  	  }
   	  	  allpay.html(allprice);
   	  	 if($(this).is('.icon-yuan')){
   	  	 	flag1 = true;
   	  	 }
   	  });
   	  //如果不是全选，即把钩钩去掉
   	  if(flag1){
   	  	$allchoice.removeClass('icon-gou').addClass('icon-yuan');
   	  }
   }
    
    //数量减少
	$datalist.on('singleTap','.cut',function(){
		var $count = $(this).siblings('.count').val();
		var $che = $(this).closest('li').find('.che');
		if($count == 1){
			$(this).siblings('.count').val(1);
			//禁选按钮
//			$('.cut').attr({'disabled':'disabled'});
		}else{
			$(this).siblings('.count').val(--$count);
		}
		if($che.prop('checked')){
			total();
		}
		var title = $(this).closest('li').find('.title p').html()
		local($count,title);
		Noall();
	});
	
   //数量增加
	$datalist.on('singleTap','.add',function(){
		var $count = $(this).siblings('.count').val();
		var $che = $(this).closest('li').find('.che');
		$(this).siblings('.count').val(++$count);
		if($che.prop('checked')){
			total();
		}
		var title = $(this).closest('li').find('.title p').html()
		local($count,title);
		Noall();
	});
	
	
	
	//	//更改本地存储
	function local(num,title){
		goodlist = JSON.parse(localStorage.getItem('GoodsData'));
		for(var i in goodlist){  //遍历localStorage数组更改商品数量
			if(goodlist[i].title == title){
				goodlist[i].num = num;
				localStorage.setItem('GoodsData',JSON.stringify(goodlist));
			}
		}
	}
	
	//	//删除
	$datalist.on('singleTap','.del',function(){
		var $count = $(this).closest('li').find('.price i').html()*$(this).closest('li').find('.count').val();
		$(this).closest('li').remove();
		var $total=$('span','.pay').html() - $count;
		$('span','.pay').html($total);
		//更改本地存储
		goodlist = JSON.parse(localStorage.getItem('GoodsData'));
		for(var i in goodlist){  //遍历localStorage数组更改商品数量
			if(goodlist[i].title == $(this).closest('li').find('.title p').html()){
				goodlist.splice(i,1);
				localStorage.setItem('GoodsData',JSON.stringify(goodlist));
			}
		}
		
	});
	
	
	
//	//商品选择
//	var $all = $(".allPick .che");
//	var $checkbox = $('.che','.choice').not(".allPick .che");
//	//全选
//	$all.singleTap(function(){
//		$checkbox.prop("checked",$all.prop("checked"));
//		$('.che','.choice').filter(":checked").siblings('span').addClass('pic');
//		$('.che','.choice').not(":checked").siblings('span').removeClass('pic');
//		total();
//	});
//	//单选
//	$checkbox.singleTap(function(){
//		var $checked = $checkbox.filter(":checked");
//		$all.prop("checked",$checkbox.length == $checked.length);
//		$('.che','.choice').filter(":checked").siblings('span').addClass('pic');
//		$('.che','.choice').not(":checked").siblings('span').removeClass('pic');
//		total();
//		
//	});
//	//数量减少
//	$datalist.on('singleTap','.cut',function(){
//		var $count = $(this).siblings('.count').val();
//		var $che = $(this).closest('li').find('.che');
//		if($count == 1){
//			$(this).siblings('.count').val(1);
//			//禁选按钮
////			$('.cut').attr({'disabled':'disabled'});
//		}else{
//			$(this).siblings('.count').val(--$count);
//		}
//		if($che.prop('checked')){
//			total();
//		}
//		local();
//	});
//	//数量增加
//	$datalist.on('singleTap','.add',function(){
//		var $count = $(this).siblings('.count').val();
//		var $che = $(this).closest('li').find('.che');
//		$(this).siblings('.count').val(++$count);
//		if($che.prop('checked')){
//			total();
//		}
//		local();
//	});
//	//更改本地存储
//	function local(){
//		arr = JSON.parse(localStorage.getItem('shoppingCar'));
//		for(var i in arr){  //遍历localStorage数组更改商品数量
//			if(arr[i].title == $(this).closest('li').find('.title').html()){
//				arr[i].count = $count;
//				localStorage.setItem('shoppingCar',JSON.stringify(arr));
//			}
//		}
//	}
//	//删除
//	$datalist.on('singleTap','.del',function(){
//		var $count = $(this).closest('li').find('.price i').html()*$(this).closest('li').find('.count').val();
//		$(this).closest('li').remove();
//		var $total=$('span','.pay').html() - $count;
//		$('span','.pay').html($total);
//		//更改本地存储
//		arr = JSON.parse(localStorage.getItem('shoppingCar'));
//		for(var i in arr){  //遍历localStorage数组更改商品数量
//			if(arr[i].title == $(this).closest('li').find('.title').html()){
//				arr.splice(i,1);
//				localStorage.setItem('shoppingCar',JSON.stringify(arr));
//			}
//		}
//	});
//	//计算价格
//	function total(){
//		var $total=0;
//		$checkbox.each(function(){
//			var $li = $(this).closest('li');
//			if(this.checked){
//				$total += $li.find('.price i').html()*$li.find('.count').val();
//			}
//		});
//		$('span','.pay').html($total);
//	}
//	//确认支付
//	var str,obj={},goods=[],goodsObj={};
//	var $che = $('.dataList .che');
//	$('.pay').on('touchend',function(){
//		var index = 0;
//		alert('正在跳转!');
//		$che.each(function(idx,item){
//			if(item.checked){
//				goodsObj.title = $(this).closest('li').find('.title p').html();
//				goodsObj.price = $(this).closest('li').find('.title i').html();
//				goodsObj.img = $(this).closest('li').find('.goods img').attr('src');
//				goodsObj.count = $(this).closest('li').find('.count').val();
//				goods.push(goodsObj);
//				index++;
//			}
//		});
//		if(localStorage.getItem('order')) { //判断localStorage是否存在
//			str = JSON.parse(localStorage.getItem('order')); //将localStorage字符串转换成数组
//				obj = {
//					'id':parseInt(Math.random()*1000),
//					'sum': index,
//					'goods':goods
//				};
//				str.push(obj);
//		} else { //如果localStorage不存在则设置一个空数组追加对象
//			str = [];
//			obj = {
//				'id':parseInt(Math.random()*1000),
//		    	'sum': index,
//				'goods':goods
//			}
//			str.push(obj);
//		}
//		str = JSON.stringify(str); //将数组转换为字符串
//		var order = localStorage.setItem('order',str); //设置本地存储
//	});
//	//支付方式
//	$('.payMethod').singleTap(function(){
//		$('.payment').show();
//	});
//	
//	//关闭支付方式
//	$('.payment').on('singleTap','.del span',function(){
//		$(this).closest('.payment').hide();
//	});
});