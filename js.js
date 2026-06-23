document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-segunda-fase");
  if (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "index2.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-primeira-fase");
  if (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});