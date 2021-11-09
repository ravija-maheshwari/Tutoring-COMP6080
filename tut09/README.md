### Task 1 - Working with SVGs

```
To see the SVG, open `exercise/src/svg.html` in a browser
```

Create an SVG element in `exercise/src/svg.html` for a hamburger menu icon that looks identical to `images/hamburger.png`. The viewbox you should use is `0 0 100 100`, and the SVG should have dimensions 50 x 50 pixels.

![image](images/hamburger.png)

### Task 2 - Testing components

```
To see the component in action: `yarn start`
To run the sample testing suite: `yarn test`
```

For this exercise, we will be building a menu bar. It consists of a hamburger icon that, when clicked, opens a menu with a list of links. See below for the menu in its closed and open states.

Build the `MenuButton` and `MenuItem` components with accompanying component tests.

**Closed state**

![image](images/closed.png)

**Open state with three items**

![image](images/open.png)

#### `MenuButton` component

This component will take two inputs:
* `open` boolean value which indicates whether the menu is open or closed
* `onClick` event handler which is triggered when the button is clicked

To ensure the menu is accessible, the button should have an `aria-label` attribute (since we are using an image button without text). It should also have an `aria-expanded` attribute that indicates whether the menu is expanded or collapsed.

You may use your SVG from Task 1 or `images/hamburger.png`.

#### `MenuItem` component

This component will take two inputs:
* `title` string value which is the text to be displayed in the menu item
* `onClick` event handler which is triggered when the button is clicked, with `title` as an input parameter

Note: the `onClick` event handlers of `MenuButton` and `MenuItem` are **not** the same

#### Bringing it all together with the `Menu` component

Now, use the previously constructed `MenuButton` and `MenuItem` components to construct the full menu. This component only takes one input:
* `items` list of string values which correspond to the menu items

The menu should be closed by default.

### Task 3 - Accessibility Principles

`review.html` is a file that has many things that can be improved in terms of accessibility. Go through the example with your tutor and find as many examples as you can.

> - When including a link in a page, `<a>` tag should encompass text that makes it explicit what the link purpose is e.g. `<p>View the <a href="#">accessibility lecture</a> for this point</p>`
> - Attach `aria-labels` to inputs like text fields and buttons
> - ids should not be duplicated
> - `<!DOCTYPE html>` should be at the top of the HTML file
> - All images should have an `alt` tag with a relevant description
> - There should be use of semantic HTML tags like `<h1>` or `<header>` rather than `<p class="heading-one">` or `<div class="header">`
> - `<label>` should have an associated `for` attribute 
> - Specific `<input>` tags should have certain types, such as with `type="password"`
> - Text colour should be legible, with a high contrast ratio with the background, e.g. changing the colour of the text from red to black
> - `<html>` tag should have an associated `lang` attribute for screen readers and voice assistants
> - HTML tags should always be closed, whether there is another closing tag, or it is self-closing