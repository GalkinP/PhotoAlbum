const React = require('react');
const Layout = require('./Layout');
const FormAlbum = require('./FormAlbum');

function AlbumMain({ title, albums }) {
  return (
    <Layout title={title}>
      <div className='card_student'>
        {albums && albums.map((album) => <FormAlbum album={album} />)}
      </div>
    </Layout>
  );
}

module.exports = AlbumMain;
