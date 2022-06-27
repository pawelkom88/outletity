<div style="text-align:center">
<img src="https://outletity.netlify.app/static/media/logo.98cc0efcf2d1a647672e.webp" alt="Outletity logo" width="350" height="120"/>
</div>

## About The Project

<div style="text-align:center">
<img src="https://github.com/pawelkom88/outletity/blob/main/Outletity-gif.gif?raw=true" width="600" height="300" />
</div>

Outletity is a fake fully responsive e-commerce store built with React and Firebase with a focus on
accessibility. Project is still under development.

## Demo

Here is a working [live demo ](https://outletity.netlify.app/)

## How I worked on this project

My goal was to simulate a professional work environment.

- I built this app based on Figma designs:
  [Design](https://www.figma.com/file/HEgT03d9Kht0SUWiPWVvD3/Untitled?node-id=0%3A1)
- I worked with tasks on a Trello board: [Kanban board]()
- I used feature branches and Pull Requests

## How to navigate this project

- Stateful logic: [Link to example code on GitHub]

- Responsive CSS using Sass:
  [Navigation bar](https://github.com/pawelkom88/outletity/blob/main/src/components/header/Header.scss)

- The application fetches data from the Fake Store API: Examples for the request
  [useFetch hook](https://github.com/pawelkom88/outletity/blob/main/src/hooks/useFetch.js) and data
  transformation [to be done]()

- User data is saved in Firebase, which also handles authentication proccess. (to be done)

- Integration tests using React Testing Library: [Link to example test on GitHub] (to be done)

## Why I built the project this way

E-commerce ...

- I didn't use a state management library like Redux on purpose. For this app simple `useState` and
  built-in `useReducer` is sufficient.

- Sass is great for styling. To make styling easier I used variables, mixins, custom breakpoints.

- My plan is to become a front-end developer eventually. I decided to use an existing API rather to
  create a custom server.

- Testing is an essential part of production applications. Testing Library is the go-to library in
  the React community. I covered the essential features of the app with tests.
