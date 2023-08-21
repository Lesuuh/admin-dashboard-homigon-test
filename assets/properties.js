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


const propertyCard = document.querySelectorAll(".property-card");
const propertyPage = document.querySelectorAll("#property-page");
const propertiesSection = document.querySelector(".properties-section");

function openPropertyPage(propertyId) {
  propertiesSection.style.display = "none";

  propertyPage.forEach((page) => {
    if (page.id === `${propertyId}-page`) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

propertyCard.forEach(card =>{
  card.addEventListener("click", function() {
    const propertyId = this.getAttribute("data-property-id")
    openPropertyPage(propertyId)
  })
})