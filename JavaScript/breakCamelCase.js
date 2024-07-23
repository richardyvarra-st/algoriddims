function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

// The selected code snippet is a JavaScript function that takes a string as input and returns a modified version of the string. The purpose of this function is to insert a space before each uppercase letter in the string, effectively breaking up camel case.

// The function uses the replace() method, which is a built-in JavaScript function for manipulating strings. It takes two arguments: a regular expression pattern and a replacement string. In this case, the regular expression pattern /([a-z])([A-Z])/g is used to match any lowercase letter followed by an uppercase letter.

// Let's break down the regular expression pattern:

// ([a-z]) captures any lowercase letter and stores it in a group.
// ([A-Z]) captures any uppercase letter and stores it in a separate group.
// /g is a flag that indicates the pattern should be applied globally, meaning it will match all occurrences in the string.
// The replacement string '$1 $2' is used to replace the matched pattern with the captured groups, separated by a space. $1 represents the first captured group (the lowercase letter), and $2 represents the second captured group (the uppercase letter).