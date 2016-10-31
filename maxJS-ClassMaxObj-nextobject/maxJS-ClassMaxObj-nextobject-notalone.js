autowatch=1;
outlets=1;
// define patcher varibale
_p = this.patcher;
var tog,
	buti;

function init(){
	// create two toggle objects
	tog = _p.newobject("toggle", 250, 25, 40, 10);
	buti = _p.newobject("number", 350, 25, 40, 10);	
}	

// create two objects when the patch opens
init();

function anything(){
	post(buti.canhilite+"\n");
}
