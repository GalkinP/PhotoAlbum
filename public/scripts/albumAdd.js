const formAddAlbum = document.querySelector(".formAddAlbum");

if (formAddAlbum) {
  formAddAlbum.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("script");
    const { title } = event.target;
    try {
      const res = await fetch("/api/", {
        method: "POST",
        // здесь мы с вами говорим и том, как общаемся, JSON
        headers: {
          "Content-type": "application/json",
        },
        // положили все в одну коробчку, которая скрыта от глаз посторонних пользователей
        body: JSON.stringify({
          title: title.value,
          count: 0,
          isOpen: true,
          
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === "success") {
        // очищает форму
        formAddAlbum.reset();
        const ttt =document.querySelector('.card_album')
        console.log(ttt, "uhuhuh")
        document
          // находим див, куда хотим добавить карточку
          .querySelector('.card_album')
          // добавляет карточку в конец нашего дива, который мы нашли выше
          .insertAdjacentHTML("beforeend", data.html);
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}
