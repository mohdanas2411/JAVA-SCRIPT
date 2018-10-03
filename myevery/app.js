var arr=[1,2,39,5,6,7];
function myevery(arr,callback) 
{
	var k=0;
	for (var i = 0; i < arr.length; i++) 
	{
		result=callback(arr[i]);
		if(result==false)
		{
			console.log("false");
			break;
		}
		else
		{
			k++;
		}
	}
	if (k==arr.length)
	{
		console.log("true");
	}
}
myevery(arr,function(x){
	return x < 40;
});
console.log(arr);