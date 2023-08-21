// Get references to DOM elements
const inactiveModalOpenBtn = document.querySelector(".see-all");
const inactiveModal = document.querySelector(".inactive-modal");
const inactiveContent = document.querySelector(".inactive-content");

// Function to open the modal
function openModal() {
  inactiveModal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  inactiveModal.style.display = "none";
}

// Event listener for opening the modal when the button is clicked
inactiveModalOpenBtn.addEventListener("click", function () {
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
