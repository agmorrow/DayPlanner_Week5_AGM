let currentDay = $('#currentDay');
let currentDate = moment().format('dddd, MMMM Do');
let currentTime = moment().format('H');

$(currentDay).html(currentDate);

$(document).ready(function () {
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    let eventText = $(this).siblings(".description").val();
    let timeBlock = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(timeBlock, eventText);

  })
});

function compareTimes() {
  for (let i = 9; i < 18; i++) {
    console.log(i);
    if (currentTime > i) {
      $('#timeBlock' + (i)).find('.description').addClass('past');
    } else if (currentTime < i) {
      $('#timeBlock' + (i)).find('.description').addClass('future');
    } else {
      $('#timeBlock' + (i)).find('.description').addClass('present');
    }

    $('#timeBlock9 .description').val(localStorage.getItem('timeBlock9'));
    $('#timeBlock10 .description').val(localStorage.getItem('timeBlock10'));
    $('#timeBlock11 .description').val(localStorage.getItem('timeBlock11'));
    $('#timeBlock12 .description').val(localStorage.getItem('timeBlock12'));
    $('#timeBlock13 .description').val(localStorage.getItem('timeBlock13'));
    $('#timeBlock14 .description').val(localStorage.getItem('timeBlock14'));
    $('#timeBlock15 .description').val(localStorage.getItem('timeBlock15'));
    $('#timeBlock16 .description').val(localStorage.getItem('timeBlock16'));
    $('#timeBlock17 .description').val(localStorage.getItem('timeBlock17'));
  }
};

compareTimes();