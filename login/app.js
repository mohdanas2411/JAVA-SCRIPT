function login(user,password) 
{
	var fun=function()
	{
		if (password=="prolog")
		{
			return 1;
		}
	}
	return fun;
}
var fun1=login("anas","prolog");
result=fun1();

if (result==true) 
	{
		alert("Welcome to prolog")
	}
else
	{
		alert("wrong password")
	}