export default function App() {
  const bodyElement = document.querySelector("body");

  const appContent = document.createElement("div");
  appContent.classList.add("h-full");
  appContent.classList.add("w-full");
  appContent.classList.add("bg-[#0F0F0F]");
  appContent.classList.add("flex");
  appContent.classList.add("flex-col");
  appContent.classList.add("items-center");
  appContent.classList.add("justify-center");

  appContent.innerHTML = /* html */ `
    <div class="w-[400px] h-[400px] flex flex-col">
      <div class="flex flex-row">
        <div class="flex flex-row bg-[#141414] h-[50px] flex-1 border-1 border-[#282828] rounded-xl"></div>
      </div>
    </div>
  `;

  bodyElement.appendChild(appContent);
}