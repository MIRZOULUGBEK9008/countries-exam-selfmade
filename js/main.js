// ? Loader
import setLoader from "./loader.js";
import "./theme.js";
document.addEventListener("DOMContentLoaded", () => {
  setLoader(false);
  const theme = localStorage.getItem("theme");
  document.body.classList.add(theme ? theme : "");
});
