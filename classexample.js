// Prototypal class
var Person = function(name){ // class begins with Capital letter
    this.name = name;
};

Person.prototype.display = functional(greeting)
{
    console.log(greeting + " "+this.name);
};

var new_person = new Person("Jon");
new_person.display