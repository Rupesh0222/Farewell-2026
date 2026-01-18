// Confetti generation
for (let i = 0; i < 50; i++) {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.backgroundColor =
    "hsl(" + Math.random() * 360 + ", 100%, 50%)";

  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(confetti);
}

// Button click
function goNext() {
  // abhi ke liye alert
  // baad me page2.html pe redirect kar denge
//   alert("Next page coming soon 🚀");
  window.location.href = "index2.html";
}