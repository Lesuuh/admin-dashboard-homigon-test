// DATA
const data = [
  {
    id: 1,
    nameOnAccount: "John Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Agent",
  },
  {
    id: 2,
    nameOnAccount: "Jane Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Agent",
  },
  {
    id: 3,
    nameOnAccount: "Smith Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Individual",
  },
  {
    id: 4,
    nameOnAccount: "Lambert Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Agent",
  },
  {
    id: 5,
    nameOnAccount: "Peter Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Individual",
  },
  {
    id: 6,
    nameOnAccount: "John Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Agent",
  },
  {
    id: 7,
    nameOnAccount: "John Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Individual",
  },
  {
    id: 8,
    nameOnAccount: "John Doe",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Agent",
  },
  {
    id: 8,
    nameOnAccount: "Lenard",
    phonenumber: "08123456789",
    email: "personsname@gmail.com",
    dob: "DD/MM/YYYY",
    type: "Agent",
  },
];

// DYNAMIC RENDERING
const tableBody = document.querySelector("#tbody");

// Function to render the table data
function renderData() {
  tableBody.innerHTML = "";

  const rows = data.map(
    (item) =>
      `
        <tr class="table-row">
            <td class="nameonaccount"><h3>${item.nameOnAccount}</h3></td>
            <td>${item.phonenumber}</td>
            <td>${item.email}</td>
            <td>${item.dob}</td>
            <td>${item.type}</td>
            <td class="edit-delete">
              <button id="more-vert"><span class="material-icons-outlined more-vert">more_vert</span></button>
                <div class="modify-dropdown" id="modify-dropdown-content">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
            </td>
        </tr>
      `
  );
  // console.log(rows);
  return (tableBody.innerHTML = rows.join(""));
}

// SEARCH FUNCTIONALITY
function searchFunction() {
  const searchInput = document.getElementById("search-input");
  const rows = tableBody.querySelectorAll("tr");
  // console.log(rows);

  searchInput.addEventListener("keyup", function (event) {
    // console.log(event)
    const q = event.target.value.toLowerCase();

    rows.forEach((row) => {
      // console.log(row)
      row.querySelector("td").textContent.toLowerCase().startsWith(q)
        ? (row.style.display = "table-row")
        : (row.style.display = "none");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderData();
  searchFunction();
});






// ----------------FILTER MODAL-------------------
const openFilter = document.querySelector("#open-filter");
const filterModal = document.querySelector(".filter-modal");

// console.log(filterModal)
filterModal.style.display = "none";

openFilter.addEventListener("click", (event) => {
  event.stopPropagation();
  filterModal.style.display = "flex";
});

window.addEventListener("scroll", () => {
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(scrollPosition);

  // setting the height for the modal to close
  let heightClose = 500;

  if (scrollPosition >= heightClose) {
    filterModal.style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  if (event.target !== filterModal && !filterModal.contains(event.target)) {
    filterModal.style.display = "none";
  }
});





// CREATE ACCOUNT MODAL
const backdrop = document.querySelector(".modal-backdrop");
const createAccountModal = document.querySelector(".create-account-modal-content");
const createAccountBtn = document.getElementById("add-account");

createAccountBtn.addEventListener("click", (event) => {
  createAccountModal.style.display = "flex";
  backdrop.style.display = "flex";
});




function closeModal() {
  createAccountModal.style.display = "none";
  backdrop.style.display = "none";
  successModal.style.display = "none";
}






// SUCCESS MODAL
const successModal = document.querySelector(".success-modal");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  successModal.style.display = "flex";
  createAccountModal.style.display = "none";
});




const individual = document.getElementById("individual");

individual.addEventListener("click", function () {
  console.log("yess");
});


