
# UXDI FEWD DAY 2


## DAY 1 RECAP

- What is programming
- How the web works
- Stages of development	
- HTML, CSS & JS overview
- Accessibility
- Design to code
- Basic HTML

## CSS

- Browsers parse HTML and create a map of the elements in the markup called the DOM: the Document Object Model
- This model is what we use to tell the browser how to display the page

- Work through the markup for the Profile Page, styling it up as per the CSS

- Begin with attaching the HTML file to the CSS file using the `<link>` element and creating a new, blank style.css

### CSS Syntax

- CSS files are a collection of statements:
	- Each statement comprises a selector, which targets an element
	- And one or more declarations, which say:
		- What property of that element we want to change, and
		- What value we want to change it to
- Comments are written between `/*` and `*/`

### CSS Selectors

- We can target elements by using several methods:
	- The element's name
	- The element's class or id attribute
	- The element's parent elements (decendent selector)
	- Any combination of the above
- There are many ways to select elements; the more specific the method used, the more important the statement is

### CSS Properties

- Properties are what we can change about an element.
- There are many: http://docs.webplatform.org/wiki/css/properties

### CSS Colours

- Colour on computer screens is represented by three tiny lamps per pixel: one red, one green and one blue
- By controlling the power of each of these lamps, we can represent different colours on the screen:
	- All full on: white
	- Red full, blue off and green off: red
	- Red full, green full, blue off: yellow
	- And so on
- We can control each lamp by 256 degrees: 0-255
- 256 x 256 x 256 = 16,777,216 possible colours

- In CSS there are several ways of communicating these values to the browser:
	- Hexadecimal, using three base-16 values, preceded by a # hash: http://colorpicker.com
	- RGB: Using three values between 0 and 255, comma separated, in brackets preceded by rgb
	- RGBa: As above, but with an extra parameter: Alpha
		- The alpha level is the transparency of the colour, between 0 and 1
	- Name: There are 148 named colours in the CSS specification: http://colours.neilorangepeel.comq§

### The CSS Box Model

- Elements in CSS are boxes constructed of several layers that affect their size and position:
	- Width and height, governing the space that an element's contents can occupy
	- Padding, which is space between the element's contents and its...
	- Border, a solid, dotted or dashed line between the element's padding and its...
	- Margins, areas around the sides of an element that no other element can occupy
- Show examples of how padding, borders and margins are used to achieve typical layouts in CSS
	- Header/line/paragraph
	- Button navigation

### jQuery Accordion

- As a brief introduction to Javascript, we'll make the H3 elements in the profile page show and hide the section they head
- First, write out what we want the javascript to do in English pseudocode - these will become comments in our JS
- Next, code along the provided main.js explaining what each part of each statement is doing

### Marking up the Case Study page

- Spend the after noon having students create a new HTML file to begin work on their case study page
- Help each student to slice up their design into elements and decide which elements to use
- No styling yet - we'll do that on Day 3
