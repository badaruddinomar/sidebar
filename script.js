// selectors --
const sidebarContainer = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");
const crosIcon = document.querySelector(".cros-icon");
const sidebar = document.querySelector(".links-ul");
const backdrop = document.querySelector(".backdrop");

// Events Handlers--
menuIcon.addEventListener("click", (e) => {
  sidebar.classList.add("show");
  sidebarContainer.classList.add("show");
});
sidebarContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("cros-icon") ||
    e.target.classList.contains("sidebar")
  ) {
    sidebar.classList.remove("show");
    sidebarContainer.classList.remove("show");
  }
});
