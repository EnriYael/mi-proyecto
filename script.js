const buttonReceive = document.getElementById("button-receive");
const buttonUndo = document.getElementById("button-undo");
const message = document.getElementById("message");

buttonReceive.addEventListener("click", () => {
    message.textContent = "¡¡♥ TE AMO ♥!!"
});

buttonUndo.addEventListener("click", () => {
    message.textContent = "¡HOLA AMOR!"

});
