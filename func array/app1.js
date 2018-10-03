var ar=[function(a)
{return a;}
,function(a){ return a*a;}
,function(a){ return a*a*a;}
,function(a){ return a*a*a*a;}
,function(a){ return a*a*a*a*a;
}];
	for(i=0;i<5;i++)
	{
	x=ar[i](4);
	alert(x);
	}