
const photoDiv = document.querySelector(`.photoEl`);
const likeId = photoDiv.dataset.id;
const likeDiv = document.querySelector(`.like[data-id='${likeId}']`);

if (likeDiv) {
  const { id } = likeDiv.dataset;
  likeDiv.addEventListener("click", async (event) => {
    const photo = event.target.closest(".photoEl");
   
    const photoId = id

   

    // console.log(userId, "}}}}}}}}}}");
    console.log(photoId, "{{{{{{{{{{{");

    const response = await fetch(`api/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // userId: userId,
        photoId: photoId,
      }),
    });

   
  });
}