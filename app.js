const mod = document.querySelector(".mod");
const previews = document.querySelectorAll(".cards img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    mod.classList.add("open");
    original.classList.remove("open");
    const originalSrc = preview.getAttribute("data-original");
    original.src = `/images/full/${originalSrc}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});
mod.addEventListener("click", (e) => {
  if (e.target.classList.contains("mod")) {
    mod.classList.remove("open");
    original.classList.remove("open");
  }
});
