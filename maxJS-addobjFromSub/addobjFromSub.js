/* 
name: addobjFromSub.js
purpose: Create a top-level object from a subpatch or bpatcher 
*/
autowatch = 1;
outlets = 1;
var random_comment;

function add2topFromSubpatcher() {
  var prev = 0;
  var owner = this.patcher.box;
  while (owner) {
    prev = owner;
    owner = owner.patcher.box;
  }
  if (prev) {
    post("top patcher is", prev.patcher.name);
    random_comment = prev.patcher.newobject('comment', 3, 120, 200, 12, 'update ports >');
  }
  else {
  }
}

