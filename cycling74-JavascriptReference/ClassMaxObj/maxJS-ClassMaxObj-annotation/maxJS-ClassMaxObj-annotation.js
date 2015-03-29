autowatch=1;
outlets=1;
// define patcher varibale
_p = this.patcher;
var tog;
var i;

function annotation(){
	// create two toggle objects
	tog = _p.newobject("toggle",215, 25, 40, 10);
	tog.annotation("hash browns");
}	

// create two objects when the patch opens
annotation();
