function rot13(message) {
    return message.replace(/[a-zA-Z]/g, function (L) {
        var charCode = L.charCodeAt(0);
        var baseCharCode = L <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode((charCode - baseCharCode + 13) % 26 + baseCharCode);
    });
}
// *The selected code is a JavaScript function that performs a simple encryption algorithm known as ROT13 (rotate by 13 places). The purpose of this algorithm is to shift each letter in a given message by 13 positions in the alphabet.

// Let's break down the code step by step:

// The function takes a parameter called message, which represents the input string that needs to be encrypted.

// The replace method is called on the message string. It takes two arguments: a regular expression and a callback function. The regular expression /[a-zA-Z]/g matches all alphabetic characters (both lowercase and uppercase) in the message string.

// The callback function is defined using the function keyword. It takes a single parameter L, which represents each matched letter from the regular expression.

// Inside the callback function, the charCodeAt method is used to get the Unicode value of the current letter L. The charCodeAt method returns the Unicode value of the character at the specified index.

// The variable baseCharCode is assigned a value based on whether the current letter L is uppercase or lowercase. If L is less than or equal to 'Z', it means it is an uppercase letter, so baseCharCode is set to the Unicode value of 'A'. Otherwise, if L is greater than 'Z', it means it is a lowercase letter, so baseCharCode is set to the Unicode value of 'a'.

// The next line calculates the new Unicode value for the encrypted letter. It subtracts the baseCharCode from the current charCode, adds 13, and then takes the modulo 26 of the result. This ensures that the new value stays within the range of the alphabet.

// Finally, the String.fromCharCode method is used to convert the new Unicode value back into a character. The encrypted letter is then returned by the callback function.

// To summarize, this code replaces each alphabetic character in the message string with a corresponding letter that has been shifted 13 positions in the alphabet. Non-alphabetic characters remain unchanged.