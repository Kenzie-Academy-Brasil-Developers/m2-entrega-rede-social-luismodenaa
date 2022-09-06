import { Modals } from "./modal.js";

export class ListingPosts {
  static ul = document.querySelector(".posts-ul");

  static renderCards(post) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const divContent = document.createElement("div");
    const h3Title = document.createElement("h3");
    const pDesc = document.createElement("p");
    const divBtnLike = document.createElement("div");
    const button = document.createElement("button");
    const imgHeart = document.createElement("img");
    const span = document.createElement("span");

    li.className = "cards-posts";
    li.id = post.uuid;
    // console.log(post.uuid);
    // console.log(post);

    img.className = "img-homepage";
    img.id = "users-img-posts";
    img.src = post.author.image;

    div.className = "usersPosts";

    h3.className = "username-posts";
    h3.innerText = post.author.username;

    p.className = "userjob-posts";
    p.innerText = post.author.work_at;

    divContent.className = "container-posts";

    h3Title.className = "title-posts";
    h3Title.innerText = post.title;

    pDesc.className = "desc-posts";
    pDesc.innerText = post.description;

    divBtnLike.className = "container-btn-likes";

    button.className = "btn-open-post";
    button.innerText = "Abrir Post";

    imgHeart.src = "../assets/heartBlack.png";
    imgHeart.className = "button-like";

    span.className = "number-likes";
    span.innerText = post.likes.length;

    this.ul.append(li);
    li.append(img, div, divContent, divBtnLike);
    div.append(h3, p);
    divContent.append(h3Title, pDesc);
    divBtnLike.append(button, imgHeart, span);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      const posft = post;
      Modals.modalPost(posft);
    });
  }

  static async profile(dados) {
    const img = document.querySelector("#userImg-submit");
    const name = document.querySelector("#username-submit");
    const follows = document.getElementById("user-follows");
    const job = document.querySelector("#userJob");

    img.src = dados.image;
    name.innerText = dados.username;
    follows.innerText = `${dados.following_amount}seguidores`;
    job.innerText = dados.work_at;
  }
}
