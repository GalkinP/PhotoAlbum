const React = require('react');

function FormPhoto({ photo , album}) {
  return (
    <div>
      <form className='formAddPhoto' data-id={album.id}>
        <input type='text' name='title' />
        <input type='text' name='img' />
        <input type='text' name='description' />
        <button type='sumbit'>Новое фото</button>
      </form>
    </div>
  );
}

module.exports = FormPhoto;
