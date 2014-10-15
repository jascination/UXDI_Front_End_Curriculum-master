/*
 Javascript Exercise: If Else Statements
 Most of your answers should be stored in variables called q1, q2 etc..
*/

// Ignore the following line:
var REPLACE_ME = true

/*
 Question 1
 A business is closed on Saturday and Sunday. Today is Tuesday.
 Write some logic to show if the shop is open for business.
 You only need to replace the REPLACE_ME text below.
*/

var timePeriod;
var day = 'Tuesday';

if(REPLACE_ME) {
 timePeriod = "Closed for business";
} else {
 timePeriod = "Open for business";
}


/*
 Question 2
 Today is Thursday. Change the REPLACE_ME text below so that
 Wednesday is considered the middle of the week.
*/

var partOfWeek = '';
var day = 'Thursday';

if(day == 'Monday' || day == 'Tuesday') {
  partOfWeek = 'Beginning';
} else if(REPLACE_ME) {
  partOfWeek = 'Middle';
} else if(day == 'Thursday' || day == 'Friday'){
  partOfWeek = 'End';
} else {
  partOfWeek = 'Weekend';
}