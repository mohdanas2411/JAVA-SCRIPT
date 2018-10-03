var arr=[1,2,3,4,5,6,7];
function myforeach(arr,callback) 
	{
		for (var i = 0; i < arr.length; i++) 
		{	
			callback(arr[i],i);
		}
	}
myforeach(arr,function(arr,i){
	
	console.log("element "+arr+" at index number "+(i));
});