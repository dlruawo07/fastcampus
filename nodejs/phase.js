// let count = 0;
// const cb = () => {
//   if (count < 2000) {
//     console.log(`Processing nextTick cb ${++count}`);
//     // process.nextTick(cb);
//     setImmediate(cb);
//   }
// };
// setImmediate(cb);
// // setImmediate(() => console.log(`setImmediate is called`));
// setTimeout(() => console.log(`setTimeout executed`), 50);
// // process.nextTick(cb);
// console.log(`Start`);

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
}, 0);
