const form = document.getElementById("my-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

// const myForm = document.querySelector("#my-form")
// myForm.getElementById("h2")

form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkIfPasswordsMatch(password, confirmPassword);
  checkIfEmailValid(email);

  // if (username.value.trim() === "") {
  //   showError(username, "Username cannot be empty!");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value.trim() === "") {
  //   showError(email, "Email cannot be empty!");
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value.trim() === "") {
  //   showError(password, "Password cannot be empty!");
  // } else {
  //   showSuccess(password);
  // }

  // if (confirmPassword.value.trim() === "") {
  //   showError(confirmPassword, "Confirm password cannot be empty!");
  // } else {
  //   showSuccess(confirmPassword);
  // }
});

function checkIfEmailValid(el) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(el.value.trim())) {
    showSuccess(el);
  } else {
    showError(el, "Entered email is not valid.");
  }
}

function checkRequired(elementsArray) {
  for (let el of elementsArray) {
    if (el.value.trim() === "") {
      showError(el, "Input cannot be empty");
    } else {
      showSuccess(el);
    }
  }
}

function checkIfPasswordsMatch(el1, el2) {
  if (el1.value !== el2.value) {
    showError(el2, "Passwords do not match");
  }
}

function showError(element, message) {
  const formControl = element.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
