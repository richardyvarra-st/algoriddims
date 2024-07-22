var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    var arr = [];
    
    for (var i = 0; i < iterable.length; i++) {
      // loop through the iterable
      if (iterable[i] !== iterable[i + 1]) {
        // check if there is a repeating letter

        arr.push(iterable[i]);
        // adding the iterable to the array (push)
      }
    }   
    return arr;
  }

//   Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.