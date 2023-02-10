// The window.onload callback is invoked when the window is first loaded by the browser


import {tableCsv} from "./tableCsv";
window.onload = () => {
    prepareButton()
    display();


    // If you're adding an event for a button click, do something similar.
    // The event name in that case is "click", not "keypress", and the type of the element 
    // should be HTMLButtonElement. The handler function for a "click" takes no arguments.
}

const textBox: HTMLElement | null = document.getElementById("replText");
const historyText: HTMLElement | null = document.getElementById("history");
const handleButton = (e:MouseEvent) => {
    if (textBox != null && textBox instanceof HTMLInputElement && textBox.value != null) {
        if (historyText != null && historyText instanceof HTMLDivElement) {
            const newPara:HTMLParagraphElement = document.createElement("p");
            newPara.textContent = textBox.value;
            historyText.appendChild(newPara);
            textBox.value = ""
        } else {
            console.log ("History could not be found")
        }

    } else {
        console.log("Error, text box could not be found")
    }


}
const prepareButton = () => {
    console.log("Button was prepared");
    const maybeButton: HTMLElement | null = document.getElementById('submitButton');
    if (maybeButton === null) {
        console.log("Button could not be found");
    } else if (maybeButton instanceof HTMLButtonElement) {
        console.log("event listener added");
        maybeButton.addEventListener("click", handleButton)

    }



}

const display = () => {
    console.log("called")
    if (historyText === null) return;
    historyText.appendChild(tableCsv([["1","2","3","4","5"],["6","7","8","9","10"]],false))
}






// We'll use a global state reference for now


// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export {handleButton}
