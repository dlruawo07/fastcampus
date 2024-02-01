// function test() {
//   return new Promise((resolve, reject) => {
//     // 비동기 처리라고 가정
//     const success = true;
//     if (success) resolve("success");
//     else reject("fail");
//     // 성공했다면 resolve (성공값을 매개변수로 받을 수 있음)
//     // 실패했다면 reject를 실행한다
//   });
// }

// test()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.error(result);
//   })
//   .finally((result) => {
//     console.log(result);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .then(() => fetch("하하하://jsonplaceholder.typicode.com/"))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("finished!"));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 1);
});
const promise2 = 2;
const promise3 = Promise.resolve(3);
Promise.race([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
