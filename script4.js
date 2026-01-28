// 🔹 Poem line-by-line reveal (manual play)
const lines = document.querySelectorAll(".poem p");
lines.forEach((line, index) => {
  setTimeout(() => {
    line.style.opacity = "1";
    line.style.transform = "translateY(0)";
    line.style.transition = "opacity 1s ease, transform 1s ease";
  }, index * 1000); // 1s gap per line
});

// 🔹 Background music autoplay
const bgMusic = new Audio("song.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.2;

// Try autoplay
window.addEventListener("load", () => {
  bgMusic.play().catch(() => {
    // mobile may block autoplay, play on first tap
    document.body.addEventListener("click", () => {
      bgMusic.play();
    }, { once: true });
  });
});

// 🔹 Poem Audio (manual)
const audio = document.getElementById("poemAudio");

// 🔹 Video (manual)
const video = document.getElementById("farewellVideo");

// Click video → toggle play/pause
video.addEventListener("click", () => {
  if (video.paused) video.play();
  else video.pause();
});

// Pause video if scrolled out of view
window.addEventListener("scroll", () => {
  const rect = video.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > window.innerHeight) video.pause();
});