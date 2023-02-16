import * as csv from "./tableCsv.js";
import { csvMap, searchResults } from "./mockedJson.js";

/**
 * Calls when the window loads.
 */
window.onload = () => {
  prepareButton();
  prepareKeyPress();
};

/**
 * Gives the "return" button the same functionality as Submit button.
 */
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

let curCSV: Array<Array<string>> | null = null;
let mode = "brief";

/**
 * Called whenever the "submit" button is pressed; splits command into an array of args and handles logic for each one.
 */
const handleButton = () => {
  const textBox: HTMLElement | null = document.getElementById("replText");
  const historyText: HTMLElement | null = document.getElementById("history");
  //
  if (
    textBox != null &&
    textBox instanceof HTMLInputElement &&
    textBox.value != null
  ) {
    if (historyText != null && historyText instanceof HTMLDivElement) {
      const args = textBox.value.split(" ");
      if (mode === "verbose" && args[0] !== "mode") {
        logText(false, textBox.value);
      }
      switch (args[0]) {
        case "mode":
          if (args[1] === "brief") {
            mode = "brief";
            logText(true, "Output is now brief");
          } else if (args[1] === "verbose") {
            mode = "verbose";
            logText(false, textBox.value);
            logText(true, "Output is now verbose");
          } else {
            logText(true, "Mode must be either brief or verbose");
          }
          const modeButton: HTMLElement | null =
            document.getElementById("mode");
          if (modeButton != null) {
            modeButton.textContent = mode;
          }
          break;
        case "load_file":
          if (csvMap.has(args[1])) {
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
          if (curCSV != null) {
            if (searchResults.has(`${args[1]},${args[2]}`)) {
              logText(true, `'${args[2]}' was found in the following rows:`);
              csvProcess(searchResults.get(`${args[1]},${args[2]}`));
            } else {
              logText(true, `Could not find '${args[2]}' in col ${args[1]}`);
            }
          } else {
            logText(true, "Cannot search, no CSV loaded");
          }
          break;
        default:
          logText(true, `Did not recognize command '${args[0]}'`);
          break;
      }
      // add line in between each command
      historyText.appendChild(document.createElement("hr"));
      // clear textbox
      textBox.value = "";
    } else {
      console.log("History could not be found");
    }
  } else {
    console.log("Error, text box could not be found");
  }
};

/**
 * Gets the Submit button and adds a function to be called when it is clicked.
 */
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

/**
 * Turns input CSV into an HTML table and appends it to the history so it can show up on screen.
 * @param inputCSV A 2D array of Strings representing the input CSV.
 * @returns Null if historyText does not exist.
 */
const csvProcess = (inputCSV: Array<Array<string>>) => {
  const historyText: HTMLElement | null = document.getElementById("history");
  if (historyText === null) return;
  historyText.appendChild(csv.tableCsv(inputCSV, false));
};

/**
 * Adds the Command / Output text to the screen by appending to history.
 * @param outPut Boolean true if this text is the output of a command; false if it is the command itself.
 * @param text String to be typed on screen after "Output" or "Command"
 * @returns Null if historyText does not exist.
 */
const logText = (outPut: boolean, text: string) => {
  const historyText: HTMLElement | null = document.getElementById("history");
  const newPara: HTMLParagraphElement = document.createElement("p");
  if (outPut) {
    newPara.textContent = `Output: ${text}`;
  } else {
    newPara.textContent = `Command: ${text}`;
  }
  if (historyText == null) return;
  historyText.appendChild(newPara);
};

export { handleButton };
