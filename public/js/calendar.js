
//Calendar view/add event function
function handleEventAdd(info) {
  var title = prompt('Enter time slept, mood, or any relevant notes:');
  if (title) {
    var calendar = info.view.calendar;
    calendar.addEvent({
      title: title,
      start: info.startStr,
      end: info.endStr,
      allDay: info.allDay
    });
    alert('Event created!');
    saveEvents(calendar.getEvents());
  }
}

//delete event function
function handleEventDelete(info) {
  if (confirm("Are you sure you want to delete this event?")) {
    info.event.remove();
    alert('Event deleted!');
    saveEvents(info.event.calendar.getEvents());
  }
}


function getEventsFromLocalStorage() {
  const events = localStorage.getItem("calendarEvents");
  const sleepData = JSON.parse(localStorage.getItem("sleepData")) || [];

  return events ? JSON.parse(events).concat(sleepData) : sleepData;
}


//save events to local storage
function saveEvents(events) {
  localStorage.setItem('calendarEvents', JSON.stringify(events));
}

//event listener/console log
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    select: handleEventAdd,
    eventClick: handleEventDelete,
    eventAdd: function(info) {
      console.log('Event created:', info.event);
    },
    eventRemove: function(info) {
      console.log('Event removed:', info.event);
    },
    events: getEventsFromLocalStorage()
  });
  calendar.render();
});
