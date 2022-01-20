# Setup React App

- create client folder with npx create-react-app .
- copy and paste assets from complete project.
- npm start

## Spring Cleanings

- In src remove the following files:
- App.css, App.test.js, logo.svg, reportwebvitals.js, setutest.js and fix app.js, index.js

## Title and Favicon

- Change the title in public/index.html
- Replace the favicon with resource (favicons)[http://favicons.io]

## Normalize CSS and Global Styles

- Import Normalize CSS  npm install normalize.css
- Import 'normalize.css' in index.js, SET BEFORE 'index.css'

## Landing Page

- react router and styled components right after
- create pages directory in the source
- for now Landing.js
- create component (snippets extension) - rafce

## Working with StyleComponents

- Install styling components to the application with npm install styled-components
- then import to the application.
- import styled from 'styled-components'

<!-- 
const El = styled.el`
 -->

- The folder wrapper will contain all the styles for the application, create the style with styled component and then export it
- Go to the component, import the Wrapper into the application and done.

## React Router 6 and Error Pages

- Next step is to work on First Component, Logo & Images, React Router and Error Page.
- Install react router into the application using npm install history@5 react-router-dom@6
- import { BrowserRouter, Routes, Route, Link } from 'react-router'.
- Create the index.js inside pages and components and do the imports there, than export it to the App.js

## Creating the Register Page with React {useState, useEffect} from 'react'

- Get the logo, get the css wrapper, and eventually the context for the application.