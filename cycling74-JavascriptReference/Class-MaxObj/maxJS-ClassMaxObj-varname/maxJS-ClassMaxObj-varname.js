autowatch=1;

// define patcher varibale
_p = this.patcher;
var tog = new Array();
var i;

function varname(){
	var randomized_A = Math.floor((Math.random() * 250) + 1);
	var randomized_B = Math.floor((Math.random() * 450) + 1);	
	tog = _p.newobject("toggle", randomized_A, randomized_B, 40, 10);
	tog.varname = "corgi";
	post(tog.varname+"\n");
}

varname();