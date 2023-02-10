// The window.onload callback is invoked when the window is first loaded by the browser



window.onload = () => {
<<<<<<< HEAD
    prepareButton()

=======
  prepareButton();
>>>>>>> e8de6dc54d64056b5dbe2f58aa6e4edccc0e97a0

  // If you're adding an event for a button click, do something similar.
  // The event name in that case is "click", not "keypress", and the type of the element
  // should be HTMLButtonElement. The handler function for a "click" takes no arguments.
};

let mode = "brief";

const textBox: HTMLElement | null = document.getElementById("replText");
const historyText: HTMLElement | null = document.getElementById("history");

const handleButton = (e: MouseEvent) => {
  if (
    textBox != null &&
    textBox instanceof HTMLInputElement &&
    textBox.value != null
  ) {
    if (historyText != null && historyText instanceof HTMLDivElement) {
      const args = textBox.value.split(" ");
      switch (args[0]) {
        case "mode":
          mode = args[1];
          console.log(mode);
          break;
        case "load_file":
          break;
        case "view":
          break;
        case "search":
          break;
        default:
      }
      if (mode === "verbose") {
        const newPara: HTMLParagraphElement = document.createElement("p");
        newPara.textContent = `Command: ${textBox.value}`;
        historyText.appendChild(newPara);
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
<<<<<<< HEAD
    console.log("Button was prepared");
    const maybeButton: HTMLElement | null = document.getElementById('submitButton');
    if (maybeButton === null) {
        console.log("Button could not be found");
    } else if (maybeButton instanceof HTMLButtonElement) {
        console.log("event listener added");
        maybeButton.addEventListener("click", handleButton)

    }



}







=======
  console.log("Button was prepared");
  const maybeButton: HTMLElement | null =
    document.getElementById("submitButton");
  if (maybeButton === null) {
    console.log("Button could not be found");
  } else if (maybeButton instanceof HTMLButtonElement) {
    console.log("event listener added");
    maybeButton.addEventListener("click", handleButton);
  }
};
>>>>>>> e8de6dc54d64056b5dbe2f58aa6e4edccc0e97a0

// We'll use a global state reference for now

// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export { handleButton };
