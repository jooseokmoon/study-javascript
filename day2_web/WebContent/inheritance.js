/**
 * http://usejsdoc.org/
 */


//var Super = function() {
//	this.name = "super";
//}
//
//Super.prototype.getName = function() {
//	console.log("name = " + this.name);
//}
//
//var Sub = function() {
//	this.name = "sub"
//}
//
//Sub.prototype = new Super;
//Sub.prototype.constructor = Sub;
//
//var sup = new Super();
//var sub = new Sub();
//
//sup.getName();
//sub.getName();

function Book(name, price) {
	this.name = name;
	this.price = price;
}

Book.prototype.getInfo = function() {
	console.log("name = " + this.name + "price = " + this.price);
}

function Magazine(name, price, issue) {
	this.parent(name, price);
	this.issue = issue;
}

Magazine.prototype = new Book;
Magazine.prototype.parent = Book;
Magazine.prototype.constructor = Magazine;

var book = new Book("priciple", 20000);
var magazine = new Magazine("the man", 5000, 5);

book.getInfo();
magazine.getInfo();

if (book instanceof Book) {
	console.log(book.constructor);
}