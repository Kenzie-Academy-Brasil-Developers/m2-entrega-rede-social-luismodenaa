import { Modals } from "./models/modal.js";
import { Requests } from "./requests.js";
import { Toast } from "./toast.js";

class Index {
  static renderIndex() {
    const token = localStorage.getItem("@redeKenzie:token");
    if (token) {
      setTimeout(() => {
        Toast.create(
          "Você já está logado, estamos te redirecionando a página inicial",
          "white",
          "#006D00"
        );
      }, 1500);
      setTimeout(() => {
        window.location.replace("/src/pages/homepage.html");
      }, 5000);
    }
  }

  static showLoginModal() {
    const btnLogin = document.querySelector(".open-modallogin");
    const btnLoginHeader = document.querySelector(".btnHeaderLogin");

    btnLogin.addEventListener("click", (event) => {
      event.preventDefault();
      const newModalLogin = Modals.loginForm();
      Modals.templateModals(newModalLogin);
      Index.closeModal();
      Index.handleLogin();
    });

    btnLoginHeader.addEventListener("click", (event) => {
      event.preventDefault();
      const newModalLogin = Modals.loginForm();
      Modals.templateModals(newModalLogin);
      Index.closeModal();
      Index.handleLogin();
    });
  }

  static showRegisterModal() {
    const btnRegister = document.querySelector(".open-modalregister");
    const btnRegisterHeader = document.querySelector(".btnHeaderRegister");

    btnRegister.addEventListener("click", (event) => {
      event.preventDefault();
      const newModalRegister = Modals.registerForm();
      Modals.templateModals(newModalRegister);
      Index.closeModal();
      Index.handleRegister();
    });

    btnRegisterHeader.addEventListener("click", (event) => {
      event.preventDefault();
      const newModalRegister = Modals.registerForm();
      Modals.templateModals(newModalRegister);
      Index.closeModal();
      Index.handleRegister();
    });
  }

  static closeModal() {
    const closeModalBtn = document.querySelector(".closeModal");

    closeModalBtn.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.classList.add("hidden");
      modal.remove();
    });
  }

  static handleLogin() {
    const emailInput = document.querySelector(".email-login");
    const passwordInput = document.querySelector(".password-login");
    const btn = document.querySelector(".btn-login");

    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      const login = await Requests.login(data);
    });
  }

  static handleRegister() {
    const usernameInput = document.querySelector(".username-register");
    const emailInput = document.querySelector(".email-register");
    const passwordInput = document.querySelector(".password-register");
    const jobInput = document.querySelector(".job-register");
    const imgInput = document.querySelector(".img-register");
    const btn = document.querySelector(".btn-register");

    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        work_at: jobInput.value,
        image: imgInput.value,
      };

      const register = await Requests.register(data);
    });
  }
}

Index.showLoginModal();
Index.showRegisterModal();
Index.renderIndex();
