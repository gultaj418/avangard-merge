// $(function () {
// init the validator
// validator files are included in the download package
// otherwise download from http://1000hz.github.io/bootstrap-validator

// when the form is submitted
//   $("#serviceContact").on("submit", function (e) {
//     // if the validator does not prevent form submit
//     if (!e.isDefaultPrevented()) {
//       var url = "processors/serviceProcessor.php";

//       // POST values in the background the the script URL
//       $.ajax({
//         type: "POST",
//         url: url,
//         data: $(this).serialize(),
//         success: function (data) {
//           console.log("SUCUK SUCUK");
//           // data = JSON object that contact.php returns

//           // we recieve the type of the message: success x danger and apply it to the
//           var messageAlert = "alert-" + data.type;
//           var messageText = data.message;

//           // let's compose Bootstrap alert box HTML
//           var alertBox =
//             '<div class="alert ' +
//             messageAlert +
//             ' alert-dismissable">' +
//             messageText +
//             "</div>";

//           // If we have messageAlert and messageText
//           if (messageAlert && messageText) {
//             // inject the alert to .messages div in our form
//             document
//               .querySelector(".errorOrSuccessMessage")
//               .classList.add("visibleErrorMessage");
//             $("#serviceContact").find(".errorOrSuccessMessage").html(alertBox);
//             // empty the form
//             $("#serviceContact")[0].reset();
//           }
//         },
//       });
//       return false;
//     }
//   });
// });

const nav = document.getElementsByClassName("navbarSection")[0];
const x = window.matchMedia("(max-width: 768px)");

const headerContainer = document.querySelector("#headerContainer");
const headerHeight = headerContainer.offsetHeight;

const serviceMenuList = document.querySelector(".serviceMenu");

window.addEventListener("scroll", function () {
  if (window.scrollY >= headerHeight / 2) {
    if (!x.matches) {
      nav.classList.add("heavyBackground");
      //Servicemenu top 50 px olmalidi burda
      serviceMenuList.classList.add("openServiceMenuWhileNavFixed");
    } else {
      nav.classList.add("mobileHeavyBackground");
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

const serviceBtn = document.querySelector(".serviceBtn");
const serviceInp = document.querySelectorAll(".serviceInp");
const serviceForm = document.querySelector("#serviceContact");

serviceForm.addEventListener("submit", (e) => {
  for (i = 0; serviceInp.length > i; i++) {
    if (serviceInp[i].value === "") {
      serviceInp[i].classList.add("serv-alert");
    } else {
      serviceInp[i].classList.remove("serv-alert");
      console.log("submit");
    }
  }
  e.preventDefault();
});

var desktopBtn = document.querySelector("#searchIcon");
var mobileButton = document.querySelector("#searchIconMobile");
var modal = document.querySelector(".modal-bg");
var closeBtn = document.querySelector(".modal-close");

desktopBtn.addEventListener("click", function () {
  modal.classList.add("modal-active");
  document.body.style["overflow"] = "hidden";
});

mobileButton.addEventListener("click", function () {
  modal.classList.add("modal-active");
  document.body.style["overflow"] = "hidden";
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("modal-active");
  document.body.style["overflow"] = "auto";
});
