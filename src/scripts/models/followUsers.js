import { Requests } from "../requests.js";

export class FollowUsers {
  static ul = document.querySelector(".follow-ul");

  static async randomUsers() {
    const users = await Requests.allUsers();
    const arrUsers = users;
    const list = [];

    for (let i = 0; i < 50; i++) {
      let random = Math.round(Math.random() * (arrUsers.length - 1 + 0));
      if (!list.includes(random)) {
        let user = arrUsers[random];
        list.push(random);
        const renderCard = this.cardUsers(user);
        this.ul.append(renderCard);
      } else {
        i--;
      }
    }
    this.userFollowUnfollow();
  }

  static cardUsers(data) {
    const { uuid, username, work_at, image, followers } = data;
    const userId = localStorage.getItem("@redeKenzie:userId");

    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");

    li.className = "cards-follow";
    li.id = uuid;

    img.className = "img-homepage";
    img.id = "users-img-follow";
    img.src = data.image;

    div.className = "usersFollow";

    h3.className = "usersname-follow";
    h3.innerText = data.username;

    p.className = "jobusers-follow";
    p.innerText = data.work_at;

    button.className = "btn-follow";
    button.innerText = "Seguir";

    li.append(img, div, button);
    div.append(h3, p);

    if (followers.length > 0) {
      followers.forEach((follow) => {
        if (follow.followers_users_id.uuid == userId) {
          button.id = follow.uuid;
          button.innerText = "Seguindo";
          button.classList.add("btn--following");
        }
      });
    }

    return li;
  }

  static userFollowUnfollow() {
    const btnFollow = document.querySelectorAll(".btn-follow");

    btnFollow.forEach((btn) => {
      btn.addEventListener("click", async (event) => {
        event.preventDefault();

        const idFollow = btn.id;
        btn.classList.add("btn--following");

        if (!idFollow) {
          const idUser = btn.closest("li").id;
          const user = {
            following_users_uuid: idUser,
          };

          const following = Requests.following(user);
          btn.id = following.uuid;
          btn.innerText = "Seguindo";
        } else {
          const idUser = btn.closest("li").id;

          const unfollow = Requests.unfollow(idUser);
          btn.innerText = "Seguir";
          btn.removeAttribute("id");
          btn.classList.remove("btn--following");
        }
      });
    });
  }
}
