const form = document.querySelector("#form"),
  username = document.querySelector("#username"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  passwordConfirmation = document.querySelector("#password-confirmation");
form.addEventListener("submit", (a) => {
  a.preventDefault(), checkInputs();
});
function checkInputs() {
  const a = username.value,
    b = email.value,
    c = password.value,
    d = passwordConfirmation.value;
  "" === a
    ? setErrorFor(username, "O nome de usu\xE1rio \xE9 obrigat\xF3rio.")
    : setSuccessFor(username),
    "" === b
      ? setErrorFor(email, "O email \xE9 obrigat\xF3rio.")
      : checkEmail(b)
      ? setSuccessFor(email)
      : setErrorFor(email, "Por favor, insira um email v\xE1lido."),
    "" === c
      ? setErrorFor(password, "A senha \xE9 obrigat\xF3ria.")
      : 7 > c.length
      ? setErrorFor(password, "A senha precisa ter no m\xEDnimo 7 caracteres.")
      : setSuccessFor(password),
    "" === d
      ? setErrorFor(
          passwordConfirmation,
          "A confirma\xE7\xE3o de senha \xE9 obrigat\xF3ria."
        )
      : d === c
      ? setSuccessFor(passwordConfirmation)
      : setErrorFor(passwordConfirmation, "As senhas n\xE3o conferem.");
  const e = form.querySelectorAll(".form-control"),
    f = [...e].every((a) => "form-control success" === a.className);
  f && alert("Conta criada com sucesso!");
}
function setErrorFor(a, b) {
  const c = a.parentElement,
    d = c.querySelector("small");
  (d.innerText = b), (c.className = "form-control error");
}
function setSuccessFor(a) {
  const b = a.parentElement;
  b.className = "form-control success";
}
function checkEmail(a) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    a
  );
}
