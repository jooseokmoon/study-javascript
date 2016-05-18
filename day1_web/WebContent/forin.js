function plus(i, j){
	
	if (i > 0 && j > 0) {
		return i + j;
	} else {
		return -1;
	}
	
}

var r = plus(-10, 20);
var r2 = r *360 / 12 * 12.0;
console.log("result :"  + r2)


//var obj = {name : "moon", age : 35}
//for(var key in obj) {
//	console.log(key);
//}