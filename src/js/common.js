document.addEventListener('DOMContentLoaded',function(){
	$('.layout-header a').eq(1).on('singleTap',function(){
		$('.caidan').toggle();
		
	})
	
	gaoliang();
	function gaoliang(){
		for(var i=0;i<5;i++){
			if($('.foot span').eq(i).find('dt').text()==$('body').attr('name')){
				$('.foot span a').eq(i).css('color',"darkmagenta");
				$('.foot span a').eq(i).find('dt').css('color',"darkmagenta");
			}
		   
		}
		
		
	}


})