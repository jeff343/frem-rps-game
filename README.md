# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer

All images (located in assets/images) were provided by Front End Mentor, as well as the page mock up (in the design folder), and the style-guide.


### Links

- Solution URL: [RPS Game](https://github.com/jeff343/frem-rps-game)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

I used this project to help get a better understanding of React. My goal going into the project was to learn how to use context to pass information between components. I was able to implement that by passing and updating the total score with context throughout the project. Following the React documentation I set up the context, context provider, and its reducer in a serparate file and imported them as needed. This allowed me to avoid drilling props down into the child components.

I also decided to try using Styled Componenets in the project and I was very happy with it. I had never used Styled Components before, but it wasn't hard to pick up and I enjoyed being able to create the custom styled components locally. Being able to pass props to the styled components was very helpful as well. 

### Continued development

Although I used context to help handle state, I would like to implement it on a bigger scale in another project to get more familiar with the process. For Styled Components, as I got further along in the project and read more of the documentation I saw there is a lot more offered, such as global themes, that I would like to learn and use in future projects.


### Useful resources

- [React - Dispatch and Context](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context#step-2-put-state-and-dispatch-into-context) - This helped me to set up the score context for my app.
- [Styled Components Documentation](https://styled-components.com/docs) - The documentation for Styled Compnenets I used to learn.





