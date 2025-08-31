# GIPHY API UI

A simple application that lets you search for GIFs using the GIPHY API.

<p align="center">
  <img src="./src/images/demo.gif" alt="Custom Image Carousel Demo" width="100%">
</p>

**[Click here to open the live demo!](https://whatisaprocoder.github.io/odin-giphy-api-ui/)**

## About

This project was built to learn asynchronous JavaScript concepts from The Odin Project's curriculum. It demonstrates how to fetch data from an external API and update the UI dynamically.

## Features

- Search for GIFs using keywords
- Get random GIFs with one click
- Clean, responsive UI with a dark theme

## Code Structure

- **src/index.js**: Main entry point that initializes the application
- **src/js/core/GIPHY.js**: Handles API interactions with GIPHY
  - `translateAPI()`: Searches for GIFs based on keywords
  - `randomAPI()`: Fetches random GIFs
- **src/js/ui/App.js**: Manages the UI and event handling
  - Creates the application interface
  - Sets up event listeners for search and random buttons
- **src/template.html**: Basic HTML structure with a content container

## Tech Stack

- JavaScript (ES6+)
- Tailwind CSS for styling
- Webpack for bundling
- GIPHY API

## Key Concepts

```javascript
// Example of fetch API with promises
fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${text}`)
  .then((response) => response.json())
  .then((data) => {
    // Display the GIF
    imagebox.src = data.data.images.original.url;
  })
  .catch((error) => {
    alert(error);
  });
```

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Acknowledgments

Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.
