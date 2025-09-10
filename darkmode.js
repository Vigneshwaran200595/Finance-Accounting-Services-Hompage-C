document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const darkModeToggle = document.getElementById("darkModeToggle");


  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    const icon = darkModeToggle.querySelector("i");
    if (icon) icon.classList.replace("fa-moon", "fa-sun");
  }


  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".dropdown .arrow1").forEach(arrow => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      const parentDropdown = arrow.closest(".dropdown");
      parentDropdown.classList.toggle("open");
    });
  });

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = darkModeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      if (icon) icon.classList.replace("fa-moon", "fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      if (icon) icon.classList.replace("fa-sun", "fa-moon");
    }
  });
});

