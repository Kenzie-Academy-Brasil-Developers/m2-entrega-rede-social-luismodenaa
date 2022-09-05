import { Requests } from "../requests.js";
import { Toast } from "../toast.js";
import { FollowUsers } from "./followUsers.js";
import { ListingPosts } from "./listingPosts.js";
import { PublicPost } from "./publicPost.js";

export class Homepage {
  static async homepageToken() {
    const token = localStorage.getItem("@redeKenzie:token");
    if (!token) {
      setTimeout(() => {
        Toast.create("Você não está logado", "white", "#9E0000");
      }, 500);
      setTimeout(() => {
        window.location.replace("/index.html");
      }, 2000);
    }
  }

  static async renderPosts() {
    const posts = await Requests.renderAllPosts();
    posts.reverse().forEach((post) => {
      ListingPosts.renderCards(post);
    });
  }

  static async logout() {
    const btnLogout = document.querySelector("#btnLogout");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        localStorage.removeItem("@redeKenzie:token");
        localStorage.removeItem("@redeKenzie:userId");
        setTimeout(() => {
          Toast.create("Usuário desconectado", "white", "#9E0000");
        }, 1500);
        setTimeout(() => {
          window.location.replace("/index.html");
        }, 4000);
      });
    }
  }

  static async renderProfile() {
    const user = await Requests.getUserNameImg();

    ListingPosts.profile(user);
  }
}

Homepage.renderProfile();
Homepage.homepageToken();
Homepage.logout();
Homepage.renderPosts();
PublicPost.createPost();
Requests.getUserNameImg();
FollowUsers.randomUsers();
