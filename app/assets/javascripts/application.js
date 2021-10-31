// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery.min
//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require jquery-ui.min
//= require moment.min
//= require fullcalendar.min
//= require ja
//= require turbolinks
//= require_tree .

$(function () {
  $('#calendar').fullCalendar({
    selectable: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
// リロードしたらカレンダーからイベントが消えるのを防ぐ
    events: "/events.json",
    color: 'yellow',
    textColor: 'black',
    // dayClick: function(date) {
      // alert('clicked ' + date.format());
    // },
    select: function(startDate, endDate) {
      // alert('selected ' + startDate.format() + ' to ' + endDate.format());
      $('#new_event').modal('show');
    }
  });
});