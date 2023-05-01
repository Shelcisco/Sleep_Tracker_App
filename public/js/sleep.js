
// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const date = document.querySelector("#date").value.trim();
//   const hours = document.querySelector("#hours").value.trim();
//   const mood = document.querySelector("#mood").value.trim();
//   const rem_sleep = document.querySelector("#rem").value.trim();

//   if (date && hours && mood && rem_sleep) {
//     const response = await fetch("/sleep", {
//       method: "POST",
//       body: JSON.stringify({ date, hours, mood, rem_sleep }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//       alert("Failed to add sleep info");
//     }
//   }
// };

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const date = document.querySelector("#date").value.trim();
//   const hours = document.querySelector("#hours").value.trim();
//   const mood = document.querySelector("#mood").value.trim();
//   const rem_sleep = document.querySelector("#rem").value.trim();

//   if (date && hours && mood && rem_sleep) {
//     const response = await fetch("/sleep", {
//       method: "POST",
//       body: JSON.stringify({ date, hours, mood, rem_sleep }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       // create an event on the FullCalendar
//       const calendar = document.getElementById("calendar")._fullCalendar;
//       calendar.addEvent({
//         title: `Slept ${hours} hours (${mood})`,
//         start: date,
//         allDay: true,
//       });

//       // refresh the calendar events from local storage
//       calendar.removeAllEvents();
//       calendar.addEventSource(getEventsFromLocalStorage());

//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//       alert("Failed to add sleep info");
//     }
//   }
// };

// import { getEventsFromLocalStorage } from './calendar.js';


const newFormHandler = async (event) => {
  event.preventDefault();

  const date = document.querySelector("#date").value.trim();
  const hours = document.querySelector("#hours").value.trim();
  const mood = document.querySelector("#mood").value.trim();
  const rem_sleep = document.querySelector("#rem").value.trim();

  if (date && hours && mood && rem_sleep) {
    const response = await fetch("/api/sleep", {
      method: "POST",
      body: JSON.stringify({ date, hours, mood, rem_sleep }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const eventData = {
        title: "Hi",
        start: date,
        allDay: true,
        end: date
      };

      // create an event on the FullCalendar
      const calendarEl = document.getElementById("calendar");
      if (calendarEl && calendarEl._fullCalendar) {
        const calendar = calendarEl._fullCalendar;
        calendar.addEvent(eventData);

        // refresh the calendar events from local storage
        calendar.removeAllEvents();
        calendar.addEventSource(getEventsFromLocalStorage());
      } else {
        console.error("FullCalendar not found");
      }

      // Save sleepData to local storage
      const sleepData = JSON.parse(localStorage.getItem("sleepData")) || [];
      const newSleepData = { date, hours, mood, rem_sleep };
      sleepData.push(newSleepData);
      localStorage.setItem("sleepData", JSON.stringify(sleepData));

      document.location.replace("/");
    } else {
      alert("Failed to add sleep info");
    }
  }
};


// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const date = document.querySelector("#date").value.trim();
//   const hours = document.querySelector("#hours").value.trim();
//   const mood = document.querySelector("#mood").value.trim();
//   const rem_sleep = document.querySelector("#rem").value.trim();

//   if (date && hours && mood && rem_sleep) {
//     const response = await fetch("/sleep", {
//       method: "POST",
//       body: JSON.stringify({ date, hours, mood, rem_sleep }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       const eventData = {
//         title: `Slept ${hours} hours (${mood})`,
//         start: date,
//         allDay: true,
//       };

//       // create an event on the FullCalendar
//       const calendarEl = document.getElementById("calendar");
//       if (calendarEl && calendarEl._fullCalendar) {
//         const calendar = calendarEl._fullCalendar;
//         calendar.addEvent(eventData);

//         // refresh the calendar events from local storage
//         calendar.removeAllEvents();
//         calendar.addEventSource(getEventsFromLocalStorage());
//       } else {
//         console.error("FullCalendar not found");
//       }

//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//       alert("Failed to add sleep info");
//     }
//   }
// };



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/sleep/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/sleep");
    } else {
      alert(response.statusText);
      alert("Failed to delete sleep data");
    }
  }
};

function getEventsFromLocalStorage() {
  const events = localStorage.getItem("calendarEvents");
  const sleepData = JSON.parse(localStorage.getItem("sleepData")) || [];
  return events ? JSON.parse(events).concat(sleepData) : sleepData;
}



//event listener/console log
// document.addEventListener('DOMContentLoaded', function() {
  // var calendarEl = document.getElementById('history');
  // var calendarEl = document.getElementById('row mb-2');
  
// });


document
  .querySelector(".new-sleep-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".sleep-list")
  .addEventListener("click", delButtonHandler);
