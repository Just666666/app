document.addEventListener('DOMContentLoaded',function(){
	
	var username=localStorage.getItem('username');
	if(username){
		$('.layout-main .tel').text(username);
	}else{
		$('.layout-main .tel').text('12345678901');
	}
	
	
	
})