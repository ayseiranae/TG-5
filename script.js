const toggleBtn = document.getElementById('toggle-dark');
const darkIcon = document.getElementById('dark-icon');

toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkIcon.src = 'icon/sun.png';
  } else {
    darkIcon.src = 'icon/moon.png';
  }
});

const cursor = document.querySelector(".custom-cursor");
const cursorText = document.querySelector(".cursor-text");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const horizontalScroll = document.querySelectorAll(".horizontal-scroll img");

horizontalScroll.forEach(scroll => {
  scroll.addEventListener("mouseenter", () => {
    cursor.classList.add("big");
    cursorText.innerText = "↔";
})});

horizontalScroll.forEach(scroll => {
  scroll.addEventListener("mouseleave", () => {
    cursor.classList.remove("big");
    cursorText.innerText = "";
  })
});

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.add("hidden");
      entry.target.classList.remove("visible");
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});
