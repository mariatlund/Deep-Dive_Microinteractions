// BURGER MENU

const showNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("menu-active");
  });
};

showNav();

// PRELOADER

document.querySelector(".preload-container").classList.add("hidden");
document.querySelector(".preload-button").addEventListener("click", () => {
  pageLoad();
});

function pageLoad() {
  // document.querySelector(".preload-button").remove();
  document.querySelector(".preload-container").classList.remove("hidden");
  document
    .querySelector(".preload-container")
    .classList.add("preloader-active");
}
