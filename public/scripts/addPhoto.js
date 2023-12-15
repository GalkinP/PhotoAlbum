const formAddPhoto = document.querySelector('.formAddPhoto');

if (formAddPhoto) {
  formAddPhoto.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('I love beer');
    const { title, img, description } = event.target;
    const albumid = formAddPhoto.dataset
    console.log(albumid.id, "))))");

    try {
      const res = await fetch(`/api/photo/${albumid.id}`, {
        method: 'POST',
        // здесь мы с вами говорим и том, как общаемся, JSON
        headers: {
          'Content-type': 'application/json',
        },
        // положили все в одну коробчку, которая скрыта от глаз посторонних пользователей
        body: JSON.stringify({
          title: title.value,
          img: img.value,
          description: description.value,
          albumID: albumid.id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'success') {
        // очищает форму
        formAddPhoto.reset();
        const tttt = document.querySelector('.albumEl');
        console.log(tttt, 'uhuhuh');
        document
          // находим див, куда хотим добавить карточку
          .querySelector('.albumEl')
          // добавляет карточку в конец нашего дива, который мы нашли выше
          .insertAdjacentHTML('beforeend', data.html);
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}
