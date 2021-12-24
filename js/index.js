// FAQ SECTION ACCORDION
var acc = document.getElementsByClassName("questions");

gsap.registerPlugin(ScrollTrigger);
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activeQuestions");
  });
}
