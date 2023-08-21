
const listHead = document.querySelectorAll(".listhead")
const back = document.querySelector("#back")
const chats = document.querySelector(".chats")
const conversationSide = document.querySelector(".conversation-side")

listHead.forEach((item)=>{
    item.addEventListener("click", function(){
        const chatId = this.getAttribute('data-chatid');
        openChat(chatId);
        
    })
})


function openChat(chatId){

    conversationSide.style.display = "none"
    chats.style.display = "block"


    back.addEventListener("click", ()=>{
        conversationSide.style.display = "block"
        chats.style.display = "none"
    })
}

const editModal = document.querySelector(".edit-account-modal-content");
const editAccountBtn = document.querySelector("#edit-account");
const modalBackdrop = document.querySelector(".modal-backdrop");

editAccountBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    editModal.style.display = "flex";
    modalBackdrop.style.display = "flex";
});

function closeEditModal() {
    editModal.style.display = "none";
    modalBackdrop.style.display = "none";
}

modalBackdrop.addEventListener("click", function(event) {
    if (event.target === modalBackdrop) {
        closeEditModal();
    }
});

window.addEventListener("click", function(event) {
    // event.preventDefault();
    if (event.target !== editModal && !editModal.contains(event.target)) {
        closeEditModal(); 
    }
});




