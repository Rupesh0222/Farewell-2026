// Confetti generation (falling confetti – SAME AS BEFORE)
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
  window.location.href = "index2.html";
}

const targetDate = new Date("February 6, 2026 00:00:00").getTime();
let blasted = false;

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  // 🔥 ZERO pe sirf BLAST add
  if (diff <= 0 && !blasted) {
    blasted = true;
    blastCrackers();
    return;
  }

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

// 🎆 EXTRA BLAST (falling confetti ko touch nahi karta)
function blastCrackers() {
  for (let i = 0; i < 120; i++) {
    const blast = document.createElement("div");
    blast.classList.add("confetti");

    blast.style.left = Math.random() * 100 + "vw";
    blast.style.top = "50vh"; // screen ke beech se blast
    blast.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 60%)";
    blast.style.animationDuration = 1 + Math.random() * 1.5 + "s";

    document.body.appendChild(blast);

    setTimeout(() => blast.remove(), 3000);
  }
}
