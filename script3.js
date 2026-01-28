const track = document.getElementById("track");

/* 🔁 duplicate images */
Array.from(track.children).forEach(img => {
  track.appendChild(img.cloneNode(true));
});

/* 🎶 Background music */
const music = document.getElementById("bgMusic");
music.volume = 0.2;

window.addEventListener("load", () => {
  music.play().catch(() => {});
});

document.body.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

/* 🚀 Infinite marquee */
let position = 0;
const speed = 0.5;
let isPaused = false;

function moveTrack() {
  if (!isPaused) {
    position -= speed;

    const firstImg = track.children[0];
    const imgWidth = firstImg.offsetWidth + 25;

    if (Math.abs(position) >= imgWidth) {
      track.appendChild(firstImg);
      position += imgWidth;
    }

    track.style.transform = `translateX(${position}px)`;
  }

  requestAnimationFrame(moveTrack);
}
moveTrack();

/* 🌟 Center glow */
setInterval(() => {
  if (isPaused) return;

  const centerX = window.innerWidth / 2;
  Array.from(track.children).forEach(img => {
    const rect = img.getBoundingClientRect();
    const imgCenter = rect.left + rect.width / 2;

    img.classList.toggle(
      "active",
      imgCenter > centerX - 120 && imgCenter < centerX + 120
    );
  });
}, 120);

/* ===============================
   📸 QUICK VIEW + AUTO PAUSE
================================ */
const viewer = document.createElement("div");
viewer.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 9999;
`;

const viewerImg = document.createElement("img");
viewerImg.style.cssText = `
  max-width: 90%;
  max-height: 85%;
  border-radius: 16px;
  box-shadow: 0 0 30px #00eaff;
`;

viewer.appendChild(viewerImg);
document.body.appendChild(viewer);

track.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    viewerImg.src = e.target.src;
    viewer.style.opacity = "1";
    viewer.style.pointerEvents = "auto";
    isPaused = true; // ⏸️ FULL FREEZE
  }
});

viewer.addEventListener("click", () => {
  viewer.style.opacity = "0";
  viewer.style.pointerEvents = "none";
  isPaused = false; // ▶️ RESUME
});

/* ===============================
   👆 TOUCH SWIPE (PAUSE SAFE)
================================ */
let touchStartX = 0;

track.addEventListener("touchstart", e => {
  if (isPaused) return;
  touchStartX = e.touches[0].clientX;
});

track.addEventListener("touchmove", e => {
  if (isPaused) return;
  const diff = e.touches[0].clientX - touchStartX;
  position += diff * 0.8;
  touchStartX = e.touches[0].clientX;
});

/* ➡️ Next page */
function goNext() {
  music.pause();
  window.location.href = "index4.html";
}