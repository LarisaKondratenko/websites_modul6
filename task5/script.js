let textElement;
let input = document.getElementById("input");
let newtext = document.getElementById("duplicateField");
input.onkeyup = function() {
  textElement = input.value;
  newtext.textContent = textElement;
};
input.onkeyup();
document.querySelector('.btn').addEventListener('click', function() {
  let btn = textElement;
  console.log(btn);
});
 document.querySelector('.btn').addEventListener('click', function(event) {
  input.value = event.preventDefault();
});
document.querySelector('.btn').addEventListener('click', function(event) {
  newtext.textContent = event.preventDefault();
});
document.querySelector(".clearBtn").addEventListener('click', function() {
  input.value = "";
}); 