const listBox = document.querySelector(".activity-list");
const list = listBox.querySelectorAll("li");
const selected = document.querySelectorAll(".activity-preview");

console.log(selected);
list[0].addEventListener("click", () => selected[0].scrollIntoView());
list[1].addEventListener("click", () => selected[1].scrollIntoView());
list[2].addEventListener("click", () => selected[2].scrollIntoView());
list[3].addEventListener("click", () => selected[3].scrollIntoView());
