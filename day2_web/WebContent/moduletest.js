/**
 * http://usejsdoc.org/
 */

var module = (function() {
	var count = 0;
	
	function play() {
		console.log("play~~~");
		
		if (true) {
			increment();
		}
	}

	function increment() {
		count++;
	}
	
	function getCount() {
		
		console.log(count);
		
	}
	
	return {"play" : play, "getCount" : getCount}
})();

module.play();
module.getCount();

