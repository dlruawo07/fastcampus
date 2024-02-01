const person = {
  name: "kyumjae",
  age: 28,
  gender: "male",
};

for (let i in person) {
  console.log(`${i} : ${person[i]}`);
}

const letters = ["a", "b", "c", "d", "e", "f"];
letters.forEach((i) => {
  console.log(i);
});
