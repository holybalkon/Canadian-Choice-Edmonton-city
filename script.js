document.documentElement.classList.remove("no-js");

document.querySelectorAll(".faq-trigger").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", open ? "false" : "true");
  });
});
