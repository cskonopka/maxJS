autowatch=1;
outlets=1;
var j = max;
var vbox;
var vx=200;
var vy=200;

function close(){

var jj = j.paths;
		var str = jj.stringify();				// convert dict to string

	outlet(0, str);
}
