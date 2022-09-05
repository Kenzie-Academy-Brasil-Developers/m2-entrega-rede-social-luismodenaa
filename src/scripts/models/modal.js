export class Modals {
  static templateModals(form) {
    const modal = document.createElement("div");
    const body = document.querySelector("body");
    modal.className = "modal";

    modal.append(form);
    body.append(modal);
  }

  static loginForm() {
    const div = document.createElement("div");
    const form = document.createElement("form");
    const divTop = document.createElement("div");
    const h3 = document.createElement("h3");
    const aClose = document.createElement("a");
    const inputEmail = document.createElement("input");
    const inputPassword = document.createElement("input");
    const button = document.createElement("button");
    const p = document.createElement("p");
    const a = document.createElement("a");

    div.className = "modal-login";

    form.className = "form-login";

    h3.innerText = "Login";

    aClose.innerText = "X";
    aClose.href = "#";
    aClose.className = "closeModal";

    inputEmail.type = "email";
    inputEmail.placeholder = "Seu e-mail";
    inputEmail.className = "input email-login";

    inputPassword.type = "password";
    inputPassword.placeholder = "Sua senha";
    inputPassword.className = "input password-login";

    button.type = "submit";
    button.className = "btnIndex btn-login";
    button.innerText = "Entrar";

    p.innerText = "Ainda não possui cadastro?";

    a.innerText = "Clique aqui!";
    a.href = "#";

    divTop.append(h3, aClose);
    form.append(divTop, inputEmail, inputPassword, button, p);
    p.append(a);
    div.append(form);

    return div;
  }

  static registerForm() {
    const div = document.createElement("div");
    const form = document.createElement("form");
    const divTop = document.createElement("div");
    const h3 = document.createElement("h3");
    const aClose = document.createElement("a");
    const inputUsername = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputPassword = document.createElement("input");
    const inputJob = document.createElement("input");
    const inputImg = document.createElement("input");
    const button = document.createElement("button");
    const p = document.createElement("p");
    const a = document.createElement("a");

    div.className = "modal-register";

    form.className = "form-register";

    h3.innerText = "Cadastro";

    aClose.innerText = "X";
    aClose.href = "#";
    aClose.className = "closeModal";

    inputUsername.type = "text";
    inputUsername.className = "input username-register";
    inputUsername.placeholder = "Seu nome";

    inputEmail.type = "email";
    inputEmail.className = "input email-register";
    inputEmail.placeholder = "Seu e-mail";

    inputPassword.type = "password";
    inputPassword.className = "input password-register";
    inputPassword.placeholder = "Sua senha";

    inputJob.type = "text";
    inputJob.className = "input job-register";
    inputJob.placeholder = "Qual o seu trabalho?";

    inputImg.type = "text";
    inputImg.className = "input img-register";
    inputImg.placeholder = "URL da imagem de perfil";

    button.type = "submit";
    button.className = "btnIndex btn-register";
    button.innerText = "Registrar";

    p.innerText = "Já possui um cadastro?";

    a.innerText = "Clique aqui!";
    a.href = "#";

    divTop.append(h3, aClose);
    form.append(
      divTop,
      inputUsername,
      inputEmail,
      inputPassword,
      inputJob,
      inputImg,
      button,
      p
    );
    p.append(a);
    div.append(form);

    return div;
  }
}
