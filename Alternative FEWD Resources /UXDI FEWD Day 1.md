# UXDI FEWD DAY 1

## WELCOME TO UDXI FRONT END

## INSTRUCTOR INTRODUCTION
- Who are you
- What have you done
- How long you've been with GA
- What you'd done at GA

## HOW WE'LL DO THIS
- Encourage class to shout out, interrupt and ask questions

## AGENDA
- Explain the plan of the week
- No homework aside from designing and building a single case study page

## WHAT IS PROGRAMMING
- Why we teach web development to beginners
- The blurred boundar between web sites and web applications


## WEB DEVELOPMENT
- Web development is different to traditional software development
- No sealed boxes on shelves!
- The back end application lives on a server
- A server is another computer connect to the internet elsewhere
- The front is sent to the user's computer and runs in the browser
- As such, that code can me scrutinised


## HOW THE WEB WORKS
- Your computer requests a page
- It communicates with a DNS server to find out the IP address
- Your computer sends a messsage across a series of 'hops' until it reaches the server

- Demonstrate with Traceroute in Network Utilities

- The server sends HTML and other assets back to your computer
- If your computer already has those files cached, they aren't resent
- The browser parses the HTML: Reads through it, interpreting the code
- The browser renders the page
- All browsers render pages slightly different because they're built by different people
- Some browsers are more popular than others, depending on who uses them (this changes over time)
- Modern browsers have excellent diagnostic tools build in to help us figure out what's being rendered

- Demonstrate with FireFox and view


## STAGES OF DEVELOPMENT

- Design, Development & Test
- Design and testing, if you're doing things right, should take the most time

- Having a solid functional spec, wireframes and style guide before starting to code is really important
- Thorough testing of code is essential, but it's unwise for a developer to be the only person to test their own code


## PLAY WITH SOME LANGUAGES

- Have the students open codepen.io and start a New Pen

- Codepen is a 'sandbox' or 'playpen' tool, for trying out bits of code on the web

### HTML

- Introduce HTML, explaining what each letter of the acronym stands for: Hypertext Markup Language
- It originated in the late 1980s, when (Sir) Time Berners-Lee was working for the computers services department at CERN
- He pioneered the idea of linking text in academic documents stored on a central network, to make it easier for researchers in disperate locations to pool knowledge
- More: http://www.w3.org/People/Raggett/book4/ch02.html

- HTML is constructed of elements, each comprising a start tag and an end tag, with content in between
- That content can be text, or other elements - they can be nested
- We use it to give the browser the structured content of a web page
- By 'marking up' content, we are inferring context upon it - explaining its meaning and purpose to the browser
- We humans are very good at pattern recognition, machines less so
- HTML allows to provide information about our content to the machine, for styling, SEO, javascript, and accessibility

- Have the students write simple elements in codepen to see how the browser renders them

- Begin with just plain text: Hello world
- Add extra spaces in between 'Hello' and 'world' to demonstrate that the browser only renders one
- Add carriage returns in between the words, demonstrating the same thing

- Browsers ignore 'white space' beyond one character in HTML (and, for that matter, CSS and JS)
- This means we can use tabs, spacing and line breaks in HTML to the our code easier for us to read - the browser doesn't care

- Browsers have a set of default styles already in place, telling them how to render common HTML elements
- `<h1>Hello world</h1>` renders in large, bold type with margins
- `<p>Hello world</p>` renders in large, bold type with margins
- `<ul><li>Hello</li><li>world</li></ul>` renders as a bulleted list

### CSS

- Introduce CSS, Cascading Style Sheets, which we use for the visual styling of a web site
- It was introduced in 1998 to make the appearance of web pages more consistent and maintainable
- We no longer do formatting or styling in HTML, we do it all in CSS

- Have students style their h1 element with a simple declaration like:
	h1 {
		color: red;
	}
- The selector ('h1'), tells the browser which elements we'd like to style
- Between the brackets we tell the browser what about that element we'd like to change, and what we'd like to do to it

