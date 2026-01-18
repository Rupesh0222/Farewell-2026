const music = document.getElementById("bgMusic");
const images = document.querySelectorAll(".track img");

// Background music
window.onload = () => {
  music.volume = 0.35;
  music.play().catch(() => {});
};

// Center-based fade logic
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