document.getElementById("xem-them").addEventListener("click", function () {
  var toggleContent = document.querySelector(".Bang-size");
  toggleContent.style.display =
    toggleContent.style.display === "none" || toggleContent.style.display === ""
      ? "block"
      : "none";
});
