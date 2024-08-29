let emailField = document.querySelector("#email");
let passwordField = document.querySelector("#password");
let recoverPassword = document.querySelector("#recover-password-button");
let loginButton = document.querySelector("#login-button");

emailField.addEventListener("input", () => {
  onChangeEmail();
});
passwordField.addEventListener("input", () => {
  onChangePassword();
});

function onChangeEmail() {
  toogleEmailErrors();
  toogleButtonsDisable();
}

function onChangePassword() {
  toogleButtonsDisable();
  tooglePassword();
}

function isEmailValid() {
  let em = emailField.value;
  if (!em) {
    return false;
  }
  return validateEmail(em);
}

function toogleEmailErrors() {
  let email = emailField.value;
  if (!email) {
    document.querySelector("#email-required-error").style = "display:block";
  } else {
    document.querySelector("#email-required-error").style = "display:none";
  }

  if (validateEmail(email)) {
    document.querySelector("#email-invalid-error").style.display = "none";
  } else {
    document.querySelector("#email-invalid-error").style.display = "block";
  }
}

function tooglePassword() {
  let password = passwordField.value;
  if (!password) {
    document.querySelector("#password-required-error").style.display = "block";
  } else {
    document.querySelector("#password-required-error").style.display = "none";
  }
}

function toogleButtonsDisable() {
  const emailValid = isEmailValid();
  recoverPassword.disabled = !emailValid;
  const passwordValid = isPasswordValid();
  loginButton.disabled = !passwordValid || !emailValid;
}

function isPasswordValid() {
  let pass = passwordField.value;
  if (!pass) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
