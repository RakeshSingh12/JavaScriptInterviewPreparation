//Remove Duplicate number from array of element and find the count of an elements using set object
var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
var removeDuplicateNumber = [...new Set(arr)]
console.log(removeDuplicateNumber); // O/P-->55, 44, 67,  8, 65,1,  2,  3, 34,  5
console.log(removeDuplicateNumber.length); // O/P--> 10