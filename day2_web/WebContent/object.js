/**
 * http://usejsdoc.org/
 */


var customers = [];

function newCustomer(name, age, height) {
	
	this.name = name;
	this.age = age;
	this.height = height || 0;
	
	this.printCustomer = function() {
		
		console.log("name = " + this.name + "age = " + this.age + "height = " + this.height)
	}
	
}

newCustomer("abc", 123);

customers[0] = new newCustomer("lee", 21);
customers[1] = new newCustomer("kim", 22, 172);
customers[2] = new newCustomer("park", 35, 180);

for (var i = 0; i < customers.length; i++) {
	customers[i].printCustomer();
}