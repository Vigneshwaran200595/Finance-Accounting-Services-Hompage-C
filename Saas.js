let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function autoSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(autoSlide, 4000);
showSlide(current);

function showVideo() {
    const container = document.getElementById("video-container");
    container.style.display = "block";
  }

let feedbackIndex = 0;
const feedbackSlides = document.querySelectorAll(".feedback-slide");

function showFeedbackSlide(index) {
  feedbackSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function autoFeedbackSlide() {
  feedbackIndex = (feedbackIndex + 1) % feedbackSlides.length;
  showFeedbackSlide(feedbackIndex);
}
setInterval(autoFeedbackSlide, 4000);

document.querySelector(".next").addEventListener("click", () => {
  feedbackIndex = (feedbackIndex + 1) % feedbackSlides.length;
  showFeedbackSlide(feedbackIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  feedbackIndex = (feedbackIndex - 1 + feedbackSlides.length) % feedbackSlides.length;
  showFeedbackSlide(feedbackIndex);
});

showFeedbackSlide(feedbackIndex);

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    function startCounter() {
        counters.forEach(counter => {
            counter.innerText = "0";
            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / 200;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }

    function isVisible(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    window.addEventListener("scroll", function () {
        if (!started && isVisible(document.querySelector(".why-stats"))) {
            startCounter();
            started = true;
        }
    });
});




window.addEventListener("scroll", function() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

document.getElementById("scrollTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});