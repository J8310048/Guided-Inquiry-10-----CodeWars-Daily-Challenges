// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

let arrayOfWords = ["I", "am", "here"]
let sentence = " "


function smash(words) {
    for (let i = 0; i < words.length; i++) {
        sentence += words[i]
    } if (words == ![words.length - 1]) {
        sentence += words[i] + " "
    } else {
        sentence += words[i]
    }
    return sentence
};

smash(arrayOfWords);

//I got help from one of my peers to do this. We did this on a whiteboard and I understood the power of a for loop, but I still wasn't able to get this to work. I'm having trouble writing what I want to happen.