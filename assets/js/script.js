//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

//display date
var today = moment().format("dddd, MMM Do YYYY");
document.getElementById("currentDay").textContent = today;

//click event for save button
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // get textarea description
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // set into localStorage
    localStorage.setItem(time, text);
  });

  // get from localStorage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#1 .description").val(localStorage.getItem("1"));
  $("#2 .description").val(localStorage.getItem("2"));
  $("#3 .description").val(localStorage.getItem("3"));
  $("#4 .description").val(localStorage.getItem("4"));
  $("#5 .description").val(localStorage.getItem("5"));

  //converting time to variable

  var h9 = 9;
  var h10 = 10;
  var h11 = 11;
  var h12 = 12;
  var h1 = 13;
  var h2 = 14;
  var h3 = 15;
  var h4 = 16;
  var h5 = 17;
  var h6 = 18;

  var currentHour = moment().format("H");

  if (currentHour < h9) {
    $("#9-am").addClass("future");
  } else if (currentHour > h9) {
    $("#9-am").addClass("past");
  } else if ((currentHour = h9)) {
    $("#9-am").addClass("present");
  }

  if (currentHour < h10) {
    $("#10-am").addClass("future");
  } else if (currentHour > h10) {
    $("#10-am").addClass("past");
  } else if ((currentHour = h10)) {
    $("#10-am").addClass("present");
  }

  if (currentHour < h11) {
    $("#11-am").addClass("future");
  } else if (currentHour > h11) {
    $("#11-am").addClass("past");
  } else if ((currentHour = h11)) {
    $("#11-am").addClass("present");
  }

  if (currentHour < h12) {
    $("#12-pm").addClass("future");
  } else if (currentHour > h12) {
    $("#12-pm").addClass("past");
  } else if ((currentHour = h12)) {
    $("#12-pm").addClass("present");
  }

  if (currentHour < h1) {
    $("#1-pm").addClass("future");
  } else if (currentHour > h1) {
    $("#1-pm").addClass("past");
  } else if ((currentHour = h1)) {
    $("#1-pm").addClass("present");
  }

  if (currentHour < h2) {
    $("#2-pm").addClass("future");
  } else if (currentHour > h2) {
    $("#2-pm").addClass("past");
  } else if ((currentHour = h2)) {
    $("#2-pm").addClass("present");
  }

  if (currentHour < h3) {
    $("3-pm").addClass("future");
  } else if (currentHour > h3) {
    $("#3-pm").addClass("past");
  } else if ((currentHour = h3)) {
    $("#3-pm").addClass("present");
  }

  if (currentHour < h4) {
    $("#4-pm").addClass("future");
  } else if (currentHour > h4) {
    $("#4-pm").addClass("past");
  } else if ((currentHour = h4)) {
    $("#4-pm").addClass("present");
  }

  if (currentHour < h5) {
    $("#5-pm").addClass("future");
  } else if (currentHour > h5) {
    $("#5-pm").addClass("past");
  } else if ((currentHour = h5)) {
    $("#5-pm").addClass("present");
  }

  if (currentHour < h6) {
    $("#6-pm").addClass("future");
  } else if (currentHour > h6) {
    $("#6-pm").addClass("past");
  } else if ((currentHour = h6)) {
    $("#6-pm").addClass("present");
  }
});
