const React = require('react');
const photo = require('../db/models/photo');

function FormAlbum({ album , photos}) {
 const count = photos.filter(photo => photo.albumID===album.id).length
  return (
    <div className='card' style={{ width: '18rem' }} data-albumid={album.id}>
      <a href=''>
        <img src='#' className='card-img-top' alt='...' />
      </a>
      <div className='card-body'>
        <h5 className='card-title'>{album.title}</h5>
        <p className='card-text'>{`В АЛЬБОМЕ: ${count}`}</p>
        <p className='card-text'>{album.isOpen}</p>
        <a href='#' className='btn btn-primary'>
          изменить
        </a>
        <button href='#' className='btn btn-delete'>
          {' '}
          удалить
        </button>
      </div>
    </div>
  );
}
// lol

module.exports = FormAlbum;
