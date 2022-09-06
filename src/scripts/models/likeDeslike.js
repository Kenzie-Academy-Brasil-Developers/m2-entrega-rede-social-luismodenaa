import { Requests } from "../requests.js";

export class LikeDeslike {
  static posts = [];
  static likeOrDeslike() {
    const card = document.querySelectorAll(".cards-posts");
    const btn = document.querySelectorAll(".button-like");

    this.posts.forEach((post) => {
      const { uuid, likes } = post;

      likes.forEach((user) => {
        const userId = localStorage.getItem("@redeKenzie:userId");
        if (user.user.uuid == user_uuidLocal) {
          card.forEach((cards) => {
            const idCards = cards.id;

            if (uuid == idCards) {
              const btn = cards.querySelector(".button-like");
              btn.src = "../assets/heartRed.png";
              btn.id = `${user.uuid}`;
            }
          });
        }
      });
    });

    btn.forEach((button) => {
      button.addEventListener("click", async () => {
        const idPost = button.closest("li").id;
        const likes = button
          .closest(".container-btn-likes")
          .querySelector(".number-likes");
        let totalLikes = +likes.innerText;

        const data = {
          post_uuid: idPost,
        };

        if (button.classList.contains("liked")) {
          button.classList.remove("liked");
          button.classList.add("button-liked");
          const likeId = button.id;
          likes.innerText = `${totalLikes - 1}`;
          button.removeAttribute("id");
          Requests.removeLike(likeId);
        } else {
          button.classList.remove("button-liked");
          button.classList.add("liked");
          likes.innerText = `${totalLikes + 1}`;
          const request = await Requests.addLike(data);

          const likeId = request.data.uuid;
          button.id = likeId;
        }
      });
    });
  }
}
