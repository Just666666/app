document.addEventListener('DOMContentLoaded',function(){
	var local=localStorage.getItem('local');
	local=local?JSON.parse(localStorage.getItem('local')):[];
	$('.layoyt-body button').on('singleTap',function(){
		
		for(var i=0;i<local.length-1;i++){
			if($('.layoyt-body input').eq(1).val()==local[i].name && $('.layoyt-body input').eq(2).val()==local[i].psw){
				localStorage.setItem('username',$('.layoyt-body input').eq(1).val())
				open('http://127.0.0.1:8020/app/app/src/html/personal_information(%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF).html');
				break;
			}else{
				alert('手机号码或密码不正确');
			}
		}
		
		
	})

	
	
	
})