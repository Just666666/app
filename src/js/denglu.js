document.addEventListener('DOMContentLoaded',function(){
	var local=localStorage.getItem('local');
	local=local?JSON.parse(localStorage.getItem('local')):[];
	$('.layoyt-body button').on('singleTap',function(){
		
		for(var i=0;i<local.length-1;i++){
			if($('.layoyt-body input').eq(1).val()==local[i].name && $('.layoyt-body input').eq(2).val()==local[i].psw){
				localStorage.setItem('username',$('.layoyt-body input').eq(1).val())
				open('personal_information.html');
				break;
			}else{
				alert('手机号码或密码不正确');
			}
		}
		
		
	})

	
	
	
})