const a = {
  a: 1,
  b: 2,
};

const { c = 10 } = a;

console.log(c);
console.log(a);
