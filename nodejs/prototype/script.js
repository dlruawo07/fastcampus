let user = {
  name: "David",
  age: 28,
};

// console.log(user.name);
// console.log(user.hasOwnProperty("name"));
// console.log(user.hasOwnProperty("email"));

// console.log(user);

function Person(name, email, birthday) {
  let person = Object.create({
    age: 28,
    calculateAge() {
      const diff = new Date() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  });
  person.name = name;
  person.email = email;
  person.birthday = new Date(birthday);
  return person;
}

const john = new Person("john", "john@abc.com", "7-10-91");
const han = new Person("han", "han@abc.com", "2-11-91");

console.log(john);
console.log(han);

// Person.prototype.calculateAge = function () {
//   const diff = new Date() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

console.log(john.calculateAge());
