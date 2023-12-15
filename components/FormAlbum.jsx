const React = require("react");



function FormAlbum({ album, photos ,user}) {
  const count = photos.filter((photo) => photo.albumID === album.id).length;
  const arr = photos.filter((photo) => photo.albumID === album.id);

  return (
    <div className="card" style={{ width: "18rem" }} data-albumid={album.id}>
      
        {arr[0] && (
          <img
            src={arr[0].img}
            className="card-img-top"
            style={{ width: "18rem" }}
          />
        )}
      
      <div className="card-body">
      <a href={`/photos/${album.id}`}><h5 className="card-title">{album.title}</h5></a>
        <p className="card-text">{`В АЛЬБОМЕ: ${count}`}</p>
        <p className="card-text">{album.isOpen}</p>

        {user && user.id === album.userID && (
          <>
            <a href="#" className="btn btn-primary">
              изменить
            </a>
            <button href="#" className="btn btn-delete">
              {" "}
              удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}
// lol

module.exports = FormAlbum;
