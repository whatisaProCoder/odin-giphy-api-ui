import "./css/output.css";
import createTitleBar from "./js/ui/electron_custom_title_bar";

console.log("Application successfully initialised!");

// if building electron app
const buildingElectronApp = true;
if (buildingElectronApp) {
  document.body.style.paddingTop = "30px";
  document.body.style.borderRadius = "0.5rem";
  createTitleBar();
}
