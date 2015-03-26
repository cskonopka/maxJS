// define patcher varibale
_p = this.patcher;
var tog = new Array();
var i;

function create(numObjects){
	for(i=0;i<numObjects;i++){
		tog[i] = _p.newobject("toggle", (75*i)+10, 100, 40, 10);
		var named = _p.getnamed(tog[i]);
		outlet(0, named);
	}
}

function destroy(numObjects){
	for(i=0;i<numObjects;i++){
		_p.remove(tog[i]);
	}
}