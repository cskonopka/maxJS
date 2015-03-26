// define patcher varibale
_p = this.patcher;
var tog = new Array();
var i;

function create(numObjects){
	for(i=0;i<numObjects;i++){
		tog[i] = _p.newobject("toggle", 40*i, 20*i, 40, 10);
	}
}

function destroy(){
	_p.remove(tog[0]);
}