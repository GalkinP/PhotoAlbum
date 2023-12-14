const formDel = document.querySelector('.card_album');

if (formDel) {
  console.log(formDel);
  formDel.addEventListener('click', async (e) => {
    // находим кнопку в дом дереве на которую нажали
    if (e.target.classList.contains('btn-delete')) {
      console.log(e.target.classList.contains('btn-delete'));
      // от кнопки находим ближайшего родителя в дом дереве
      const card = e.target.closest('.card');
      // из дата атрибутов достаем id
      const { albumid } = card.dataset;
      // кидаем феч с инструкцией
      const res = await fetch(`/api/albumDelete/${albumid}`, {
        method: 'DELETE',
        // здесь мы с вами говорим и том, как общаемся, JSON
      });
      const data = await res.json();
      if (data.message === 'success') {
        // удаляем кнопку из дерева
        card.remove();
      }
    }
  });
}
