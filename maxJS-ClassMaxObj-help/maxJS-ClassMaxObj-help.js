autowatch=1;
outlets=1;

var vbox;
var vx=250;
var vy=75;

function newdefault(){
	var i;
	var a = new Array();
	
	if (vbox)
		this.patcher.remove(vbox);
	
	a[0] = vx;
	a[1] = vy;
	
	for (i=0;i<arguments.length;i++)
		a[i+2] = arguments[i];
	
	vbox = this.patcher.newdefault(a);
}

function help(){
	vbox.help();
}
	