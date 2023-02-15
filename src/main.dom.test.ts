import * as main from "./main";

// Lets us use DTL's query library
import { screen } from "@testing-library/dom";
// Lets us send user events (like typing and clicking)
import userEvent from "@testing-library/user-event";
import { start } from "repl";

const startHTML = `    <div class="repl-history" id="history"></div>
     <hr />
     <div class="repl-input">
        <input
          type="text"
          class="repl-command-box"
          placeholder="Enter command here"
          id="replText"
        />
        <button class="repl-submit" id="submitButton">Submit</button>
        <button id="mode">brief</button>
      </div>`;

let submitButton: HTMLElement;
let input: HTMLElement;

beforeEach(() => {
  //do we have to set CSV to null and mode back to brief??
  document.body.innerHTML = startHTML;
  submitButton = screen.getByText("Submit");
  input = screen.getByPlaceholderText("Enter command here");
});

// now working
test("trying invalid command in brief mode prints message", () => {
  userEvent.type(input, `boop`);
  main.handleButton();
  const output = screen.getAllByText(
    `Output: Did not recognize command 'boop'`
  );
  expect(output.length).toBe(1);
});

export {};
