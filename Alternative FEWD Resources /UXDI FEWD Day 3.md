# UXDI FEWD DAY 3


## DAY 2 RECAP

- CSS Syntax
- Profile Page CSS
- jQuery Accordion
- Case Study HTML

## Further HTML

### HTML Forms & Inputs

- Forms in HTML are made using the `<form>` element containing some of:
	- `<input type="text" />`: Text fields
	- `<input type="checkbox" name="gender" value="female" />` Checkboxes grouped by a name attribute
	- `<input type="radio" name="age" value="25-31" />` Radio buttons grouped by a name attribute
	- `<textarea>` Multi-line text fields
	- `<select>` Drop-down boxes containing `<option value="...">` elements
	- Each labelled with a `<label>` element thats `for` attribute matches the element's `id` attribute
	- We also have the `<input type="button" />`, `<input type="submit" />` and `<button>` elements
- Although we can put these elements into any HTML page, they won't do anything unless we tell the form to post to something in the back end, or some javascript that processes and stores this data

### HTML Embedding

- In HTML5, we can embed video and audio using the `<video>` and `<audio>` elements
- However, different browsers require video and audio encoded in different formats, see: http://diveintohtml5.info/video.html
- Also, these files are quite large, so serving them is bandwidth-intensive
- Instead, we can upload the content to a third party, like YouTube or SoundCloud, and have them serve it using embedding
- These services have a 'Share' option on each video, which provides and `<iframe>` element pointing to the content on their server. It's faster, more efficient, and totally customisable:
	- YouTube: https://developers.google.com/youtube/player_parameters
	- Vimeo: https://developer.vimeo.com/player/embedding
	- SoundCloud: https://soundcloud.com/pages/embed
	- Twitter: https://dev.twitter.com/web

## Further CSS

### Web Fonts

- Fonts on the web used to be limited by which typefaces we could presume the user already had: Web-Safe fonts
- In CSS3, we can provide the browser with our own fonts
- We must make sure we have the correct license
- And like with video and audio, different browsers require different formats
- The FontSquirrel webfont generator will convert any desktop font that we have the right license for into a web font: http://www.fontsquirrel.com/tools/webfont-generator

- However, fonts are fairly complex files, and can be quite large
- Google helpfully provides a free web font service with easy embedding
- Have the students select a font from http://google.com/fonts and embed it into their Profile Page using the 'Quick Use' method:
	- Choose the font, weight and style
	- Copy the `<link>` element into their HTML `<head>`
	- Copy the `font-family` declaration into their CSS for the `h1` element

### Icon Fonts

- Historically, icons on the web were individual images
- After time, we realised we could put all icons on a site into one image file and crop it using CSS - image sprites
- Nowadays, a popular method of using icons is to create a font (like Wingdings) that comprises only icons
- Fontello.com and Fontastic.me help us do this
- Demonstrate by creating and implementing a simple icon font

## HTML Layout Elements

- To create layouts on the web, we establish sections of our content in HTML, then move them into position using CSS
- The `<div>` element has historically been our weapon of choice for this purpose
- It allows us to group elements without providing any more semantic context
- In HTML 5, we have new Sectioning Elements that do the same job, but *do* provide some useful semantic meaning to our content, e.g.:
	- `<main>`
	- `<nav>`
	- `<section>`
	- `<header>`
	- `<footer>`
	- `<aside>`
	- `<article>`
	- ...and more
- Demonstrate with some web sites, by describing the elements used to group sections together

## CSS Layout

- Once we have defined sections of our page, we use a combination of CSS properties to lay the content out, primarily: `display`, `float` and `position`

### Display

- The `display` property affects how the browser renders the element on the page in relation to the other elements surrounding it:
	- `block` is the default for most elements - a box with full width by default
	- `inline` is used for elements sitting next to each other in a row, like words in a sentence
	- `inline-block` is a combination of the two above
	- `none` hides an element, letting the space it occupied be taken up by other elements
	- There are many more, e.g. `table-cell`, etc.
- Also `visibility: hidden` hides a element *without* letting other elements take up the space it used to occupy
- Demonstrate these values in the browser

### Float

- `float` lets us make `block` elements sit next to each other, in a row. It is *very* useful for layout, but it has some side-effects, e.g. a parent whose children are all floating will collapse
- The `clear` property lets us get around some of these side-effects. The two are usually used together

### Position

- Position affects where an element appears on the page, but pulls it out of the normal 'flow' of elements' rendering
	- `static` is an elements default position on the page
	- `relative` positions an element relative to its default position *without* affecting other elements' positions
	- `absolute` positions an element relative to its closest `relative` or `absolute` parent element, *without* affecting other elements' positions. If there is no `relative` or `absolute` parent, the element will be positioned relative to the `<body>` element
	- `fixed` positions an element relative to the browser window - useful for toolbars, etc.
- Once `relative`, `absolute` or `fixed` are used, `left`, `right`, `top` and `bottom` properties move the element around

## Layout Exercise ##

- Code along with the students to produce the **Layout** exercise, first the HTML, then the CSS, explaining how to build up a page like this

## Styling your Case Study page

- Work with the students to use the CSS they've learned to style and lay out their Case Study pages