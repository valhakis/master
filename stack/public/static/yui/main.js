// Create a YUI sandbox on your page.
YUI().use('node', 'event', 'transition', 'node-load', 'aui-scheduler', function (Y) {

  var events = [
    {
      content: 'Partial Lunar Eclipse',
      endDate: new Date(2013, 3, 25, 5),
      startDate: new Date(2013, 3, 25, 1)
    },
    {
      color: "#8d8",
      content: 'Earth Day Lunch',
      disabled: true,
      endDate: new Date(2013, 3, 22, 13),
      meeting: true,
      reminder: true,
      startDate: new Date(2013, 3, 22, 12)
    },
    {
      content: "Weeklong",
      endDate: new Date(2013, 3, 27),
      startDate: new Date(2013, 3, 21)
    }
  ];

  var agendaView = new Y.SchedulerAgendaView();
  var dayView = new Y.SchedulerDayView();
  var weekView = new Y.SchedulerWeekView();
  var monthView = new Y.SchedulerMonthView();

  var eventRecorder = new Y.SchedulerEventRecorder();

  new Y.Scheduler(
    {
      activeView: weekView,
      boundingBox: '#myScheduler',
      date: new Date(2013, 3, 25),
      eventRecorder: eventRecorder,
      items: events,
      render: true,
      views: [dayView, weekView, monthView, agendaView]
    }
  );

  // The Node and Event modules are loaded and ready to use.
  // Your code goes here!
  // Access DOM nodes.
  var oneElementById     = Y.one('#foo'),
    oneElementByName   = Y.one('body'),
    allElementsByClass = Y.all('.bar');

  // Create DOM nodes.
  var contentNode = Y.Node.create('<div>'),
    listNode    = Y.Node.create('<ul>'),
    footerNode  = Y.Node.create('<footer>');

  oneElementById.setHTML('<p>ELEMENT HAS SOME NICE HTML</p>');

  contentNode.setHTML('<p>Node makes it easy to add content.</p>');
  listNode.insert('<li>Buy milk</li>');
  footerNode.prepend('<h2>Footer Content</h2>');

  // Manipulate DOM nodes.
  Y.all('.important').addClass('highlight');

  Y.one('#close-button').on('click', function () {
    contentNode.hide();
  });

  // Fade away.
  Y.one('#fademe').transition({
    duration: 1, // seconds
    opacity : 0
  });

  // Shrink to nothing.
  Y.one('#shrinkme').transition({
    duration: 1, // seconds
    width   : 0,
    height  : 0
  });

  Y.one('#content').load('content.html');
});

$('#calendar').fullCalendar({
});
