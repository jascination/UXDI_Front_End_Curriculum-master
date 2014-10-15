# UXDI FEWD DAY 4


## DAY 3 RECAP

- Further HTML (Forms and Embeds)
- Further CSS (Webfonts and Font Icons)
- HTML Layout Elements
- CSS Layout
- Styling your Case Study page

## Responsive CSS

- Before modern mobile devices, we used adaptive sites to server different web sites entirely to mobile users, e.g. http://mobile.ebay.co.uk
- This was best for users at the time, but meant maintaining two web sites entirely - different CSS, HTML and back end infrastructure

- Modern devices and mobile bandwidth can handle the page weight and load times of the desktop  web, but we must change the interface to better serve smaller screen sizes and touch vs click interfaces
- Responive development provides different sets of CSS rules to users running on different screen sizes
- We do this using 'media queries'

- Show an example of a responsive site like http://www.smashingmagazine.com, using the RWD bookmarklet: http://responsive.victorcoulon.fr

- Demonstrate media queries in CSS using the code in the slide deck
- We can make web pages look entirely different, if we want to, using responsive design

- A full list of possible media queries can be found at: http://www.cssmediaqueries.com

## Javascript and jQuery

- Talk through the slide deck explaining that Javascript is a scripting language that we can use to write applications that run in a web browser
- We've already played with jQuery to do our accordion on the Profile Page
- Reiterate how we include javascript it in a page, and how statement and comments are written
- Reiterate what the DOM is, and that the Document Ready function instructs the browser to wait until the DOM is loaded before executing code that might alter it

- Introduce the Javascript developer console, and explain that it is a development, diagnosis and testing tool
- We'll be using it as a learning aid
- We can log information from our javascript code here to make sure the browser's doing what we want it to do

- Explain that jQuery is a prewritten set of commonly required tasks written in javascript, stored as a set of 'functions'
- It's robust, fast and cross-browser compatible
- Have the sudents open the console on their Profile Page and code along with them playing with some jQuery functions to alter the page, e.g.:
	- `$('body').css('background','red');`
	- `$('h1').text('Hello world!);`
	- `$('h3').remove();`
	
### Programming Concepts in Javascript

- Follow the slide deck, describing:

#### Variables and Data

- That we can tell the browser to remember data for us in javascript
- We call them variables, because we can change them later
- To make a variable, we just give it a name, then afterwards assign the data to it
- We can store:
	- Strings (of text)
	- Whole or decimal numbers (integers and floats) on which we can perform arithmatic
	- Booleans (true or false)

- Highlight that variables can be made empty with `null`
- Variables that have no value are both `null` and `undefined`

- We can convert between data types, for example:
	- If we have a number, we can make it a string just by concatenating it with an empty string like ` + ''`, or using `.toString()`
	- If we `prompt()` the user for their age, and they type in `31` we can `parseInt()` that value into a whole number

- Demonstrate that performing `parseInt()` on a non-numeric value gives us `NaN`, which itself has a `typeof` number. Explain that this is of course confusing, and that that's okay

- Have the students do the **Variables By Line** exercise, code along afterwards explaining the solution


### Conditional Logic

- We need two things to make programs work: comparisons and conditions

- Comparisons are what we use to establish truth, e.g.:
	- Does the username exist? Does it match the password?
	- Is the user aged 18 or over?
	
- Conditions are what we do once we know that truth, e.g.:
	- If the username matches the password, let the user in
	- If the user is 18 or over, let them in

- Using conditional logic, we can give the computer instructions to make decisions on our behalf
- Work through the slides, describing how we write `if` statements in javascript

- Have the students do the **If Else** exercise, code along afterwards explaining the solution
- Have the students do the **Conditionals** exercise, code along afterwards explaining the solution

- Have the students do the **Favorite Color** exercise, code along afterwards explaining the solution


### Functions

- Functions are chunks of code we can store like variables for use later, again and again
- Show examples of simple functions that we might write to save repeating ourselves in our code

### Javascript Objects

- Work through the slides describing the purpose and syntax of javascript objects
- Use APIs as an example of when objects become really useful in organising and moving data

## Case Study Page Building and Testing

- Help the students carry on styling, laying out and testing their Case Study pages