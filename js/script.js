// Start Header
document.addEventListener("scroll", () => {
  if (scrollY == 0) {
    document.getElementsByTagName("header")[0].classList.remove("active");
  }
  if (scrollY > 100) {
    document.getElementsByTagName("header")[0].classList.add("active");
  }
});
// End Header
