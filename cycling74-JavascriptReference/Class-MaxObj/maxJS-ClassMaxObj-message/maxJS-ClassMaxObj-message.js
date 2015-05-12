autowatch=1;
outlets=1;
// define patcher varibale
_p = this.patcher;
var tog;

function init(){
	// create two toggle objects
	tog = _p.newobject("toggle", 250, 25, 40, 10);
}	

// create two objects when the patch opens
init();

function on(){
	tog.message("set", 1);
}

function off(){
	tog.message("set", 0);
}