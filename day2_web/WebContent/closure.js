/**
 * http://usejsdoc.org/
 */


var x = "global";

function global() {
	var x = "local";
	return function local() {
		console.log(x);
	}
}

var local = global();
local();
console.log(x);