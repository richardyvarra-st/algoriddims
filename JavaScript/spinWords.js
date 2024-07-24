function spinWords(string){
    //TODO Have fun :)
    return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
  }

  // The selected code is a concise way to implement a function that reverses the order of letters in words that have a length of 5 or more characters. Let's break it down step by step:

// The code starts with the split() method, which splits the input string into an array of words. The delimiter used for splitting is a space character (' ').

// The map() method is then called on the resulting array. This method applies a transformation to each element of the array and returns a new array with the transformed values. In this case, the transformation is defined using an arrow function: word => word.length >= 5 ? word.split('').reverse().join('') : word.

// Inside the arrow function, there is a conditional statement (word.length >= 5 ? ... : ...) that checks if the length of the current word is greater than or equal to 5.

// If the condition is true, the code executes word.split('').reverse().join(''). Here's what happens:

// word.split('') splits the word into an array of individual characters.
// reverse() reverses the order of the characters in the array.
// join('') joins the reversed characters back into a single string.
// If the condition is false (i.e., the word has a length less than 5), the code simply returns the original word.

// After the map() method, the join(' ') method is called on the resulting array. This joins all the words back together into a single string, using a space character (' ') as the delimiter.

// Finally, the resulting string is returned as the output of the function.

// To illustrate how this code works, let's consider an example input: "Hello world, how are you today?"

// The input string is split into an array of words: ["Hello", "world,", "how", "are", "you", "today?"].
// The map() method is applied to each word in the array.
// The word "Hello" has a length of 5, so it is reversed to "olleH".
// The word "world," has a length less than 5, so it remains unchanged.
// The word "how" has a length less than 5, so it remains unchanged.
// The word "are" has a length less than 5, so it remains unchanged.
// The word "you" has a length less than 5, so it remains unchanged.
// The word "today?" has a length of 6, so it is reversed to "?yadot".
// The resulting array is then joined back into a string using spaces as delimiters: "olleH world, how are you ?yadot".
// This string is returned as the output of the function.
// Overall, this code provides a concise way to reverse the order of letters in words that have a length of 5 or more characters, while leaving shorter words unchanged.