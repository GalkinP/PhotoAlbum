const React = require('react');

function AddNewAlbum({ album }) {
  return (
    <div>
      <form className='formAddAlbum'>
        <input type='text' name='title' />
        <button type='sumbit'>Новый АЛЬБОМ</button>
      </form>
    </div>
  );
}

module.exports = AddNewAlbum;
