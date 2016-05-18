/**
 * http://usejsdoc.org/
 */


function Person(name, age) {
	var _name = name;
	var _age = age;
	
	this.getAge = function() {
		return _age; 
	};
	
	this.setAge = function(age) {
		_age = age;
	};
	
	this.setName = function(name) {
		_name = name;
	};
	
	this.getName =  function() {
		return _name;
	};
	
	
}

Person.prototype.getInfo = function() {
	return this.getName() + "," + this.getAge();
}

var moon = new Person("moon", 35);

console.log(moon.getInfo());