// var => 함수 레벨 스코프
function func() {
  if (true) {
    var a = "a";
    console.log(a);
  }
  console.log(a);
}
func();

// let, const => 블록 레벨 스코프
function func2() {
  if (true) {
    let b = "b";
    console.log(b);
  }
  console.log(b);
}
func2();
console.log(b);
