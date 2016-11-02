document.addEventListener('DOMContentLoaded',function(){
	
	var username=localStorage.getItem('username');
	$('.layout-main .tel').text(username);
	
	
})