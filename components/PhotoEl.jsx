const React = require('react');

function PhotoEl({ photo, album, user }) {
  return (
    <div className='photoEl' data-id={photo.id}>
      <div
        className='img'
        style={{
          width: '300px',
          height: '200px',
          // backgroundImage: `url(${photo.img})`,
        }}
      >
        <img src={photo.img} style={{ width: '300px' }} alt='' />
        <div className='like' data-id={photo.id}>
          <button type='submit' >♡</button>
          {/* <p>{likes.length}</p> */}
        </div>
      </div>
      <h3>{photo.title}</h3>
      <h3>{photo.description}</h3>
      {user && user.id === album.userID && (
        <div className='photoButtons'>
          <button type='submit' className='delPhotoBtn'>
            удалить
          </button>
          <button type='submit' className='updatePhotoBtn'>
            изменить
          </button>
        </div>
      )}
    </div>
  );
}

module.exports = PhotoEl;
