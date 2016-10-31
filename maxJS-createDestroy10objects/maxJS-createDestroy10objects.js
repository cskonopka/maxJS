// define patcher varibale
_p = this.patcher;
var tog = new Array();
var i;

function create(numObjects){
	tog[0] = _p.newobject("toggle", (75*i)+10, 100, 40, 10);
}

function destroy(numObjects){
	_p.remove(tog[i]);
}
