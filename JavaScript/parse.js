function parseInt(string) {
    const numbers = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90
    };
  
    const multipliers = {
      hundred: 100,
      thousand: 1000,
      million: 1000000
    };
  
    let words = string.split(/[\s-]+/);  // Split on spaces or hyphens
    let number = 0;
    let current = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (numbers[words[i]] !== undefined) {
        current += numbers[words[i]];
      } else if (multipliers[words[i]] !== undefined) {
        if (words[i] === 'hundred') {
          current *= multipliers[words[i]];
        } else {
          number += current * multipliers[words[i]];
          current = 0;  // Reset current for the next set of numbers
        }
      }
    }
  
    // Add any remaining current value to the total number
    number += current;
  
    return number;
  }
  
  // Test cases:
  console.log(parseInt('one'));                // Output: 1
  console.log(parseInt('twenty'));             // Output: 20
  console.log(parseInt('two hundred forty-six'));  // Output: 246
  
  