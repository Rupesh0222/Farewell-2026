const welcomeText = document.getElementById("welcomeText");
const tapBox = document.getElementById("tapBox");
const card = document.getElementById("card");

// Show tap box after welcome text fades
setTimeout(() => {
  welcomeText.style.display = "none";
  tapBox.classList.remove("hidden");
}, 5200);

// Open farewell card
function openCard() {
  tapBox.style.display = "none";
  card.classList.remove("hidden");
}

// Go to page 3
function goNext() {
  window.location.href = "index3.html";
}