const music = document.getElementById("bgMusic");
const images = document.querySelectorAll(".track img");

// initial volume
music.volume = 0.2;

// Laptop / desktop ke liye try autoplay
window.addEventListener("load", () => {
  music.play().catch(() => {
    console.log("Autoplay blocked, waiting for tap");
  });
});

// Mobile fix – first tap pe music play
document.body.addEventListener(
  "click",
  () => {
    if (music.paused) {
      music.play();
    }
  },
  { once: true }
);

// Center-based fade logic (same as before)
setInterval(() => {
  const centerX = window.innerWidth / 2;

  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    const imgCenter = rect.left + rect.width / 2;

    if (imgCenter > centerX - 120 && imgCenter < centerX + 120) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}, 100);

// Go to Page 4
function goNext() {
  music.pause();
  window.location.href = "index4.html";
}