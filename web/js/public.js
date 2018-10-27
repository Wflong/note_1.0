function all_true(){
	
	un_true();
	email_true();
	pwd_true();
	eq_true();
	if(un_true()&&email_true()&&pwd_true()&&eq_true())
		return true;
	else
		return false;

}
function un_true(){
	var un = document.getElementById('un');
	if(un.value.length < 4)
	{
		document.getElementById('un_show').innerHTML="用户名必须大于等于四位"
	}
	else
	{
		document.getElementById('un_show').innerHTML="&nbsp;"
		return true;
	}
}
function email_true(){
	var email = document.getElementById('email');
	if(email.value == "")
	{
		document.getElementById('email_show').innerHTML = "邮箱不能为空，此项必填"
		
	}
	else if(!email.value.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
	{
		document.getElementById('email_show').innerHTML = "请输入正确的邮箱地址"
		
	}
	else
	{
		document.getElementById('email_show').innerHTML = "&nbsp;"
		return true;
	}
}
function pwd_true(){
	var pwd = document.getElementById('pwd');
	if(pwd.value == ''){
		document.getElementById('pwd_show').innerHTML = '密码不能为空';
		
	}
	else if(pwd.value.length <6){
		document.getElementById('pwd_show').innerHTML = '密码必须在6位以上';
		
	}
	else
	{
		document.getElementById('pwd_show').innerHTML = '&nbsp;';
		return true;
	}
}
function eq_true(){
	var pwd = document.getElementById('pwd');
	var pwd_1 = document.getElementById('pwd_1');
	if(pwd.value != pwd_1.value){
		document.getElementById('pwd_1_show').innerHTML = '两次输入密码不一致';
		
	}
	else
	{
		document.getElementById('pwd_1_show').innerHTML = '&nbsp;';
		return true;
	}
}


function login(){
	un_login();
	pwd_login();
	if(un_login()&&pwd_login())
	{
		return true;
	}
	else
		return false;
}

function un_login(){
	var un = document.getElementById('un');
	if(un.value == '' || un.value.length <4)
	{
		document.getElementById('un_show').innerHTML='请输入正确的用户名';
	}
	else
	{
		document.getElementById('un_show').innerHTML='&nbsp;';
		return true;
	}
}
function pwd_login(){
	var pwd = document.getElementById('pwd');
	if(pwd.value == '' || pwd.value.length <4)
	{
		document.getElementById('pwd_show').innerHTML='请输入正确的密码';
	}
	else
	{
		document.getElementById('pwd_show').innerHTML='&nbsp;';
		return true;
	}
}