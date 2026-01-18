const lines = document.querySelectorAll(".poem p");

// Line by line reveal
lines.forEach((line, index) => {
  setTimeout(() => {
    line.style.opacity = "1";
    line.style.transform = "translateY(0)";
    line.style.transition = "opacity 1s ease, transform 1s ease";
  }, index * 1000);
});