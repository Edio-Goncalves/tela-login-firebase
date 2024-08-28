let emailField = document.querySelector("#email");
let passwordField = document.querySelector("#password");
let recoverPassword = document.querySelector("#recover-password-button");
let loginButton = document.querySelector("#login-button");

emailField.addEventListener("input", () => {
  validateField(emailField);
});
passwordField.addEventListener("input", () => {
  validateField(passwordField);
});

function validateField() {
  const emailValid = isEmailValid();
  recoverPassword.disabled = !emailValid;
  const passwordValid = isPasswordValid();
  loginButton.disabled = !passwordValid || !emailValid;
}

function isEmailValid() {
  let em = emailField.value;
  if (!em) {
    return false;
  }
  return validateEmail(em);
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
