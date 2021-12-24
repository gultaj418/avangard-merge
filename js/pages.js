// Fixed Nav
let nav = document.getElementsByClassName("navbarSection")[0];
let x = window.matchMedia("(max-width: 1150px)");

let headerContainer = document.querySelector("#headerContainer");
let headerHeight = headerContainer.offsetHeight;
let serviceMenuList = document.querySelector(".serviceMenu");

window.addEventListener("scroll", function () {
  if (window.scrollY >= headerHeight / 2) {
    if (!x.matches) {
      nav.classList.add("heavyBackground");
      //Servicemenu top 50 px olmalidi burda
      serviceMenuList.classList.add("openServiceMenuWhileNavFixed");
    } else {
      nav.classList.remove("mobileHeavyBackground");
    }
  } else if (window.scrollY < headerHeight / 2) {
    if (!x.matches) {
      nav.classList.remove("heavyBackground");
      serviceMenuList.classList.remove("openServiceMenuWhileNavFixed");
    } else {
      nav.classList.remove("mobileHeavyBackground");
      //Servicemenu top 30 px olmalidi burda
    }
  }
});
