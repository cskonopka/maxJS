autowatch=1;
outlets=1;
// define patcher varibale
_p = this.patcher;
var tog;
var i;

function valid(){
	// create two toggle objects
	tog = _p.newobject("toggle", 195, 25, 40, 10);
	post(tog.valid+"\n");	
}