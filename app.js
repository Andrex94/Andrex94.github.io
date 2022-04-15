const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

function pageTransitions() {
  //  Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //  Section active class
  allSections.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // Remove selected from other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

pageTransitions();

// Switch button
switchBtn.addEventListener("click", function () {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    video.pause();
  } else {
    switchBtn.classList.remove("slide");
    video.play();
  }
});