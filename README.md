# echoSprint2
### Team members
1. Jsilva13
2. mmongado

Roughly 6 hours total
[github repo](https://github.com/Xzero864/echoSprint2)

## Design Choices
 In order to keep track of a history, a logText function makes a new html paragraph element with the given text. This is not stored as a state variable as this would never really be used and would just be wasting space. Our CSVs are parsed into HTML tables, including support for headers if the CSV chosen had headers in the first place. This CSV function is our only function that is not in the main class. Everything else is just interacting with the DOM and properly formatting the history with outputs. 

 ## Bugs
 There are no known bugs

 ## Tests 
 Tests are seperated into dom tests, and normal tests of the javascript functions. In the javascript tests the only thing that really is testable is the CSV function. We do not need to test for misformatted CSVs as our backend should take care of this, so all we need to do is get the csv. It iterates through the CSV (which is just an 2d array of strings) and takes each row and makes it into an html table element. The test tests both normal functionality and the functionality of headers. <br>

 For dom tests, we test all of the major functioanlity of the program. We have seperate tests for mode, view, load_csv. All of these tests make sure that the dom is properly changed following all of these function calls. Search isn't tested as it is essentially hard coded and also uses the CSV function tested above, this would be changed once the backend is integrated.

 ## Running the program
 To run the program, first compiple the typescript to JS using TSC (or npx tsc) then open up index.html in a browser and the program functions as expected.
 To run the tests just run npm test a
