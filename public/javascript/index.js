const btn = document.querySelector(".details__edit__button");
const deleteBtn = document.querySelector(".details__delete__button");

const box = document.querySelector(".details_box");

btn.addEventListener("click", () => {
  console.log("a");
  box.classList.add("active");
});

deleteBtn.addEventListener("click", () => {
  fetch("/delete", {
    method: "DELETE",
  });
});
