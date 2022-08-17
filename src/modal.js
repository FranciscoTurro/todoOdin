const modalContainer = document.getElementById("modalContainer");
const modalButton = document.querySelector(".modalButton");

modalButton.addEventListener("click", () => {
  modalContainer.style.display = "block"; //makes the modal appear
});

window.addEventListener("click", (e) => {
  if (e.target == modalContainer) {
    modalContainer.style.display = "none"; //makes the modal dissappear if i click outside of it
  }
});
