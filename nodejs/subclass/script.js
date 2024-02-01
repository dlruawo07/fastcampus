class Animal {
  constructor(gender) {
    this.gender = gender;
  }
  makeSound() {
    console.log("no default sound");
  }
}
class Dog extends Animal {
  constructor(gender, species) {
    super(gender);
    this.species = species;
  }
}

const dog = new Dog("male", "husky");
dog.makeSound();
