const React = require('react');

function FormPhoto({ album }) {
  return (
    <div>
      <form className='formAddAlbum'>
        <input type='text' name='title' />
        <input type='text' name='title' />
        <input type='text' name='title' />
        <button type='sumbit'>Новый АЛЬБОМ</button>
      </form>
    </div>
  );
}

module.exports =  FormPhoto;