//==========================Write a function that reverses a given string.==============================================================================================================================================================================================================================================


// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Rakesh")) 

//O/P-->hsekaR

//===========================String reverse with reversing of individual words=============================================================================================================================================================================================================================================

// function reverseIndividualWords(s){
//     let result = s.split('').reverse('').join('');
//     return result;
   
// }

// console.log(reverseIndividualWords("Rakesh Kumar Singh Rekha"))
 //Output:-ahkeR hgniS ramuK hsekaR

 //===========================String reverse without using inbult function=============================================================================================================================================================================================================================================
//  function reverseStaring(){
//     var string = "inida is my country";
//     var result = "";
//     for(var i = string.length-1; i>=0; i--){
//         result = result+string[i];
//     }
//     return result;
// }

// console.log(reverseStaring())
//Output-->yrtnuoc ym si adini

//========================Remove Duplicate characters from String================================================================================================================================================================================================================================================
// function removeDuplicateChar(){
//     var string = 'priya riya supriya'
//     let result = string.split('').filter((item,index,array) =>{
//         return array.indexOf(item) == index;
//     })
//     return result;
// }

// console.log(removeDuplicateChar());

//Output-->///[p, r,i,y,a,s,u]

//========================================================================================================================================================================================================================================================================

//String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join().

//Method 1
// function removeDuplicates(){
//     var string = "India is my country (Rakesh Singh)";
//     let result = string.split('').reverse().join('').split(' ').reverse(' ').join(' ');
//     return result;
// }

// console.log(removeDuplicates()); 
/// output:- aidnI si ym yrtnuoc hsekaR( )hgniS

//Method 2
// var reverseWords = function(s){
//     let rev = '';
//     let word = '';
//     for(let c of s){
//         if(c === ' '){
//             rev += word + c;
//             word = '';
//         }else{
//             word = c + word;
//         }
        
//     }
//     return rev + word;
// }

// console.log(reverseWords("Rakesh Kumar Rekha"))   
//Output:-hsekaR ramuK ahkeR

//=================Write a function that finds the longest word in a sentence==============================================================================================================================================================================================================================================

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
//   }
//   console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));

//Outpot-->quick
//============= Given an array containing numbers from 1 to N, with one number missing, find the missing number.===================================================================
// function findMissingNumber(arr) {
//     const n = arr.length + 1;//(added 1 because that number is missing)
//     const Expectedsum = (n * (n + 1)) / 2;
//     const ActualarrSum = arr.reduce((acc, curr) => acc + curr, 0);
//     return Expectedsum - ActualarrSum;
//   }
//   console.log(findMissingNumber([1, 2, 3, 5]));

//Output--->4
  //==================What will be the output of the following code?============================================================
  // for (var i = 1; i <= 5; i++) {
  //   setTimeout(function() {
  //     console.log(i);
  //   }, 1000);
  // }

  //Output:- 
//   6
// 6
// 6
// 6
// 6
