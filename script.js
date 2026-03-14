document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect
  const text = "Welcome to Elgie's Bytes Tech Solutions";
  const typingSpeed = 100;
  const targetElement = document.querySelector(".hero-content h1");
  let i = 0;

  function typeText() {
    if (i < text.length) {
      targetElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, typingSpeed);
    }
  }
  typeText();

  // Nav bar animation

console.log("script.js is loading");

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

console.log("menuToggle:", menuToggle);
console.log("navMenu:", navMenu);

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    console.log("hamburger clicked");
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
} else {
  console.log("Menu toggle or nav menu not found.");
}

  // Calendar Setup
  var calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    // Ensure the calendar div exists before running
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      events: [
        {
          title: "This is a test event",
          start: "2025-03-15",
          description: "A workshop for building your own computer.",
        },
        {
          title: "This is another test event",
          start: "2025-03-22",
          description: "A beginner-friendly class for parents and kids.",
        },
      ],
      eventClick: function (info) {
        alert(info.event.title + "\n\n" + info.event.extendedProps.description);
      },
    });
    calendar.render();
  }
});
