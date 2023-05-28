## 🧙‍♂️ courses-app

What you are looking at is a Vuejs 3 app which I've called "Courses App". There are two pages. One displays the list of all available courses and another one reflects all the detailed information about the particular course. Click on the course you'd like to dive into the most and go to the course detail page where you can find the lessons with the videos attached.

[Live Demo](https://courses-app-beta.vercel.app/)

## Tech Stack

**Client:** Vue 3, Vue Router, Pinia, Typescript

**Server:** Provided by Genesis

## App's architecture

To organize the code, I've decided to go with the Feature-Sliced Design (FSD) approach. By following this particular approach, I've created "layers" which are standardized across all projects and vertically arranged.

Let's take a look at each layers which have been used in this app:

**app/** contains the main logic for initializing the app, handling routing, and managing styles.

**pages/** holds the individual pages of your app (currently there are 4 pages).

**widgets/** are the blocks of pages with specific actions.

**features/** contains parts which are responsible for app's functionality. Currently has only "pagination" feature which is used on the home page.

**entities/** contains components related to the representation of business entities.

**shared/** stores generic UI components that are shared and used throughout the app + api service which handles communication with external APIs and provides methods for making API requests.

**store/** is set as a separate layer for usability purposes.

## Run Locally

Clone the project in the way most convenient for you

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```