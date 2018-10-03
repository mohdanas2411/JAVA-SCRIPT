var arr=['soray','limit','hover','bookmark','internet'];
// var result=arr.filter(function(word){return word.length>6});
// console.log(result);
function myfilter(arr,callback)
	{	
		var temp=[];
		for (var i = 0; i < arr.length; i++) 
			{
				ret=callback(arr[i]);
				if (ret==true) 
				{
					temp.push(arr[i]);
				}
			}
			return temp;
	}

var result=myfilter(arr,function(word)
{	
		return word.length>6;
});
console.log(result);