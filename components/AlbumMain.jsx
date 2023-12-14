const React = require('react');
const Layout = require('./Layout');
const FormAlbum = require('./FormAlbum');
const AddNewAlbum = require('./AddNewAlbum');

function AlbumMain({ user, title, albums, photos }) {
  return (
    <Layout title={title}>
<p>{user.name}</p>
      <AddNewAlbum />
      <div className='card_album'>
        {albums && albums.map((album) => <FormAlbum album={album} photos={photos}/>)}

      </div>
    </Layout>
  );
}

module.exports = AlbumMain;
