const description = $('.description');
const saveBtn = $('.saveBtn');
let currentDay = $('#currentDay');
let currentDate = moment().format('dddd, MMMM Do');
let currentTime = moment().format('H');


  

console.log(currentTime);

currentDay.text(currentDate);


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
}};



compareTimes();
