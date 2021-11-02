# Tute 08

## 1. Code Review

Take a look at the ReactJS app in `review/`. It is the ReactJS component from lab04.

What would you do to improve this source code? Discuss as a class.

- What is wrong with the style of the source code for this page?
- Make appropriate changes to clean up these DOM elements.

> - Overall pretty good
> - Inline CSS in Card.jsx
> - Incosistent use of JSX and JS file extensions
> - Inconsistent use of semi colons and non semi colons to terminal statements
> - App.js has a redundant wrapper element around the input
> - Many lines are very long and should be moved onto next line

## 2. Types of dependencies

For each of the following dependencies, would you install them as `dependencies` or `devDependencies`?

- `"jest"` >> devDependency
- `"async-lock"` >> dependency
- `"express"` >> dependency
- `"passport"` >> dependency
- `"lint-staged"` >> devDependency
- `"request"` >> dependency
- `"typeorm"` >> dependency

## 3. ReactJS example

Create a folder `exercise3` with `create-react-app` and build a basic react app that uses the server provided for assignment 3 and:

- Allows a user to register for an account on a route `/register`
- Once registered, shows them a 'Welcome' screen on route `/dashboard`.

> See `solutions/exercise3`
> Also use this opportunity to show them how to reset the backend with `npm run reset`

## 4. React Router

`react-router` is a popular library used with React that enables you to navigate to different pages within your application.
There are a couple of core components you will use anytime you're using `react-router`:

- `<Router>` - a component that tells `react-router` how to style URL paths. Usually you will need to use `<BrowserRouter>` and wrap it around your top level component.
- `<Switch>` - a container that holds all your `<Route>` components.
  It will conditionally render a component based on the URL's path.
  You would usually have this in the `App.js` (or equivalent) file.
- `<Route>` - a path to a certain location.
  It renders when the URL is equal to the path specified.
- `<Link>` - a link that you can define in any component.
  It will change the URL to the path you have specified.

More information on these core components are outlined in a [documentation article](https://reactrouter.com/web/guides/primary-components).

Let's look at this example `<Switch>` component:

```js
<Switch>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/topics">
    <Topics />
  </Route>
  <Route path="/">
    <Home />
  </Route>
</Switch>
```

When the URL path is `/about`, we will render the `<About />` component.
Similarly, we will render the `<Topics />` and `<Home />` component when the URL path is `/topics` and `/` respectively.
Now look at this example component which includes `<Link>`s:

```js
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/topics">Topics</Link>
  </li>
</ul>
```

This will render a bullet point list with hyperlinks (`<a>` tags) at `Home`, `About` and `Topics`.
When `About` is clicked, the path will change to `/about` and the `<About />` component is rendered (based on the `<Switch/>` above).

`react-router` also provides some useful hooks. A few notable ones include:

- `useLocation` - gets the URL of the current page.
- `useParams` - gets the URL parameters defined in a `<Route>` component.

For more information on `react-router`, visit [their documentation website](https://reactrouter.com/web/guides/).

Let's put this knowledge to use! Create a folder called `exercise4` with `create-react-app`. Also install `react-router` by calling `yarn add react-router-dom`.
Now, build a React + React Router app that:

1. Has two pages: one at the `"/"` route and another at `"/post/:id"` route. Note that `id` is a URL parameter, assumed to be an integer between 0 to 100.
2. On the `"/post/:id"` page, display the `:id` of the post. (Hint: use the `useParam` hook).
3. On the `"/"` page, display a `<Link>` to `/post/:id`, where `:id` is a randomly generated number. To generate a random integer between 0 and 100, feel free to use this function:

```js
const generateRndInt = () => {
  return Math.floor(Math.random() * (100 - 1) + 1);
};
```

> See `solutions/exercise4`

## 5. React useEffect Hook

In the `exercise5` folder, there is a basic React app that will show the basics of the `useEffect` hook. In the file, there are two React state variables (`aRerender` and `bRerender`) which keep track of how many times they re-render. There is also another React state variable (`effectRerender`) that keeps track of how many times the DOM mutates and renders using the React `useEffect` hook.

Write a React `useEffect` hook with a callback function that increments the `effectRerender` variable. Do not include a dependency array for now.

> See `solutions/exercise5`

Refresh between changing the dependency arrays, to reset the counters.

1. If there is no dependency array, how many times will `effectRerender` update?

> An infinite number of times.

> If there is no dependency array, the callback function will run every time there is a re-render. During the first page render, the callback function will run, and `effectRerender` will increment. This triggers another re-render, as the `effectRerender` variable is a React state variable represented in the DOM. As the DOM re-renders, the callback function will run again. This will repeat (effectively forever).

2. If there is an empty dependency array (`[]`), how many times will `effectRerender` update upon initial render? How many times will `effectRerender` update when you increment `aRerender` or `bRerender`?

> Once. 

> How `useEffect` works is that, after the initial render, the callback function will run every time the variables in the dependency array change. As there is nothing in the dependency array, `effectRerender` will only increment once (During the initial page render).

3. If there is a dependency array with `aRerender` (`[aRerender]`), how many times will `effectRerender` update?

>`aRerender + 1`

>`+ 1` because `useEffect` runs the callback function upon initial render.

4. If there is a dependency array with both `aRerender` and `bRerender` (`[aRerender, bRerender]`), how many times will `effectRerender` update?

>`aRerender + bRerender + 1`

