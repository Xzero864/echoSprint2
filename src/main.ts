// The window.onload callback is invoked when the window is first loaded by the browser
import * as csv from "./tableCsv.js";
import { firstCSV, petsCSV } from "./mockedJson.js";

window.onload = () => {
  prepareButton();
  prepareKeyPress();

  // If you're adding an event for a button click, do something similar.
  // The event name in that case is "click", not "keypress", and the type of the element
  // should be HTMLButtonElement. The handler function for a "click" takes no arguments.
};

const prepareKeyPress = () => {
  const body: HTMLElement | null = document.getElementById("body");
  if (body != null) {
    document.addEventListener("keypress", (event) => {
      if (event.code === "Enter") {
        handleButton();
      }
    });
  }
};
const csvMap = new Map();
csvMap.set("firstCSV", firstCSV);
csvMap.set("petsCSV", petsCSV);
let curCSV: Array<Array<string>> | null = null;
let mode = "brief";

const textBox: HTMLElement | null = document.getElementById("replText");
const historyText: HTMLElement | null = document.getElementById("history");

const handleButton = () => {
  if (
    textBox != null &&
    textBox instanceof HTMLInputElement &&
    textBox.value != null
  ) {
    if (historyText != null && historyText instanceof HTMLDivElement) {
      const args = textBox.value.split(" ");
      switch (args[0]) {
        case "mode":
          mode = mode === "brief" ? "verbose" : "brief";
          console.log(mode);
          const modeButton: HTMLElement | null =
            document.getElementById("mode");
          if (modeButton != null) {
            modeButton.textContent = mode;
          }
          break;
        case "load_file":
          if (args[1] in csvMap) {
            curCSV = csvMap.get(args[1]);
            logText(true, "CSV loaded Successfully");
          } else {
            logText(true, "CSV failed to load, try again");
          }
          break;
        case "view":
          if (curCSV != null) {
            logText(true, "See table below");
            csvProcess(curCSV);
          } else {
            logText(true, "CSV wasn't loaded");
          }
          break;
        case "search":
          break;
        default:
      }
      if (mode === "verbose") {
        logText(false, textBox.value);
      }

      textBox.value = "";
    } else {
      console.log("History could not be found");
    }
  } else {
    console.log("Error, text box could not be found");
  }
};
const prepareButton = () => {
  console.log("Button was prepared");
  const maybeButton: HTMLElement | null =
    document.getElementById("submitButton");
  if (maybeButton === null) {
    console.log("Button could not be found");
  } else if (maybeButton instanceof HTMLButtonElement) {
    console.log("event listener added");
    maybeButton.addEventListener("click", handleButton);
  }

  console.log("Button was prepared");
};

const csvProcess = (inputCSV: Array<Array<string>>) => {
  if (historyText === null) return;
  historyText.appendChild(csv.tableCsv(inputCSV, false));
};

const logText = (outPut: boolean, text: string) => {
  const newPara: HTMLParagraphElement = document.createElement("p");
  if (outPut) {
    newPara.textContent = `Output: ${text}`;
  } else {
    newPara.textContent = `Command: ${text}`;
  }
  if (historyText == null) return;
  historyText.appendChild(newPara);
};

// We'll use a global state reference for now

// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export { handleButton };
