var accn['fb','insta','twitter','whatsapp'];
var obj={
	name:'ROMAN REIGN',
	account:accn,
	'no of follower':0,
	addfollower:function(obj,fname,faccnt){
		this['no of follower']++;
		this['follower'+this['no of follower']]=name;
	},
	printfollower:function()
	{
		for (var i = 1; i <= this['no of follower']; i++) 
		{
			console.log(this['no of follower'+i]);
		}
	}

}
obj.addfollower({name:'jjm',account:'fb'});
console.log(obj);
obj.printfollower();
