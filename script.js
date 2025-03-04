document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded");

  // Check if calendar div exists
  var calendarEl = document.getElementById("calendar");
  if (!calendarEl) {
      console.error("Calendar element not found!");
      return;
  } else {
      console.log("Calendar element found.");
  }

  // Initialize Calendar
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

  console.log("Rendering calendar...");
  calendar.render();
});
