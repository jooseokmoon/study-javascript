/**
 * http://usejsdoc.org/
 */

function f() {
	var x = "global";
	console.log(x);

}

f();

(function(){
	var x = "local";
	console.log(x);
})();
