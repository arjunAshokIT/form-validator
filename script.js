const form = document.getElementById("my-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value.trim() === "") {
    showError(username, "Username cannot be empty!");
  } else {
    showSuccess(username);
  }

  if (email.value.trim() === "") {
    showError(email, "Email cannot be empty!");
  } else {
    showSuccess(email);
  }

  if (password.value.trim() === "") {
    showError(password, "Password cannot be empty!");
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Confirm password cannot be empty!");
  } else {
    showSuccess(confirmPassword);
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
