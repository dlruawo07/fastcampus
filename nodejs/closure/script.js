// function outerFunc(outerVar) {
//   return function innerFunc(innerVar) {
//     console.log(outerVar);
//     console.log(innerVar);
//   };
// }

// const newFunc = outerFunc("outside");
// newFunc("inside");

// outerFunc("a")("b");

let a = "a";

function functionA() {
  let b = "b";
  console.log(a, b);
  return function functionB() {
    let c = "c";
    console.log(a, b, c);
  };
}

functionA()();
