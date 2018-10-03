var arr=[1,2,3,41,5,61,7];
// var even=function(ele){
// 	return ele%2==0;
// }
// console.log(arr.some(even));
function mysome(arr,callback)
{
	var k=0;
	for (var i = 0; i < arr.length; i++) 
	{
		even=callback(arr[i]);
		if (even==true)
		{
			console.log(even);
			break;
		}
		else
		{
			k++;
		}
	}
	if (k==arr.length) 
	{
		console.log("false");
	}
}
mysome(arr,function(element){
	return element%2==0;
}
);
console.log(arr);