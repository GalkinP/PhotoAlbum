const React = require('react');
const Layout = require('./Layout');
const FormAlbum = require('./FormAlbum');
const AddNewAlbum = require('./AddNewAlbum');

function AlbumMain({ user, title, albums, photos }) {
  return (
    <Layout title={title}>
      <p style={{ display: 'flex', justifyContent: 'center' }}>{user.name}</p>
      <AddNewAlbum />

      <div
        className='card_album'
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {albums &&
          albums.map((album) => (
            <FormAlbum user={user} album={album} photos={photos} />
          ))}
      </div>
    </Layout>
  );
}

module.exports = AlbumMain;
