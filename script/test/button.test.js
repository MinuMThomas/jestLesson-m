/**
 * @jest-environment jsdom
 */


const buttonClick = require ("../button");

//new Jest directive, beforeEach().
// This is something  that runs before each test is run. 
// Now there are other directives too that  comprise what we call the life cycle of a test. 
// set up our mock DOM in beforeEach(),  again beforeEach() takes an arrow function,  
// but that's the only argument that it takes we  don't have to pass in a description this time.
// And then I'm going to set document.body inner  HTML just to a paragraph with the ID of "par"

beforeEach(() => {
    // document.body.innerHTML = "<p id='par'></p>";



//     add in the Node fs module.  
// This is a file system handling module built into  Node that allows us to open read and write files.
// Now you don't need to install fs with npm,  because it's part of Node standard library.  
// So now we've created a reference let's use  fs to read the contents of our HTML file  
// and store it in a variable which  we're calling file contents.
// Now here we're going to open the index.html file  
// using the utf-8 character set and  store the contents in our variable. 
// You might wonder why we haven't specified a  path to open our HTML file. That's because,  
// by default, the tests run from Node's root  directory, which is where our index.html file is. 
// Now, all we need to do is attach this to the  DOM. And here's the recommended way of doing it.
// First, we open the document, we write  our file contents and then we close it.
// You can just remember this as  boilerplate script, you don't  
// necessarily need to change this each time. Now if all this has worked, our tests  
// should continue to pass with no  errors. So let's try them now.
// And as we can see when we run, 'npm test' then our  single test passes. Let's just add in another test  
// to confirm that we are actually reading the  contents of index.html. We'll add in a test  
// to see if our <h1> tag exists. So beneath our,  "expect p content to change" test, but still  
// inside the describe block, add the following test. We're going to say, 'test("h1 should exist", ) => '.
// We're then going to pass in our expect,  and in our expect we're going to get  
// document.getElementsByTagName of h1 and  we're going to get the length of that. 
// And we're going to expect that length to be 1. 
// This test gets all of the h1 tags and stores them  in a special kind of array. If the h1 exists,  
// then the length of the array will be 1. If two h1  tags existed the length would be two, and so on.
// So if we save that and then run our tests.
// Hopefully, our test should pass. Because the  h1 should now be detected in our loaded HTML,  
// and we can see that both of our tests do  pass. But try deleting the h1 from index.html,  

    let fs = require ("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
})