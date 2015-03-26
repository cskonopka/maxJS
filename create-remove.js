// define patcher varibale
_p = this.patcher;
var tog = new Array();
var i;

function create(numObjects){
	for(i=0;i<numObjects;i++){
		tog[i] = _p.newobject("toggle", (75*i)+10, 113, 40, 10);
	}
}

function destroy(numObjects){
	for(i=0;i<numObjects;i++){
		_p.remove(tog[i]);
	}
}
