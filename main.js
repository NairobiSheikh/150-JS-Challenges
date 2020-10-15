/*
on page should look like 
Todays is: what ever that is and 
Current time is: hours : minuts: secocds
*/

//set the update function
function update() {
  // declaring the new date variable
  let today = new Date();
  
  // set todays date
  let day = today.getDay();
  let date = (today.getMonth()+1) + '-' + today.getFullYear();
  let daylist = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday']
  document.querySelector('#output').innerHTML = 'Today is: ' + daylist[day] + '-' + date;

  // set the Time
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  document.querySelector('#time').innerHTML = 'Current time is: ' + time;
}

// creating an addEventListener that keeps the time update
window.addEventListener('load', function() {
  setInterval(update, 1000);
});

//set up the print content of the window
document.querySelector('#btn').addEventListener('click', function() {
  window.print();
});
