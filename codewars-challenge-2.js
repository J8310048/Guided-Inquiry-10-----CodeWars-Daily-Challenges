// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

// function flickOfTheWrist() {

// }

//Thinking Space
// // what I want is to make a function that will check for the variable "flick" and immediately switch the boolean values from true to false. So maybe make an if else statement saying if an empty string contains the variable flick, pass the boolean value of false to every other variable in the array. What I can do is assign the variable flick with the value false and just automatically pass that to every other variable. But how do I do that?

// function flick () {
//     let word = true;
//     let flick = false; 
// }



/*
Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
*/

let array = ['codewars', 'flick', 'code', 'wars'];

function flickSwitch(arr) {
    //   return [];
    for (let i = 0; i < arr.length; i++) {
        if (array === 'flick') {
            return true
        } else {
            return false
        }

    }
}

console.log(flickSwitch(array));

//I wasn't able to solve it, but I feel like I'm missing something. I wanted to assign boolean values to each value in the array using a for loop so it'll iterate over each value in the array in order for the assignment to happen. But I don't know how to write that off of memory.