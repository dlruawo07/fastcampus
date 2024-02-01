async function test() {
  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonRes1 = await res1.json();
    console.log(jsonRes1);
    const res2 = fetch("하하하://jsonplaceholder.typicode.com/");
    const jsonRes2 = await res2.json();
    console.log(jsonRes2);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("finished!");
  }
}

test();
