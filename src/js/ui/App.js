import searchIcon from "../../icons/search_icon.svg";
import randomIcon from "../../icons/random_icon.svg";
import blankImage from "../../images/blank_image.png";
import GIPHY from "../core/GIPHY";

export default function App() {
  const content = document.querySelector("#content");
  content.classList.add("h-full");
  content.classList.add("w-full");

  const appContent = document.createElement("div");
  appContent.classList.add("h-full");
  appContent.classList.add("w-full");
  appContent.classList.add("bg-[#0F0F0F]");
  appContent.classList.add("flex");
  appContent.classList.add("flex-col");
  appContent.classList.add("items-center");
  appContent.classList.add("justify-center");

  appContent.innerHTML = /* html */ `
    <div class="w-[500px] flex flex-col items-center justify-center max-sm:w-[350px]">
      <div class="flex flex-row w-full select-none">
        <div class="flex flex-row bg-[#141414] h-11 flex-1 border-1 border-[#282828] rounded-full">
          <div class="text-[#FFF0FF] flex flex-row justify-center items-center font-semibold ml-5 text-[1.125rem] max-sm:text-[1rem]">GIPHY</div>
          <div class="flex flex-row flex-1 rounded-full border-1 border-[#282828] bg-[#1E1E1E] m-1 outline-none ml-5 w-full text-[#D7D7D7] pl-5 text-[1.125rem]">
            <input id="searchbox" type="text" placeholder="Search" class="h-full outline-none w-full max-sm:text-[1rem]"/>
            <div id="search-button" class="rounded-full bg-[#282828] w-12 flex flex-row items-center justify-center p-3 transition-all hover:bg-[#3c3c3c] active:bg-[#333333] active:scale-110 select-none max-sm:hover:bg-[#282828]">
               <img src="${searchIcon}">
            </div>
          </div>
        </div>
        <div id="random-button" class="h-full w-16 bg-[#1D1D21] border-1 border-[#282828] ml-2 flex flex-row items-center justify-center rounded-full hover:bg-blue-600 active:bg-blue-700 transition-colors select-none max-sm:hover:bg-[#1d1d21]">
          <img src="${randomIcon}" class="h-6">
        </div>
      </div>
      <div class="w-full bg-[#141414] flex-1 rounded-2xl mt-3 border-1 border-[#282828] p-1 relative">
        <div class="spinner"></div>
        <img id="imagebox" class="w-full rounded-xl object-cover border-1 border-[#1b1b1b]" src="${blankImage}">
      </div>
      </div>
  `;

  content.appendChild(appContent);

  handleUserActions();
}

function handleUserActions() {
  const searchbox = document.querySelector("#searchbox");
  const searchButton = document.querySelector("#search-button");
  const randomButton = document.querySelector("#random-button");
  const imagebox = document.querySelector("#imagebox");
  const spinner = document.querySelector(".spinner");

  const api = GIPHY();

  searchButton.addEventListener("click", () => {
    const text = searchbox.value;
    if (text != "") {
      spinner.style.display = "block";
      imagebox.src = blankImage;
      api.translateAPI(text).then(url => {
        imagebox.src = url;
        spinner.style.display = "none";
      }).catch(error => alert(error));
    }
  });

  randomButton.addEventListener("click", () => {
    spinner.style.display = "block";
    imagebox.src = blankImage;
    api.randomAPI().then(url => {
      imagebox.src = url;
      spinner.style.display = "none";
    }).catch(error => alert(error));;
  });


  document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      const text = searchbox.value;
      if (text != "") {
        spinner.style.display = "block";
        imagebox.src = blankImage;

        api.translateAPI(text).then(url => {
          imagebox.src = url;
          spinner.style.display = "none";
        }).catch(error => alert(error));

        searchButton.classList.add("bg-blue-700");
        searchButton.classList.add("scale-110");

        setTimeout(() => {
          searchButton.classList.remove("bg-blue-700");
          searchButton.classList.remove("scale-110");
        }, 250);
      }
    }
  });
}