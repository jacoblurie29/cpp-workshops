# Change Plus Plus Workshop

## Introduction

This is a workshop to learn:
- React
- TypeScript
- Git
- GitHub
- Visual Studio Code

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
2) In `App.tsx` you should generate a random flight using faker functions when you click a button, this should be added to a list of flights which is a state variable of type `Flight[]`
3) In a useEffect hook, you should sort the flights and update the state variable. You can choose which value to sort it by, make sure the useEffect hook is called when the flights change. Hint: you can use something like `const newList = oldList.sort(...)` function on an array to sort it, google how to sort an array in JavaScript!
4) Create a new component called `FlightTable.tsx` and pass the flights as an array in the props to the component
5) In `FlightTable.tsx` you should display the flights in a table, which will be made up of `FlightRow.tsx` components. Give the table a header row with the column names (think about how you can reuse the `FlightRow.tsx` component to do this)
6) Create a new component called `FlightRow.tsx` and pass the flight as props, the row should display the flight data in the table
7) (optional 1) If you have time, save the flights to local storage so that when you refresh the page, the previous flights are still there
9) (optional 2) If you have time, use css to make the table and webpage look nicer!
10) Push you branch to GitHub and let Jake know when you're all done!


###### Here's some useful links:
- [Faker Documentation](https://www.npmjs.com/package/faker)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [TypeScript and React examples and walk-through](https://www.telerik.com/blogs/getting-started-typescript-react)


###### Reminder:
- If you get stuck, ask for help!
- If you're not sure what to do, ask for help!
- If you're not sure if you're doing it right, ask for help!
- This should only take 1-2 hours, if you're spending more time than that, ask for help!
