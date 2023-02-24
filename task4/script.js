var newText = document.querySelector(".day");
function text() {
    var textInfo = prompt("Введите текст");
    newText.textContent = textInfo;
}
newText.addEventListener('click', text);