# Change Plus Plus Workshop

## Introduction

This is a workshop to learn:
- Git, GitHub, and VSCode
- Eslint, Prettier, Husky, and npm
- File structure, architecture, and naming conventions for frontend

## Prerequisites

- [Git](https://git-scm.com/)
- [GitHub account](www.github.com)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)

## Getting Started

1. Clone this repository
2. Open the repository in Visual Studio Code
3. Open the integrated terminal in Visual Studio Code
4. Run `npm install` in the terminal
5. Run `npm start` in the terminal
6. Open [localhost:3000](http://localhost:3000/) in your browser


## Workshop 2 Challenge

###### Miracle Flights wants a basic table that they can randomly generate flight data! They want the following generated:
- Flight Number (6 digits alphanumeric)
- Origin (3 random digits alphanumeric)
- Destination (3 random digits alphanumeric)
- Departure Time (random time between 12:00am and 11:59pm)
- Arrival Time (random time between 12:00am and 11:59pm)
- Flight Duration (random integer between 1 and 8)

###### Here's what you should do:
1) Create a new branch called `[yourname]-workshop2`
2) In `App.tsx` you should generate a random flight using faker functions when you click a button (hint: try creating functions to do this, bonus if you create those functions in a util folder)
3) The flights should be stored in a state variable and sorted by departure time in ascending order in a useEffect
4) Create a new component called `FlightTable.tsx` and pass the flights as props
5) In `FlightTable.tsx` you should display the flights in a table
6) Create a new component called `FlightRow.tsx` and pass the flight as props, the row should display the flight data in the table
7) If you have time, save the flights to local storage so that when you refresh the page, the previous flights are still there

