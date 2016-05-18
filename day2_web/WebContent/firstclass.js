/**
 * http://usejsdoc.org/
 */


function a() {
	console.log("a()");
	return function(f) {
		console.log("a()->()");
		f();
	}
}

function b() {
	console.log("b()");
}

var c = a();
c(b);