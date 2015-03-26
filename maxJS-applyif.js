// define patcher varibale
_p = this.patcher;
var tog = new Array();
var i;

function create(){
	tog1 = _p.newobject("toggle", 200, 50, 40, 10);
	
}

function appliedMessage(){
	outlet(0, "you created an object :)");
}

function test(){
	_p.applyif(create, compareNumber(1));
}

function compareNumbers(input){
	if(input===1)
	return true;
}