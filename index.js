// burger button js

const showNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("menu-active");
  });
};

showNav();

const text = document.querySelector("#circleText a");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 9.5}deg)">${char}</span>`
  )
  .join("");
