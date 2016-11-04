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
	$('.foot .geren').on('singleTap',function(){console.log(1);
                   if(localStorage.getItem('local')){
                   	
                   	window.location ='html/personal_information.html';
                   }else{
                   	window.location ='html/register.html';
                   }

	})
          $('.ret_myself').on('singleTap',function(){
          	window.location ='personal_information.html';
          })

       $('.foot .com').on('singleTap',function(){console.log(1);
                   if(localStorage.getItem('local')){
                   	
                   	window.location ='personal_information.html';
                   }else{
                   	window.location ='register.html';
                   }

	})
})