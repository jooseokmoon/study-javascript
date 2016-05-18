/**
 * http://usejsdoc.org/
 */


function Person(name, age) {
	
	this.name = name;
	this.age = age;
}

Person.prototype.printInfo =  function() {
	console.log("name = " + this.name + "\n" + "age = " + this.age)
}

person1 = new Person("moon", 35);
person2 = new Person("park", 34);

person1.printInfo();
person2.printInfo();