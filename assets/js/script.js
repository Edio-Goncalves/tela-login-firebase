const form = {
  email: () => document.querySelector("#email"),
  emailInvalidError: () => document.querySelector("#email-invalid-error"),
  emailRequiredError: () => document.querySelector("#email-required-error"),
  loginButton: () => document.querySelector("#login-button"),
  password: () => document.querySelector("#password"),
  passwordRequiredError: () =>
    document.querySelector("#password-required-error"),
  recoverPassword: () => document.querySelector("#recover-password-button"),
};

form.email().addEventListener("input", () => {
  onChangeEmail();
});

form.password().addEventListener("input", () => {
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
  let em = form.email().value;
  if (!em) {
    return false;
  }
  return validateEmail(em);
}

function toogleEmailErrors() {
  let email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  form.emailInvalidError().style.display = validateEmail(email)
    ? "none"
    : "block";
}

function tooglePassword() {
  let password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toogleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;
  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !passwordValid || !emailValid;
}

function isPasswordValid() {
  let pass = form.password().value;
  if (!pass) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
