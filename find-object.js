/*
  Write a function, findObject, that takes an array of objects, a key,
  and a value, and returns the first object with a key/value pair that
  matches the provided key and value. If no object matches, return null.

  var dogs = [
    { name: 'Scout', breed: 'Husky' },
    { name: 'Lucky', breed: 'Beagle' },
    { name: 'Shadow', breed: 'Husky' },
    { name: 'Molly', breed: 'Collie' }
  ];
  findObject(dogs, 'breed', 'Husky') 
  should return { name: 'Scout', breed: 'Husky' }
*/

var findObject = function(list, key, value) {
  for (var i = 0; i < list.length; i++) {
    if (list[i][key] === value) {//The issue is probably the if statement, I expect it to find the value of breed which is 'Husky' and it should match the passed in value which is 'Husky'. Should return the first object in array.
      return list[i];
    }
  }
  return null;
};

var dogs = [
    { name: 'Scout', breed: 'Husky' },
    { name: 'Lucky', breed: 'Beagle' },
    { name: 'Shadow', breed: 'Husky' },
    { name: 'Molly', breed: 'Collie' }
  ];
console.log(findObject(dogs, 'breed', 'Husky'));
//this is a console log to test the function