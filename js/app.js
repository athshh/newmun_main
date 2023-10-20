// god i hate javascript

// animations for countup number

// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);
// An ease-out function that slows the count as it progresses
const easeOutQuad = (t) => t * (2 - t);

// The animation function, which takes an Element
const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);
  // Start the animation running 60 times per second
  const counter = setInterval(() => {
    frame++;
    // Calculate our progress as a value between 0 and 1
    // Pass that value to our easing function to get our
    // progress on a curve
    const progress = easeOutQuad(frame / totalFrames);
    // Use the progress value to calculate the current count
    const currentCount = Math.round(countTo * progress);

    // If the current count has changed, update the element
    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    // If we’ve reached our last frame, stop the animation
    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
  const countupEls = document.querySelectorAll(".countup");
  countupEls.forEach(animateCountUp);
};

// animations for full cards

const slideInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showSlideIn");
    }
  });
});

const popInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showPopIn");
    }
  });
});

let finished = false;
const countupObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      if (finished == false) {
        runAnimations();
        finished = true;
      } else {
        console.log("finished");
      }
    }
  });
});

const hiddenSlideInElements = document.querySelectorAll(".hiddenSlideIn");
const hiddenPopInElements = document.querySelectorAll(".hiddenPopIn");
hiddenSlideInElements.forEach((el) => slideInObserver.observe(el));
hiddenPopInElements.forEach((el) => popInObserver.observe(el));
const countupEls = document.querySelectorAll(".countup");
countupEls.forEach((el) => countupObserver.observe(el));

var countDownDate = new Date("Oct 27, 2023 08:00:00").getTime();
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    "Days till NewMUN: " +
    days +
    " days, " +
    hours +
    " hours, " +
    minutes +
    " minutes, " +
    seconds +
    " seconds left.";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "";
  }
}, 1000);
