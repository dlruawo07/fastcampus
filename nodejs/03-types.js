let foo = 42;
console.log(typeof foo);
console.log(foo);

foo = "bar";
console.log(typeof foo);
console.log(foo);

foo = true;
console.log(typeof foo);
console.log(foo);

const name = "lee";
const age = 28;
const isMale = true;
const job = null;
let anything = undefined;

const sym = Symbol();

const hobbies = ["walking", "reading"];
const address = {
  city: "Seoul",
};

console.log(typeof name);
console.log(typeof age);
console.log(typeof isMale);
console.log(typeof job);
console.log(Array.isArray(hobbies));
console.log(Array.isArray(address));
console.log(typeof sym);
