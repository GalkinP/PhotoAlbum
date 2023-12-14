const React = require('react');
const PhotoEl = require('../components/PhotoEl');
const Layout = require('../components/Layout');

function AlbumEl({ album, user }) {
  return (
    <Layout>
      <div className='albumEl'>
        <h1>{album.title}</h1>
        {album.Photos.map((photo) => (
          <PhotoEl user={user} album={album} photo={photo} key={photo.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = AlbumEl;
