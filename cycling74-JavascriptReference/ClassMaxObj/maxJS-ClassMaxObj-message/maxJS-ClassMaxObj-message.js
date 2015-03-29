autowatch=1;
outlets=1;
// define patcher varibale
_p = this.patcher;
var tog = new Array();
var i;

function init(){
	// create two toggle objects
	tog1 = _p.newobject("toggle", 250, 25, 40, 10);
}	

// create two objects when the patch opens
init();

function on(){
	tog1.message("set", 1);
}

function off(){
	tog1.message("set", 0);
}