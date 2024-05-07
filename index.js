console.clear(); // clear eventually all scripts, loaded by browsers Default

const mainElement = document.querySelector('[data-js="main"]');

const button = document.querySelector('[data-js="addBtn"]');
button.addEventListener("click", () => {
  console.log("dark");
});
