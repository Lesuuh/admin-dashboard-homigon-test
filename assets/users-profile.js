const listHead = document.querySelectorAll(".listhead");
const back = document.querySelector("#back");
const chats = document.querySelector(".chats");
const conversationSide = document.querySelector(".conversation-side");

listHead.forEach((item) => {
  item.addEventListener("click", function () {
    const chatId = this.getAttribute("data-chatid");
    openChat(chatId);
  });
});

function openChat(chatId) {
  conversationSide.style.display = "none";
  chats.style.display = "block";

  back.addEventListener("click", () => {
    conversationSide.style.display = "block";
    chats.style.display = "none";
  });
}

const backBtn = document.querySelector("#backbtn");

backBtn.addEventListener("click", () => {
  history.back();
});

const editAccountModal = document.querySelector(".edit-account-modal")
const editAccountModalContent = document.querySelector(".edit-account-modal-content")
const editAccountBtn = document.querySelector("#edit-account")

editAccountBtn.addEventListener("click", ()=> {
    editAccountModal.style.display = "flex"
})

document.addEventListener("click", (event)=>{
    if(event.target === editAccountModal && !editAccountModalContent.contains(event.target)){
        editAccountModal.style.display = "none"
    }
})

document.addEventListener("keydown", (event)=>{
    if(event.key == "Escape"){
        editAccountModal.style.display = "none"
    }
})
