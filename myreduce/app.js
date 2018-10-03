var arr=[1,2,3,4];
function myreduce(arr,callback,initial=0)
	{
		for (var i = 0; i < arr.length; i++) 
		{
		 	initial=callback(arr[i],initial);
		}
		return initial;
	}
console.log(myreduce(arr,function(acc,arr)
{
	return acc+arr;
}//you can send your initial value here
));