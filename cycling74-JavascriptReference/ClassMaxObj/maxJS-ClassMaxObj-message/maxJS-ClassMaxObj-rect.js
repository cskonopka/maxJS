autowatch=1;
outlets=1;
// define patcher varibale
_p = this.patcher;
var tog;

function init(){
	tog = _p.newobject("toggle", 250, 25, 40, 10);
}	

init();

function on(){
	tog.message("set", 1);
}

function off(){
	tog.message("set", 0);
}