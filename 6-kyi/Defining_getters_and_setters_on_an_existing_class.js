// Introduction to getter and setter
// Javascript classes can declare getter and setters using the following format:

// class Engine {
//   constructor(watts) {
//     this.watts = watts;
//   }
//   get horsepower() {
//     return this.watts / 745.7;
//   }
//   set horsepower(hp) {
//     this.watts = 745.7 * hp;
//   }
// }
// and be used as so:

// let bossV8 = new Engine(279637.5);
// console.log(bossV8.horsepower); // => 375
// bossV8.horsepower = 385;
// console.log(bossV8.watts); // => 287094.5
// The problem
// There is a preloaded class of Person and it needs a new getter and setter. Person is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name. Bellow is the preloaded class:

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   getName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
// and can be used as so:

// let marcusFenix = new Person('Marcus', 'Fenix');
// console.log(marcusFenix.firstName); // => 'Marcus'
// console.log(marcusFenix.lastName); // => 'Fenix'
// console.log(marcusFenix.getName()); // => 'Marcus Fenix'
// Add a getter of name that returns the full name
// Add a setter of name that modifies first name and last name
// After adding the new getter and setter, a Person can be used as so:

// let augustusCole = new Person('Augustus', 'Cole');
// augustusCole.name = 'Cole Train';
// console.log(augustusCole.firstName); // => 'Cole'
// console.log(augustusCole.lastName); // => 'Train'
// console.log(augustusCole.getName()); // => 'Cole Train'
// console.log(augustusCole.name); // => 'Cole Train'


// class Person {
//     #name = '';
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
    
//     get name(){
//         return this.#name = this.getName()
//     }

//     set name(val){
//         const arrOfName = val.split(' ')
//         console.log(arrOfName);
//         this.firstName = arrOfName[0]
//         this.lastName = arrOfName[1]
//     }

//     getName() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   }

//   let marcusFenix = new Person('Marcus', 'Fenix');
//   marcusFenix.name = 'Andrei Rojkov'
//   console.log(marcusFenix); 
//   console.log(marcusFenix.firstName); // => 'Marcus'
//   console.log(marcusFenix.lastName); // => 'Fenix'
//   console.log(marcusFenix.getName()); // => 'Marcus Fenix'
// console.log(marcusFenix.name);


// let augustusCole = new Person('Augustus', 'Cole');
// augustusCole.name = 'Cole Train';
// console.log(augustusCole.firstName); // => 'Cole'
// console.log(augustusCole.lastName); // => 'Train'
// console.log(augustusCole.getName()); // => 'Cole Train'
// console.log(augustusCole.name); // => 'Cole Train'

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  }

  Person.prototype.name = '';

  Object.defineProperty(Person.prototype, 'name',{
    get (){
        return this.name = this.getName()
    },

    set (val){
        const arrOfName = val.split(' ')
        this.firstName = arrOfName[0]
        this.lastName = arrOfName[1]
    }
  })

  let augustusCole = new Person('Augustus', 'Cole');
  augustusCole.name = 'Cole Train';
  console.log(augustusCole.firstName); // => 'Cole'
  console.log(augustusCole.lastName); // => 'Train'
  console.log(augustusCole.getName()); // => 'Cole Train'
  console.log(augustusCole.name); // => 'Cole Train'


