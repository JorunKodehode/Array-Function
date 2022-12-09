/* Excercise #1:
      Fix the formatText function below such that it fits the given specification:
        returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
*/
// testrun:
console.log(formatText("    Lorem IPSUM.    ")); // expected output (without quotes): "lorem ipsum."

/**
 * formatText function
 * returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
 */
function formatText(str) {
  str = str.trim().toLowerCase();
  return str;
}

// const formatText = (str) => (str = str.trim().toLowerCase());

/* Excercise #2:
      Change the function in excercise #1 to be an arrow function. 
      If you're getting errors: google javascript hoising. You may need to move the console.log(formatText("      Lorem IPSUM.    ")) from line 7.

      If you're having issues with this excercise, try to first convert the excercise2alternative arrow function below to be a normal named function:
*/

const excercise2alternative = (str) => (str = str.trim().toLowerCase());

console.log(excercise2alternative("    HEI.    ")); // expected output (without quotes): "lorem ipsum."

/* Excercise #3: The autoReply function below takes a function as parameter, call (run/execute) the autoReply function with console.log as callback function.
                 Doing so, you should see "This is an automated response." in the console.
*/

function autoReply(customFunction) {
  customFunction("This is an automated response.");
}
autoReply(console.log);
/* Excercise #3b: Create a function that will display some provided text on the website.
                  For example, assuming you named your function: display
                  I should be able to call (run/execute) it with display("hello world!")
                  That should then display: hello world!
                  on the webpage.

                  And then call the autoReply function with your display function.
*/
const display = (txt) => {
  const hr = document.createElement("hr");
  // adding a variable to the arrow function
  document.body.append(txt, hr);
  // adding text and horisontal line with break to body, html file.
};

display("Hello World! ");
autoReply(display);

/* Excercise #4: Create a function that takes two arguments:
                 1. a callback function
                 2. a string

                 And then call (run/execute) your function
                 (this is similar to Excercise #3 but with a custom message instead of only 
                  "This is an automated response.")
*/
const funcyFunc = (func, str) => {
  func(str);
};

funcyFunc(display, " New string in the html file");

/* Excercise #4b: In excercises 3 & 4 you've been providing named functions as callback functions, 
try to call (run/execute) both functions with anonymous functions instead.
                  Use both the function() {} syntax, and then also arrow function.
*/
funcyFunc(function (anonymousFunction) {
  // Not sure if I understand it correctly
  console.log("Is this an anonymous function?");
}); // kalle på en funksjon uten å oppgi funsjonsnavnet

funcyFunc((anonymousArrowFunction) => console.log("An this?"));

/* Excercise #5: Create a function takes the following parameters:
                 1. An array
                 2. A callback function

                 In your function write code that will loop through a given array,
                 and with each iteration it will call your provided callback function.

                 Example behaviour, lets say you named your function forEach, if we call it with:
                 forEach(threeFruits, console.log) // would display: 
                  apple
                  banana
                  mango
                 or if we call it with:
                 forEach(fiveWords, console.log) // would display: 
                  one
                  two
                  three
                  four
                  five

                (For this excercise please use traditional loops (not array methods), for-loop, while loop, or for-of loop)

                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
function loopThrough(array, callback) {
  array.forEach((element) => callback(element)); // forEach loop
}

function loopThrough2(array, callback) {
  for (element of array) {
    // for-of loop syns jeg var mer leselig
    callback(element);
  }
}

const fiveWords = ["one", "two", "three", "four", "five"];
const threeFruits = ["apple", "banana", "mango"];

loopThrough(fiveWords, console.log);
loopThrough2(threeFruits, console.log);

const loopThrough3 = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    callback(array);
  }
};

loopThrough3(threeFruits, display);
/* Excercise #6: Similar to task 5, but instead of first declaring a function and then writing a loop by hand:
                 Use an array method that loops through an array, and provide a callback function that will either console log or display each array element
                 Resources: https://javascript.info/array-methods
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

                 Bonus task: see if you can get the array-method to also display the index of each element in addition to just the element, for example:
                             apple at index 0
                             banana at index 1
                             and so on...
*/
console.log(threeFruits.length); // outputs 3 (index)
function loopThrough4(array, callback) {
  // created a function with a for-of loop
  for (element of array) {
    // fetches elements of array
    callback(element); // calling back the element
  }
}
loopThrough4(threeFruits, console.log); // outputs the array to console.log
// calling the function and console logs the array
// If I have understand it right

//loopThrough3(display, threeFruits);
// // Tried to fetch the function called display and then add the array to display

/* Excercise #7: In Excercise #6 your task was to iterate through an array and just display the results, in this task try to use an array method that will 
                 Both iterate through an array and also return a new array with each number changed in value, for example:
                 the following (replace someArrayMethod with an actual array method, and yourCallBackFunctionLogic with some code)
                 here it should multiply each element by 3 and then tripleNums should contain all the numbers multiplied by 3:

                 let tripleNums = nums.someArrayMethod(...yourCallBackFunctionLogic...)
                 console.log(tripleNums) // [3,6,9,12,15]
*/

const nums = [1, 2, 3, 4, 5];

/* Excercise #8: Use a different array method that will return a new array based on some filter,
                 For example lets say we just want odd numbers from the nums array: 
                              let oddNumbers = nums.someArrayMethod(...yourCallBackFunctionLogic...) 
                              console.log(oddNumbers) // should display: [1,3,5]


                  Resources: https://javascript.info/array-methods
                             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
const oddNumbers = nums.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNumbers); // output [1, 3, 5]
// num % 2: modulo (%) checks if the num has a remainder when devided by '2'.
// (!)== 0: strict inequality 0 then it is odd.

const oddNumbers2 = nums.filter((num) => num % 2);
console.log(oddNumbers2);
// num % 2: modulo (%) checks if the num has a remainder when devided by '2'.

/* Excercise #9: Open excercise: Look through the list of array methods in the previous excercise Resource links (or google a bit yourself)
                 and try to use some different array methods which you haven't seen before, and/or try to combine (chain together) multiple array methods.
*/
