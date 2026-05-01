// Mobile navigation
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

// Footer year
const year = document.getElementById("year");

// Language dropdowns
const languageSelects = document.querySelectorAll(".language-select");

// Toggle mobile navigation
if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking normal navigation links
  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when pressing Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Set current year in footer
if (year) {
  year.textContent = new Date().getFullYear();
}

// Language dropdown redirect
if (languageSelects.length > 0) {
  languageSelects.forEach((select) => {
    select.addEventListener("change", () => {
      const targetUrl = select.value;

      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });
}
