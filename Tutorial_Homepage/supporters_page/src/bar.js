const body = document.querySelector("body");
const barBtn = document.querySelector(".menu-bar");
const nav = document.querySelector("nav");
const backBtn = nav.querySelector("button");

function showNav() {
  const navName = nav.className;
  if (navName === "showing-nav") {
    nav.classList.remove("showing-nav");
  } else {
    nav.classList.add("showing-nav");
    body.style.overflow = "hidden";
  }
}

barBtn.addEventListener("click", showNav);
backBtn.addEventListener("click", () => {
  nav.classList.remove("showing-nav");
  body.style.overflow = "auto";
});
