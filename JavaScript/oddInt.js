/**
 * Finds the integer that appears an odd number of times in the given array.
 *
 * @param {number[]} A - The array of integers.
 * @returns {number} The integer that appears an odd number of times.
 */
function findOdd(A){
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }
    return result;
}
// alternate solution
function findOdd(A) {
    let count = 0;
    let arr = A.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count % 2 !== 0) {
        return arr[i];
      }
    }
  }