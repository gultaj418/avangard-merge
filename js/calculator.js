const calcInputs = document.querySelectorAll(".calcInputs");
const calcBtn = document.querySelector("#calcBtn");
const alertBox = document.querySelector(".alert-box");

//Calculate the calculator
calcBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 380,
    behavior: "smooth",
  });

  for (i = 0; calcInputs.length > i; i++) {
    if (calcInputs[i].value === "") {
      calcInputs[i].classList.add("alert-message");
      alertBox.classList.add("active");
    } else {
      calcInputs[i].classList.remove("alert-message");
      alertBox.classList.remove("active");
    }
  }
});
