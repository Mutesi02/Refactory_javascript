function Person(name, age){
    this.name=name
    this.age=age
}
Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`)
}
const person2 = new Person("Munir",21)
console.log(person2)


//latest
class Xperson{
    constructor (name, age, powers)
    {
    this.name=name;
    this.age=age;
    this.powers=powers;
    }
    power() {
        console.log(`I have ${this.powers}`)
    }
}
const xperson2 = new Xperson("Xavier",56, "claws")
console.log(xperson2)
xperson2.power();

const xperson3 = new Xperson("Deadpool",16,"healing factor")
console.log(xperson3)
xperson3.power();
const xperson4 = new Xperson("Storm",76,"weather control")
console.log(xperson4)
xperson4.power();






class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  const person3 = new Person("Felicity", 20);
  person2.greet();
  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age); // Calls the parent constructor
      this.job = job;
    }
  
    work() {
      console.log(`${this.name} is working as a ${this.job}`);
    }
  }
  
  const emp1 = new Employee("David", 28, "Software Engineer");
  emp1.greet();
  emp1.work();