### JS

- We use Javascript to add interaction and behaviour to web pages; any interaction beyond simple clicking of links is probably javasript
- Demonstrate the example code in the slide, but don't have the students do it


## ACCESSBILITY

- Accessibility is an essential consideration on the modern web, from design, development AND testing perspectives
- Not only is it best practise, it's also the law:
	- The Americans with Disabilities Act in the USA
	- The Disability Discrimination Act in the UK
- The impact of accessibility goes beyond helping people with disabilities use your software:
	- Accessible markup is better for SEO, and usually more performant and efficient
	- Software developed with accessibility in mind is more accessible to *everyone*
	- Whitepaper: http://www.wsi-ic.com/PConnolly/FileContent/improve_website.pdf

### DIFFERENT KINDS OF IMPAIRMENT

- Cognitive impairments aren't just medical conditions; think about tiredness, hurriedness, distraction, inebriation

- Visual impairments are more common than you think. 8% of men and 0.5% of women are red-green colourblind.
- Think about that when designing validation and error messages; if colour is the only differentiator, it won't work
- Colour contrast radios and type size have a profound effect on usability and accessibility
- Modern browsers allow users to zoom text, or the whole page, or parts of the screen
- Screenreaders are available (JAWS And NVDA for Windows), and VoiceOver built into Macs (press cmd+F5!) and iOS devices.
- Valid, properly structured HTML reads very well in screenreaders

- Motor impairments can be as simple as being in motion (using an app on a bus) or being intoxicated
- They can also be more severe, meaning that not every user will be using a mouse
- Consider keyboard navigation (using the tab key to move through a web site or software interface)
- The web allows us to visually represent which element is currently selected (:focus and :active states in CSS)
- Touch and click targets should be well defined, and large enough for less able users

- Typography plays an important part of usability and accessibility.
- Type color, size, font, leading, kerning and so on can seriously affect legibility - ask a dyslexic
- Icons can be very useful but can often be abused
- Look at the three icons beneath each typeface on Google Fonts (for 'See all styles', Quick Use' and 'Pop Out') - they're indecipherable
- Applications commonly use a 'save' icon of a 3.5" floppy disk!
- The call icon on modern smartphones looks like an old curved handset - another anachronism
- Icons for delete, cancel, stop and close often look identical. This can be confusing.


## DESIGN TO CODE

- The process of taking a design to a code-complete state can take place in a number of ways
- It is often a interpretation job - you're translating the product from a series of design and instructions to machine-readable code
- As a developer, you may be provided with something as vague as a scamp, or as replete as a complete stack of PSDs with a comprehensive functional specification
- A good developer can work with either
- Provide some case studies of web sites that you've worked on, showing and talking through:
	- PSD comps
	- Wireframes
	- Functional specs
	- Style guides


## BUILDING A BASIC WEBSITE

- Show the students the completed profile page exercise in Chrome
- We're going to start building this today
- Beginning with the HTML, then CSS tomorrow
- Starting with a blank document in Sublime Text
- Save it in a new folder called 'Profile' in your Documents folder
- Name like 'index.html'
- We usually use short, lowercase filenames with no spaces, to prevent problems later on, on the web

- Code along with the class through the markup of the profile page index.html, covering:

	- The `<!doctype html>`, what it is, and how it helps the browser
	- The `<html>`, `<head>` and `<body>` elements, and what goes in the latter two
	- `<title>` for the title of the *page* (not the whole site), and its appearance in the browser and search results
	- That `<h1>` should only be used once per page, for the title of the page in the body
	- `<h2>`-`<h6>` to identify the structure and importance of the rest of the content on the page
	- `<p>` for each paragraph of text
	- `<ul>`, `<ol>` and `<li>` for unordered and ordered lists
	- Introduce attributes using `<a href="...">` to create a list of links
	- Reinforce this with `<img src="..." alt="..." />` using a photo of the student
	- Discuss different image formats, and what benefits and drawbacks they have






































