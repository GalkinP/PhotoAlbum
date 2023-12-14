const React = require('react');
const Layout = require('./Layout');
const FormAlbum = require('./FormAlbum');
const AddNewAlbum = require('./AddNewAlbum');

function AlbumMain({ title, albums, photos }) {
  return (
    <Layout title={title}>

      <AddNewAlbum />
      <div className='card_album'>
        {albums && albums.map((album) => <FormAlbum album={album} />)}

      </div>
    </Layout>
  );
}

module.exports = AlbumMain;
