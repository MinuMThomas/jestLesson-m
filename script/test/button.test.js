const { TestScheduler } = require("jest");
const buttonClick = require ("../button");

//new Jest directive, beforeEach().
// This is something  that runs before each test is run. 
// Now there are other directives too that  comprise what we call the life cycle of a test. 
// set up our mock DOM in beforeEach(),  again beforeEach() takes an arrow function,  
// but that's the only argument that it takes we  don't have to pass in a description this time.
// And then I'm going to set document.body inner  HTML just to a paragraph with the ID of "par"

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });

})