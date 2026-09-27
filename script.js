const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.querySelector(".sr-only").textContent = isOpen ? "Open navigation menu" : "Close navigation menu";
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.querySelector(".sr-only").textContent = "Open navigation menu";
    siteNav.classList.remove("is-open");
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.querySelector(".empty-state");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !visible);
      if (visible) visibleCount += 1;
    });
    emptyState.hidden = visibleCount > 0;
  });
});
