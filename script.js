
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("active");
    });
  }
});
