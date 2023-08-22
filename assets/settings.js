
const seeAllbtn = document.querySelector(".see-all-btn");
const featuredListingModal = document.querySelector("#featured-listing-modal");
const featuredListingContent = document.querySelector(
  "#featured-listing-content"
);

function openModal() {
  featuredListingModal.style.display = "flex";
}

function closeModal() {
  featuredListingModal.style.display = "none";
}

seeAllbtn.addEventListener("click", () => {
    console.log("uesys")
  openModal();
});

document.addEventListener("click", (event) => {
  if (
    event.target === featuredListingModal &&
    !featuredListingContent.contains(event.target)
  ) {
    closeModal();
  }
});

document.addEventListener("keydown", (event)=>{
    if(event.key == "Escape"){
        closeModal()
    }
})
