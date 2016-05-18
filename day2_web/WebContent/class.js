/**
 * http://usejsdoc.org/
 */


function clazz(opt) {
	var constructor = opt.constructor;
	if(opt.extend) {
		constructor.prototype = new opt.extend;
		constructor.prototype.constructor = constructor;
		constructor.prototype.parent = opt.extend;
	}
	for(var method in opt.methods) {
		constructor.prototype[method] = opt.methods[method];
	}
	
	return constructor;
}

var config = {
		constructor : function(title, price) {
			this.title = title;
			this.price = price;
		},
		methods : {
			getInfo : function() {
				return this.title + "," + this.price;
			},
			print : function() {
				console.log("title = " + this.title + "price = " + this.price)
			}
		}
}

var Book = clazz(config);

var book = new Book("principle", 20000);

book.print();

var config2 = {
		constructor : function(title, price, issue) {
			this.parent(title, price);
			this.issue = issue;
		},
		extend : Book,
		methods : {
			getInfo : function() {
				return Book.prototype.getInfo.call(this) + this.issue;
				
			},
			getprint : function() {
				return Book.prototype.print.call(this) + "issue = " + this.issue;
			}
		
		}
}

var Magazine = clazz(config2);
var magazine = new Magazine("the man", 5000, 5);
magazine.print();