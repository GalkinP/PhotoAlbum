const React = require("react");
const PhotoEl = require("../components/PhotoEl");
const Layout = require("../components/Layout");

function AlbumEl({ album }) {
  return (
    <Layout>
      <div className="albumEl">
        <h1>{album.title}</h1>
        {album.Photos.map((photo) => (
          <PhotoEl photo />
        ))}
      </div>
    </Layout>
  );
}

module.exports = AlbumEl;
