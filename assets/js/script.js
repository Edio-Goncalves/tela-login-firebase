const form = {
  email: () => document.querySelector("#email"),
  emailInvalidError: () => document.querySelector("#email-invalid-error"),
  emailRequiredError: () => document.querySelector("#email-required-error"),
  loginButton: () => document.querySelector("#login-button"),
  password: () => document.querySelector("#password"),
  passwordRequiredError: () =>
    document.querySelector("#password-required-error"),
  recoverPassword: () => document.querySelector("#recover-password-button"),
  register: () => document.querySelector("#register"),
};

/* Executa funções relacionado ao campo de email */
form.email().addEventListener("input", () => {
  onChangeEmail();
});

function onChangeEmail() {
  toogleEmailErrors();
  toogleButtonsDisable();
}

/* Executa funções relacionado ao campo de password */
form.password().addEventListener("input", () => {
  onChangePassword();
});

function onChangePassword() {
  toogleButtonsDisable();
  tooglePassword();
}

/* valida email */
function isEmailValid() {
  let em = form.email().value;
  if (!em) {
    return false;
  }
  return validateEmail(em);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* valida senha */
function isPasswordValid() {
  let pass = form.password().value;
  if (!pass) {
    return false;
  }
  return true;
}

/* abilita ou desabilita botoes */
function toogleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;
  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !passwordValid || !emailValid;
}

/* funções de erro */
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

/* função para redirecionamento login e registro*/
form.loginButton().addEventListener("click", () => {
  login();
});
form.register().addEventListener("click", () => {
  register();
});

/* integra auth aos botoes e qualifica sucesso ou erro */
function login() {
  firebase
    .auth()
    .signInWithEmailAndPassword(form.email().value, form.password().value)
    .then((response) => {
      window.location.href = "pages/home.html";
    })
    .catch((error) => {
      getErrorMessage(error);
      // console.log("error", error);
    });
}

function getErrorMessage(error) {
  if (error.code === "auth/invalid-credential") {
    alert("Usuário não encontrado");
  }
}

function register() {
  window.location.href = "pages/register.html";
}
