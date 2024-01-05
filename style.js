// Sidebar Menyu THrough javascript

let togglebtn = document.querySelector(".toggle-btn");
let sidebar = document.querySelector(".sidebar");

togglebtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("jghjg");

  sidebar.classList.toggle("active");
});

// SCroll Top button by javascript

let myBtn = document.querySelector("#myBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};
myBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navbar Sign up and login Forms by javascript

let signbtn = document.querySelector(".sign-btn");
let loginbtn = document.querySelector(".log-btn");
let signupForm = document.querySelector(".form-signup");
let loginForm = document.querySelector(".form-login");
let seemorebtn = document.querySelector(".btn-see-more");
let moreCourses = document.querySelector(".skill2");
let moreCourses1 = document.querySelector(".skill3");

const signuphandler = () => {
  signupForm.classList.toggle("show-form");
  loginForm.classList.remove("show-form");
};

const loginhandler = () => {
  loginForm.classList.toggle("show-form");
  signupForm.classList.remove("show-form");
};

loginbtn.addEventListener("click", loginhandler);
signbtn.addEventListener("click", signuphandler);

// Courses SeeMore Button by javascript

const seemoreeventhandler = () => {
  moreCourses.classList.toggle("show-courses");
  moreCourses1.classList.toggle("show-courses");
  if (
    moreCourses.classList.contains("show-courses") &&
    moreCourses1.classList.contains("show-courses")
  ) {
    seemorebtn.innerText = "See Less";
  } else {
    seemorebtn.innerText = "See More";
  }
};
seemorebtn.addEventListener("click", seemoreeventhandler);

// Captcha By javascript

let revewbtn = document.querySelector(".captcha-btn");
let captchabox = document.querySelector("#captcha");
let submitCaptchaBtn = document.querySelector(".submit-captcha");
let InputCaptcha = document.querySelector(".portal-captcha");

let captchavalue = "";
const generateCaptcha = () => {
  let valuees = btoa(Math.random() * 1000000000);
  valuees = valuees.substring(0, 5 + Math.random() * 5);
  captchavalue = valuees;
  console.log(captchavalue);
};
const setCaptcha = () => {
  let val = captchavalue
    .split(" ")
    .map((char) => {
      return ` <p id="captcha">${char}</p>`;
    })
    .join();
  captchabox.innerHTML = val;
};

function inputcaptcha() {
  revewbtn.addEventListener("click", function () {
    generateCaptcha();
    setCaptcha();
  });
  generateCaptcha();
  setCaptcha();
}
inputcaptcha();

submitCaptchaBtn.addEventListener("click", function () {
  let ourvalue = InputCaptcha.value;

  ourvalue.toString();
  //   console.log(ourvalue);
  if (ourvalue === captchavalue) {
    alert("You Are Not A Robot");
  } else {
    alert("invalid");
  }
});

// FAQ'S by javascript

let questions = document.querySelectorAll(".question-answers");
let answers = document.querySelectorAll(".simple-ans");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    answers[i].classList.toggle("answer-show");
  });
}
