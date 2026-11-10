let lest = document.getElementById("lest");
lest.addEventListener("click", function () {
  location.assign("./kerak.html");
});
const suara = document.getElementById("suara");
document.addEventListener(
  "click",
  function () {
    suara.play();
  },
  { once: true },
);
