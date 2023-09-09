const setLoader = (bool) => {
  const elLoader = document.querySelector(".js-loader");
  if (!bool) {
    setTimeout(() => {
      elLoader.classList.add("loader-wrapper--none");
    }, 500);
  } else {
    elLoader.classList.remove("loader-wrapper--none");
  }
};

export default setLoader;