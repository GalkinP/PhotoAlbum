console.log("6666666666");
const photoDiv = document.querySelector(`.photoEl`);
// console.log(photoDiv, "&&&&&&&&&");
const likeId= photoDiv.dataset.id;

const likeDiv = document.querySelector(`.like[data-id='${likeId}']`);

if (likeDiv) {
    likeDiv.addEventListener("click", (event) => {
    const response = fetch(`/photos/${likeId}/like`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    })
})
}
