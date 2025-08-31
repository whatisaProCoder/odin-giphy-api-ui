import { ActionItem, CustomDropDownMenu } from "@pd200x/custom-dropdown-menu";

export default function createTestingPage() {
  const content = document.querySelector(".content");
  content.innerHTML = /* html */ `
        <button id="my-btn">Click Me!</div>
    `;

  new CustomDropDownMenu({
    menuTitle: "Menu",
    triggerElementID: "my-btn",
    actionItemArray: [
      new ActionItem("Action 1", () => console.log("Menu Action 1 pressed")),
      new ActionItem("Action 2", () => console.log("Menu Action 2 pressed")),
      new ActionItem("Action 3", () => console.log("Menu Action 3 pressed")),
      new ActionItem("Action 4", () => console.log("Menu Action 4 pressed")),
      new ActionItem("Action 5", () => console.log("Menu Action 5 pressed")),
    ],
    height: "215px",
    width: "180px",
    logEvent: true,
  }).setEventListeners();
}
