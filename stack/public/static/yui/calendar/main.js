$('#calendar').fullCalendar({
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'listDay,listWeek,month'
  },
  defaultDate: '2017-10-01',
  editable: true,
  navLinks: true,
  eventLimit: true,
  displayEventTime: false, 
  googleCalendarApiKey: 'AIzaSyCS-eQhhBe4tMtpiC0-n2LAeBZBItEmscg',
  eventClick: function(event) {
    // opens events in a popup window
    window.open(event.url, 'gcalevent', 'width=700,height=600');
    return false;
  },

  loading: function(bool) {
    $('#loading').toggle(bool);
  },
  views: {
    listDay: { buttonText: 'list day' },
    listWeek: { buttonText: 'list week' }
  },
  defaultView: 'listWeek',
  events: 'en.usa#holiday@group.v.calendar.google.com',
  /*
  events: [
    'en.usa#holiday@group.v.calendar.google.com',
    {
      title: 'Build a great wall.',
      start: '2017-10-01'
    },
    {
      title: 'Play league of legends.',
      start: '2017-10-03',
      end: '2017-10-08',
    },
    {
      title: 'MAKE A POKEMON CRY',
      start: '2017-10-12'
    }
  ]
  */
});
