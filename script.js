const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const year = document.getElementById("year");
const languageSelects = document.querySelectorAll(".language-select");

languageSelects.forEach((select) => {
  select.addEventListener("change", () => {
    window.location.href = select.value;
  });
});


if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
