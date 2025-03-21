// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color") 


function makeClass(...properties){
    return class {
        constructor(...val){
            properties.forEach((el,i) => this[el] = val[i])
        }
    }
}
const Animal = makeClass("name","species","age","health","weight","color") 
const myPet = new Animal("Buddy", "Dog", 5, "Good", 30, "Brown");
console.log(myPet);
