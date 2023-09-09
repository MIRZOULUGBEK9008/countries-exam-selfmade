// ? Loader
document.addEventListener("load", () => {
  const elLoader = document.querySelector(".js-loader");
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none");
  }, 800);
});
