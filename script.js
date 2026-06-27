const header = document.querySelector("[data-header]");
let ticking = false;

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
  ticking = false;
}

function requestHeaderUpdate() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateHeader);
}

requestHeaderUpdate();
window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
