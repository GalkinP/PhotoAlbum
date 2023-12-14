const React = require('react');
const Layout = require('./Layout');
const FormAlbum = require('./FormAlbum');

function AlbumMain({ title, albums, photos }) {
  return (
    <Layout title={title}>
      <div className='card_student'>
        {albums && albums.map((album) => <FormAlbum album={album} photos={photos} />)}
      </div>
    </Layout>
  );
}

module.exports = AlbumMain;
