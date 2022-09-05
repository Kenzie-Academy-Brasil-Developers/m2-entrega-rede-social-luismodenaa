export class Toast {
  static create(text, color, bgColor) {
    Toastify({
      text: text,
      duration: 4000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        "border-radius": "10px",
        color: color,
        background: bgColor,
        display: "flex",
        "align-itens": "center",
        padding: "20px",
      },
    }).showToast();
  }
}
