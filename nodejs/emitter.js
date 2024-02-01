// const EventEmitter = require("events");

// const celebrity = new EventEmitter();

// celebrity.on("update post", (type) => {
//   console.log(`I like this ${type} post`);
// });

// celebrity.on("update post", (type) => {
//   console.log(`This ${type} post is awesome!`);
// });

// celebrity.emit("update post", "image");

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code:", code);
});

process.on("exit", (code) => {
  console.log("Process exit event with code:", code);
});
