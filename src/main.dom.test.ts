import * as main from "./main";
import * as csv from "./tableCsv";

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

test("trying invalid command in brief mode prints message", () => {
  userEvent.type(input, `boop`);
  main.handleButton();
  const output = screen.getAllByText(
    `Output: Did not recognize command 'boop'`
  );
  expect(output.length).toBe(1);
});

test("mode actually switches the mode", () => {
  userEvent.type(input, "mode verbose");
  main.handleButton();
  let output = screen.getAllByText("Output: Output is now verbose");
  expect(output.length).toBe(1);
  userEvent.type(input, "mode brief");
  main.handleButton();
  output = screen.getAllByText("Output: Output is now brief");
  expect(output.length).toBe(1);
  userEvent.type(input, "mode apple");
  main.handleButton();
  output = screen.getAllByText("Output: Mode must be either brief or verbose");
  expect(output.length).toBe(1);
});

test("csv setting works", () => {
  userEvent.type(input, "load_file petsCSV");
  main.handleButton();
  let output = screen.getAllByText("Output: CSV loaded Successfully");
  expect(output.length).toBe(1);
  userEvent.type(input, "load_file fakeCSV");
  main.handleButton();
  output = screen.getAllByText("Output: CSV failed to load, try again");
  expect(output.length).toBe(1);
});

test("csv viewing works", () => {
  userEvent.type(input, "load_file petsCSV");
  main.handleButton();
  userEvent.type(input, "view");
  main.handleButton();
  let output = screen.getAllByText("Output: See table below");
  expect(output.length).toBe(1);
});

test("basic verbose tests", () => {
  userEvent.type(input, "mode verbose");
  main.handleButton();
  userEvent.type(input, "I like chicken");
  main.handleButton();
  let output = screen.getAllByText("Command: I like chicken");
  expect(output.length).toBe(1);
  output = screen.getAllByText("Output: Did not recognize command 'I'");
  expect(output.length).toBe(1);
});

export {};
