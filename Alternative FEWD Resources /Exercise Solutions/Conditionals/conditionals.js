// Prompt the user for their name and last name, and store them in variables

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

// Store the user's full name in a variable

var fullName = firstName + ' ' + lastName;

// Print the full name to the console

console.log(fullName);

// Prompt the user for their age

var age = prompt('How old are you?');

// Add 10 to the age and print the output to the console

age = parseInt(age);
console.log(age + 10);

// Verify that the user is 18 or over and print if they are a minor or adult to the console

if (age >= 18) {
	console.log('You are an adult!');
} else {
	console.log('You are a child!');
}

// Verify if the first name is "General", and the last name is *NOT*  "Assembly"

if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
	console.log('Greetings, General!');
}






