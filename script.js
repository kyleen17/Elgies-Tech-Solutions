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

  // Calendar Setup
  var calendarEl = document.getElementById("calendar");
  if (calendarEl) {  // Ensure the calendar div exists before running
      var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: "dayGridMonth",
          headerToolbar: {
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
          },
          events: [
              {
                  title: "Build Your Own PC",
                  start: "2025-03-15",
                  description: "A workshop for building your own computer.",
              },
              {
                  title: "Guardian & Me Coding Class",
                  start: "2025-03-22",
                  description: "A beginner-friendly class for parents and kids.",
              }
          ],
          eventClick: function (info) {
              alert(info.event.title + "\n\n" + info.event.extendedProps.description);
          }
      });
      calendar.render();
  }
});