const dark = document.querySelector(".cool");
nav = document.querySelector(".right-ul-main");
bt1 = document.querySelector("#nav-show");
bt2 = document.querySelector("#nav-no-show");
main = document.querySelector("body");

bt1.addEventListener("click", function () {
  (dark.style.display = "block"),
    nav.classList.add("nav1"),
    (main.style.overflowY = "hidden");
});

bt2.addEventListener("click", function () {
  (dark.style.display = "none"),
    nav.classList.remove("nav1"),
    (main.style.overflowY = "visible");
});

window.addEventListener("click", function (e) {
  e.target == dark &&
    ((dark.style.display = "none"),
    nav.classList.remove("nav1"),
    (main.style.overflowY = "visible"));
});
