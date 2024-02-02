// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//   console.log("Click!");
//   boxEl.classList.add("active");
//   console.log(boxEl.classList.contains("active"));
//   boxEl.classList.remove("active");
//   console.log(boxEl.classList.contains("active"));
// });

const boxEls = document.querySelectorAll(".box");

boxEls.forEach(function (boxEl, index) {
  boxEl.textContent = `${index.toString().repeat(3)}`;
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});
