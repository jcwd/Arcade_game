

// // Object oriented Javascript from MDN
// // Namespace - a container enabling developers to bundle functionality under a unique, application specific name. this means that all variables, methods and functions become properties of that object.

// //example below

// //global namespace
// var MYAPP = MYAPP || {}; // this will check if MYAPP exists, if not create n empty object to encapsulate methods, functions, vars and objects

// // now we can create a sub-namespaces (only if tope level has already been defined)

// // the following is the syntax for creating a namespace and adding variables functions and a method:
//     MYAPP.commonMethod = {
//         regExForName: "", // define regex for name validation
//         regExForPhone: "", // define regex for phone no validation
//         validateName: function(name){
//             //do something with name, you can access regExForName variable
//             //using "this.regExForName"
//         },

//         validatePhoneNo: function(phoneNo){
//             //do something with the phone number
//         }
//     }
// // Object together with the method declarations
//     MYAPP.event = {
//         addListener: function(el, type, fn) {
//             //add some code in here
//         },
//         removeListener: function(el, type, fn) {
//             //add some code in here
//         },
//         getEvent: function(e) {
//             //add some code in here
//         }
//         // can keep going and add another method and properties
//     }

//     // here is the syntax for using the addListener method:
//     MYAPP.event.addListener("yourel", "type", callback);


// Custome Objects ( this will be the basis for how to build my enemies)
// The Class

var Person = function (firstName) { // Note all classes must start with Capital letter

// the property (object attribute)
    this.firstName = firstName; // The keyword this, which refers to the current object lets you work on the properties from within the class. Outside of the class you can access (read or write a property with the syntax InstanceName.Property)

// the Constructor

    console.log('Person instantiated'); // the constructor is used to set the Objects properties or to call methods to prepare the object for use. This line simply logs to the console that the object is created
};

// the Methods
Person.prototype.sayHello = function(){
    console.log("Hello I'm " + this.firstName);
}; // methods are functions and defined in the same way but follow the same logic as properties. calling a method is similar to accessing a proprty but you add () at the end of the method name. To define a method , assign a function to a named property of the classes "prototype" property (as seen here) the method can be called from outside of the class (see below "call the sayHello method")

// to create a new instance of the an object we use the new statement assigning the resulting Object to a variable to access it later or set it now as in this case. (Alice and Bob).
var person1 = new Person('Alice');
var person2 = new Person('Bob');


// to show the first name properties of the objects
console.log('person1 is ' + person1.firstName); // logs "person1 is Alice"
console.log('person2 is ' + person2.firstName); // logs "person2 is Bob"

// call the Person sayHello method
person1.sayHello(); // logs "Hello I'm Alice"
person2.sayHello(); // logs "Hello I'm Bob"

// Inheritance .. this is a way to create a class as a specialised version of one or more classes. This specialesed class is acalled a child and the other class is called the Parent

// define student constructor
function Student(firstName, subject) {
    //call the parent constructor, making sure (using call)
    //that "this" is set correctly during the call
    Person.call(this, firstName);

    //initialise student specific properties
    this.subject = subject;
}
    // Create a Student.prototype object that inherits from Person.prototype.
    // Note: A common error here is to use "new Person()" to create the
    // Student.prototype. That's incorrect for several reasons, not least
    // that we don't have anything to give Person for the "firstName"
    // argument. The correct place to call Person is above, where we call
    // it from Student.
    Student.prototype = Object.create(Person.prototype);

    // set the constructor property to refer to student
    Student.prototype.constructor = Student;

    // replace the "sayHello" method
    Student.prototype.sayHello = function(){
        console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
    };

    //add a "sayGoodBye" method
    Student.prototype.sayGoodBye = function(){
        console.log("GoodBye!");
    };



// check if that instance works correctly
console.log(student1 instanceof Person); //true
console.log(student1 instanceof Student); //true

//Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayGoodBye();
student1.sayHello();



