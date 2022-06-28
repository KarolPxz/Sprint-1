//Level 1
//- Exercise 1
//Displays the result of a self-invoking arrow function that adds two numbers to the console.

 ((num1, num2) => console.log(num1 + num2))(9,7);

//Level 2
//- Exercise 1
//Create an arrow function that, receiving a parameter, returns an object with an attribute that has the value of the received parameter.

let person = {
    name : 'Toni',
    surname: 'Rodrigu',
    age: 5,
}

let newAge = 0;

//((newAge) => console.log(person))(45); ????
 ((newAge) => {
    person.age = newAge;
    return console.log(person);
 })(20);

//- Exercise 2
//Create a class "Person" that receives a 'name' parameter when instantiated. The class will include a method called Name that prints the 'name' parameter to the console. Invoke the method named Name from outside the class.

class Person {
    constructor(personName){
        this.personName = personName;
    }

  name() {
    return console.log(this.personName);
  } 
}

const person1 = new Person('Antonio');
console.log(person1);
person1.name();

//Level 3
//- Exercise 1
//Write an object creator function that instantiates an abstract class. Label it with different definitions.