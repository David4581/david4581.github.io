const revealItems = document.querySelectorAll(
  ".nav, .hero-copy, .hero-visual, .section, .footer"
);
revealItems.forEach((item) => item.classList.add("fade-up"));

const staggerGroups = [
  ".nav-links a",
  ".hero-meta > div",
  ".stat",
  ".card",
  ".member-card",
  ".gallery-grid img",
  ".entry-panel > *",
];

staggerGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((item, index) => {
    item.classList.add("fade-up");
    item.style.setProperty("--delay", `${index * 0.08}s`);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-up").forEach((item) => observer.observe(item));

const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sectionTargets = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const index = sectionTargets.indexOf(entry.target);
      if (entry.isIntersecting && index !== -1) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

sectionTargets.forEach((section) => navObserver.observe(section));

const joinBtn = document.getElementById("join-btn");
const toast = document.getElementById("toast");
let toastTimeout;

if (joinBtn && toast) {
  joinBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("1091651988").then(() => {
      clearTimeout(toastTimeout);
      toast.classList.add("show");
      toast.setAttribute("aria-hidden", "false");
      toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
        toast.setAttribute("aria-hidden", "true");
      }, 3000);
    });
  });
}
