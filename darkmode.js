document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const darkModeToggle = document.getElementById("darkModeToggle");

  /* -------------------------------
        DARK MODE LOAD FROM STORAGE
  --------------------------------*/
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    const icon = darkModeToggle?.querySelector("i");
    icon?.classList.replace("fa-moon", "fa-sun");
  }

  /* -------------------------------
        HAMBURGER MENU TOGGLE
  --------------------------------*/
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // ⭐ AUTO-CLOSE ALL DROPDOWNS WHEN MENU CLOSES
      if (!navLinks.classList.contains("active")) {
        document.querySelectorAll(".dropdown").forEach(drop => {
          drop.classList.remove("open");
        });
      }
    });
  }

  /* -------------------------------
        DROPDOWN ARROW CONTROL
  --------------------------------*/
  document.querySelectorAll(".dropdown .arrow1").forEach(arrow => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();

      const parentDropdown = arrow.closest(".dropdown");

      // Toggle only this dropdown
      parentDropdown.classList.toggle("open");

      // Close all other dropdowns
      document.querySelectorAll(".dropdown").forEach(drop => {
        if (drop !== parentDropdown) drop.classList.remove("open");
      });
    });
  });

  /* -------------------------------
        DARK MODE TOGGLE
  --------------------------------*/
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const icon = darkModeToggle.querySelector("i");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        icon?.classList.replace("fa-moon", "fa-sun");
      } else {
        localStorage.setItem("theme", "light");
        icon?.classList.replace("fa-sun", "fa-moon");
      }
    });
  }

});
