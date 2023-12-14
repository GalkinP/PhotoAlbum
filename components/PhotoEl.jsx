const React = require("react");

function PhotoEl({ photo, album, likes, user }) {
  return (
    <div className="photoEl">
      <div className="img" style={{ backgroundImage: `${photo.img}` }}>
        <div className="like">
          <button type="submit">+</button>
          <p>{likes.length}</p>
        </div>
      </div>
      <h3>{photo.title}</h3>
      <h3>{photo.description}</h3>
      {user && user.id === album.userId && (
        <div className="photoButtons">
          <button type="submit" className="delPhotoBtn">
            удалить
          </button>
          <button type="submit" className="updatePhotoBtn">
            изменить
          </button>
        </div>
      )}
    </div>
  );
}

module.exports = PhotoEl;
