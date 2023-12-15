const React = require('react');

function AddNewAlbum({ album }) {
  return (
    <div>
      {/* <form className='formAddAlbum'>
        <input type='text' name='title' />
        <button type='sumbit'>Новый АЛЬБОМ</button>
      </form> */}
      <form
        className='formAddAlbum'
        style={{
          width: '50%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div class='mb-3'>
          <label for='exampleInputEmail1' class='form-label'>
            Title
          </label>
          <input
            type='email'
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <button type='submit' class='btn btn-primary'>
          Добавить альбом
        </button>
      </form>
    </div>
  );
}

module.exports = AddNewAlbum;
