const React = require('react');
const PhotoEl = require('../components/PhotoEl');
const Layout = require('../components/Layout');
const AddnewPhoto = require('./AddNewPhoto');

function AlbumEl({ album, user }) {
  return (
    <Layout>
      <div className='albumEl'>
        <AddnewPhoto album={album}/>
        <h1>{album.title}</h1>
        {album.Photos.map((photo) => (
          <PhotoEl user={user} album={album} photo={photo} key={photo.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = AlbumEl;
