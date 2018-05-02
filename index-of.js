/*
  Write a function, indexOf, that takes an array and a target value
  and returns the last index where that target value is found. If
  the value is not present in the array, then return -1.
*/

var indexOf = function(arr, val) {
  let found = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      found.push(i);
    } else {//I believe the issue is the else statement. When looping and it checks the first element in arr for val and doesn't find it, it would return -1 immediately. However, the target val could be in the arr, so it needs to loop through every value and when it reaches the end of the arr and the target val is still not found, then it should return -1.
      return -1;
    }
  }
  return found[found.length - 1];
};

console.log(indexOf(['a', 'b', 'c'], 'b'));