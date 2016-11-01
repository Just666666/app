
 document.addEventListener('DOMContentLoaded',function(){
    
 	$.ajax({
 		type:"get",
 		url:"./../data/details.json",
   		dataType:'json',
 		success:function(res){
 			var $div = $('.lunbo');
            var $title = $('.title_Price .title');
            var $price = $('.price_lyh');
            console.log();
 			$.each(res,function(idx,item){
 				$div[0].innerHTML = '<img src='+item.images1+'/>';
   				$div[1].innerHTML ='<img src='+item.images2+'/>';
   				$div[2].innerHTML ='<img src='+item.images3+'/>';
   				$div[3].innerHTML ='<img src='+item.images4+'/>';
   				$div[4].innerHTML ='<img src='+item.images5+'/>';
   				$div[5].innerHTML ='<img src='+item.images6+'/>';
   				$title.html(item.title);
   				$price.html('&yen;'+item.price);
   			})
 			var mySwiper = new Swiper ('.swiper-container', {
		 		pagination: '.swiper-pagination',
		 		loop:true,
		 		autoplay:3000,
		 		speed:1000,	
		 	})
 		}
 	});
 	
 	//获取节点，详情与评论切换
 	
 	var $btnChanges = $('.search-bar div .tag');
    //事件监听
    $btnChanges.on('singleTap',function(){
    	$(this).addClass('active').siblings('a').removeClass('active');
    	if($(this).html() === '详情'){
    		$('.detail_Content').show();//详情显示
    		$('.review').hide();	//评论隐藏
    	}else{
    		$('.detail_Content').hide();
    		$('.review').show();	
    	}	
    })
    
    
 
 })