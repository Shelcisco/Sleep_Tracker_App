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
  }
}

//delete event function
function handleEventDelete(info) {
  if (confirm("Are you sure you want to delete this event?")) {
    info.event.remove();
    alert('Event deleted!');
  }
}

//event listner/console log
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
    }
  });
  calendar.render();
});


