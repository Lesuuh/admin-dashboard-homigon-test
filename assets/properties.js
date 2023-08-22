const viewRequestBtn = document.querySelector("#view-request-btn");
const listingRequestModal = document.querySelector("#listing-request-modal");
const listingRequestModalContent = document.querySelector(
  "#listing-request-content"
);

function openModal() {
  listingRequestModal.style.display = "flex";
}

function closeModal() {
  listingRequestModal.style.display = "none";
}

viewRequestBtn.addEventListener("click", () => {
  openModal();
});

document.addEventListener("click", (event) => {
  if (
    event.target === listingRequestModal &&
    !listingRequestModalContent.contains(event.target)
  ) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    closeModal();
  }
});

