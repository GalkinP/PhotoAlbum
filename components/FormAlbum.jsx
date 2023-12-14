const React = require('react');

function FormAlbum({ album }) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      {/* <img src={student.avatar} className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='card-title'>{album.title}</h5>
        <p className='card-text'>{album.count}</p>
        <p className='card-text'>{album.isOpen}</p>
        {/* <a href='#' className='btn btn-primary'>
          Go somewhere
        </a> */}
      </div>
    </div>
  );
}

module.exports = FormAlbum;
