# GIPHY API UI

A simple application that lets you search for GIFs using the GIPHY API.

<p align="center">
  <img src="./src/images/demo.gif" alt="Custom Image Carousel Demo" width="100%">
</p>

**[Click here to open the live demo!](https://whatisaprocoder.github.io/odin-giphy-api-ui/)**

## About

This project was built to learn asynchronous JavaScript concepts from The Odin Project's curriculum. It demonstrates how to fetch data from an external API and update the UI dynamically.

The code follows a clean architecture approach with separation of concerns:

- **API Layer**: Pure functions that return Promises (GIPHY.js)
- **UI Layer**: Handles user interactions and updates the display (App.js)

## Features

- Search for GIFs using keywords
- Get random GIFs with one click
- Clean, responsive UI with a dark theme

## Code Structure

- **src/index.js**: Main entry point that initializes the application
- **src/js/core/GIPHY.js**: Handles API interactions with GIPHY
  - `translateAPI()`: Returns a Promise that resolves with a GIF URL based on search keywords
  - `randomAPI()`: Returns a Promise that resolves with a random GIF URL
- **src/js/ui/App.js**: Manages the UI and event handling
  - Creates the application interface
  - Sets up event listeners for search and random buttons
  - Handles the UI updates based on Promise resolutions
- **src/template.html**: Basic HTML structure with a content container

## Key Concepts

```javascript
// Example of Promise-based API module
function translateAPI(text) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${text}`,
    )
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        resolve(data.data.images.original.url);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Example of consuming the Promise in UI code
api
  .translateAPI(searchText)
  .then((url) => {
    // Update the UI with the returned GIF URL
    imagebox.src = url;
    spinner.style.display = "none";
  })
  .catch((error) => {
    alert("Error fetching GIF!");
  });
```

## Tech Stack

- JavaScript (ES6+)
- Tailwind CSS for styling
- Webpack for bundling
- GIPHY API

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Acknowledgments

Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.
