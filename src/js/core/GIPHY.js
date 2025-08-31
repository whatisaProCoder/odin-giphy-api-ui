import blankImage from "../../images/blank_image.png";

export default function GIPHY(imageReference, spinnerReference) {
  const API_KEY = "GLKQXVFI6RxTcklz8fCSPRiEocVm8p1t";
  const imagebox = document.querySelector(imageReference);
  const spinner = document.querySelector(spinnerReference)

  function translateAPI(text) {
    spinner.style.display = "block";
    imagebox.src = blankImage;

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${text}`, { mode: 'cors' })
      .then(function (response) {
        if (response.ok)
          return response.json();
      })
      .then(function (response) {
        imagebox.src = response.data.images.original.url;
        spinner.style.display = "none";
      }).catch(error => {
        alert(error);
      });
  }

  function randomAPI() {
    spinner.style.display = "block";
    imagebox.src = blankImage;

    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&country_code=IN`, { mode: 'cors' })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        imagebox.src = response.data.images.original.url;
        spinner.style.display = "none";
      }).catch(error => {
        alert(error);
      });
  }

  return { translateAPI, randomAPI }
}