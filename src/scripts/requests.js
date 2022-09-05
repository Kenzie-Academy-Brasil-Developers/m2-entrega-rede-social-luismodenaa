import { instance, instanceLogin, instanceRegister } from "./axios.js";
import { Toast } from "./toast.js";

export class Requests {
  static userId = localStorage.getItem("@redeKenzie:userId");
  static async login(data) {
    const userLogin = await instanceLogin
      .post("/users/login/", data)
      .then((res) => {
        localStorage.setItem("@redeKenzie:token", res.data.token);
        localStorage.setItem("@redeKenzie:userId", res.data.user_uuid);
        Toast.create("Login realizado com sucesso", "white", "#006D00");
        setTimeout(() => {
          window.location.replace("src/pages/homepage.html");
        }, 2500);
      })
      .catch((err) => {
        Toast.create("⚠️ Usuário invalido", "white", "#9E0000");
      });

    return userLogin;
  }

  static async register(data) {
    const userRegister = await instanceRegister
      .post("users/", data)
      .then(async (res) => {
        Toast.create("Cadastro realizado com sucesso", "white", "#006D00");
        const newData = {
          email: res.data.email,
          password: data.password,
        };
        await Requests.login(newData);
      })
      .catch((err) => {
        Toast.create(
          "⚠️ Verifique se seus dados estão corretos",
          "white",
          "#9E0000"
        );
        console.log(err);
      });
    return userRegister;
  }

  static async pages() {
    const pages = await instance
      .get("/posts/")
      .then((res) => {
        console.log(res);
        return res.data.count;
      })
      .catch((err) => console.log(err));

    Requests.renderAllPosts(pages);
    console.log(pages);
    return pages;
  }

  static async renderAllPosts(pages) {
    const posts = await instance
      .get(`/posts/?limit=10&offset=${pages}`)
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

    return posts;
  }

  static async createPost(data) {
    const post = await instance
      .post(`/posts/`, data)
      .then((res) => {
        Toast.create("Comentário publicado", "white", "#006D00");
        console.log(res);
        return res;
      })
      .catch((err) => {
        Toast.create("⚠️ Ocorreu um erro, tente novamente", "white", "#9E0000");
        console.log(err);
      });
    return post;
  }

  static async getUserNameImg() {
    const profile = await instance
      .get(`users/${Requests.userId}/`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return profile;
  }

  static async allUsers() {
    const users = await instance
      .get(`/users/?limit=300&offset=300/`)
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

    return users;
  }

  static async following(data) {
    const follow = await instance
      .post(`/users/follow/`, data)
      .then((res) => res)
      .catch((err) => console.log(err));
    return follow;
  }

  static async unfollow(data) {
    const unfollow = await instance
      .delete(`/users/unfollow/${data}`)
      .then((res) => res)
      .catch((err) => err);
    return unfollow;
  }

  static async addLike() {
    const like = await instance
      .post(`/likes/`)
      .res((res) => res)
      .catch((err) => console.log(err));

    return like;
  }

  static async removeLike(data) {
    const like = await instance
      .delete(`/likes/${data}/`)
      .res((res) => res)
      .catch((err) => console.log(err));
  }
}

Requests.pages();
