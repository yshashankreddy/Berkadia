 class Person { 
	constructor(name) { 
		this.name = name; 
	} 
	toString_Person() { 
		return "Name of person = " + this.name; 
	} 
} 
class Student extends Person { 
	constructor(name, Sid) {  
		super(name);  
		this.Sid = Sid; 
	} 
	toString() { 
		return super.toString_Person() + ", Student Id = "
			+ this.Sid 
	} 
}  
var Student_1 = new Student("Shashank", "16"); 
console.log(Student_1.toString()); 

/*OUTPUT:  
C:\Users\SHASHANK\Desktop\week3\my-app>node obj.js
Name of person = Shashank, Student Id = 16*/

