// The window.onload callback is invoked when the window is first loaded by the browser
window.onload = () => {
    prepareButton()


    // If you're adding an event for a button click, do something similar.
    // The event name in that case is "click", not "keypress", and the type of the element 
    // should be HTMLButtonElement. The handler function for a "click" takes no arguments.
}

let history = ""
const textBox: HTMLElement | null = document.getElementById("replText");
const historyText: HTMLElement | null = document.getElementById("history");
const handleButton = (e:MouseEvent) => {
    console.log(history);
    if (textBox != null && textBox instanceof HTMLInputElement && textBox.textContent != null) {
        history = history.concat(textBox.textContent)
        textBox.textContent = null
        if (historyText != null && historyText instanceof HTMLParagraphElement) {
            historyText.textContent = history;
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
    } else if (maybeButton instanceof HTMLButtonElement){
        maybeButton.addEventListener("click",handleButton)

    }
}




// We'll use a global state reference for now


// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export {handleButton}
