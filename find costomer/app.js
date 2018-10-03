var customerArray=["AMIL","ANAS","ARIF","UMAR"];
function findCustomer(name)
{
	var i;
	var msg;
	for (i = 0; i < customerArray.length; i++) 
	{
		if (customerArray[i]==name) 
		{
			msg=function ()
			{
			alert("you are customer number " +(++i));
			}
			break;
		}		
		msg=function()
		{
				alert("person is not available");
	}	}
	return msg;
}

findCustomer("AML")();