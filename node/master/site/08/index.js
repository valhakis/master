function updateDraggable() {
  $('#external-events .fc-event').each(function() {


    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
      title: $.trim($(this).text()), // use the element's text as the event title
      stick: true // maintain when user navigates (see docs on the renderEvent method)
    });

    // make the event draggable using jQuery UI
    if ($("#client-list").val() !== "Choose Client") {
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });
    }

  });

}

$(document).ready(function() {
  /* initialize the external events
    -----------------------------------------------------------------*/
  updateDraggable();

  /* initialize the calendar
    -----------------------------------------------------------------*/

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView:'agendaDay',
    unselectAuto: false,
    selectable: true,
    selectHelper: false,
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function() { },
    eventRender: function(event, element) {
      element.find(".fc-content").append("<span class='close' data-id='" + event._id +"'>x</span>");
    },
    eventResize:function( event, jsEvent, ui, view ) {
      console.log("event",event);
    },
  });
});

// remove event on click in calender
$(document).on('click', '.close', function(){
  // debugger;
  var id = $(this).data('id'); 
  $('#calendar').fullCalendar('removeEvents', id); 
  $(this).parent().remove();
});

$("#btnReset").click(function() {
  $('#calendar').fullCalendar('removeEvents');
});
$(document).ready(function() {
  $("#client-list").on("change", function() {
    var selectedValue = $(this).val();
    $('#external-events .fc-event').each(function() {
      if ($("#client-list").val() !== "Choose Client") {
        $(this).draggable({
          zIndex: 999,
          revert: true,      // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        });
      } else {
        $(this).draggable('disable');
      }
    });
  });


});

function changeImage() {

}


$("#client-list").on("change", function() {
  // ...
  $('#external-events .fc-event').each(function() {
    if ($("#client-list").val() !== "Choose Client") {
      $(this).draggable({
        zIndex: 999,
        revert: true,     
        revertDuration: 0 
      });
    } else {
      $(this).draggable('disable');
    }
  });
  // ...
});
