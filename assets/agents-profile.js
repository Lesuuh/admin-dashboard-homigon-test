const seeAllBtn = document.getElementById("agents-profile-see-all");
const inactiveModal = document.querySelector(".inactive-modal");
const inactiveContent = document.querySelector(".inactive-content");

function openModal() {
  inactiveModal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  inactiveModal.style.display = "none";
}

seeAllBtn.addEventListener("click", () => {
  console.log("yess");
  openModal();
});

// Close the modal if the Escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("click", function (event) {
  // Check if the click event is on the inactiveModal and not on the inactiveContent
  if (
    event.target === inactiveModal &&
    !inactiveContent.contains(event.target)
  ) {
    closeModal();
  }
});
