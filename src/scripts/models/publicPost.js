import { Requests } from "../requests.js";

export class PublicPost {
  static createPost() {
    const inputTitle = document.querySelector("#inputTitle");
    const inputDesc = document.querySelector("#inputPost");
    const btnPost = document.querySelector("#btnSubmitPost");

    btnPost.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        description: inputDesc.value,
        title: inputTitle.value,
      };

      const posting = await Requests.createPost(data);
    });
  }
}
