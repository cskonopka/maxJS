// define patcher varibale
_p = this.patcher;

function init(){
	// create two toggle objects
	tog1 = _p.newobject("toggle", 200, 50, 40, 10);
	tog2 = _p.newobject("toggle", 275, 125, 40, 10);
}	

// create two objects when the patch opens
init();

// connects two toggles via a patch cord
function connect(){	
	_p.connect(tog1, 0, tog2, 0);
}

// removes patch cord connecting each toggle object
function disconnect(){
	_p.disconnect(tog1, 0, tog2, 0);
}
