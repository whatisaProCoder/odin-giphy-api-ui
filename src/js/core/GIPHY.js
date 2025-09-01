export default function GIPHY() {
  const API_KEY = "GLKQXVFI6RxTcklz8fCSPRiEocVm8p1t";

  function translateAPI(text) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${text}`, { mode: 'cors' })
        .then(function (response) {
          if (response.ok)
            return response.json();
        })
        .then(function (response) {
          resolve(response.data.images.original.url);
        }).catch(error => {
          reject(error);
        });
    })
  }

  function randomAPI() {
    return new Promise((resolve, reject) => {
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&country_code=IN`, { mode: 'cors' })
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          resolve(response.data.images.original.url);
        }).catch(error => {
          reject(error);
        });
    });
  }

  return { translateAPI, randomAPI }
}