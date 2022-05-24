const sidebarToggle = document.querySelector(".sidebar-toggle");
const aside = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", function () {
  aside.classList.toggle("show-sidebar");
});
