//Remove Duplicate characters from array of element using filter
var charactersNumbArray = ['a', 1, 'a', 2, '1'];
var unique = charactersNumbArray.filter((value,index,myArray) => myArray.indexOf(value)===index)
console.log(unique)