//JavaScript Coding Interview Questions

//============================================================================================================
// console.log(null == undefined)
//Output-->true
//=============================================================================================================
// let a = [];
// let b = [];
// console.log(a==b); //false
// console.log(a===b); //false
//Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.

//===============================================================================================================
// let a = [];
// let b = a;
// console.log(a==b); //true
// console.log(a===b); //true
 //Explaination : Here we are assigning a to b, where memory location is now same.
//=====================================================================================================================
// let a = [1];
// let b = [1];
// console.log(a[0]==b[0]); //true
// console.log(a[0]===b[0]); //true
//Explaination : Here we are comparing elements inside an array, not a memory location. We specify the index so that's why element get compared.
//=============================================================================================================================================
  
// let z= [1,2,3]
// let a ={name: "priya"}
// console.log(...z); // 1 2 3 
//Explaination : ...z means destructing happened i.e, all the elements are come out from an array/object.

//====================================================================================================================================================
// let data = 10 - -10;
// console.log(data); //20
//Explaination : Minus minus will become plus so 10+10=20
//============================================================================================================================================
// const set = new Set([1,1,2,2,3,4,5])
// console.log(set)////{1,2,3,4,5}
//Explaination : It will remove duplicate values.
//===============================================================================================================================================
// const data =  ["Rakesh", "Rekha","Trishika","Atharv"];
// const [,,z,]= data;
// console.log(z);
//Explaination : We are doing destructuring here. y is representing the first index only
//==============================================================================================================================================
// let data ={name:"priya"}
// let data1={city:"ABC"}
// data = {...data, ...data1} //merge 2 objects
// console.log(data); // {name:"priya", age:"ABC"}
//////===========================================================================================================================================
// let data ={name:"priya"}
// let data1={city:"ABC", name: "supriya"}
// data = {...data, ...data1} //merge 2 objects
// console.log(data); // { name:"supriya", "city": "ABC"}
//Explaination : If we have same keys while merging then the position of the property will remain same but the value get updated with new value. Because in an objects Keys hold be unique.
//=======================================================================================================================================================================================================
// const result = false || 20 || {} || null;
// console.log(result); //20
//Explaination : OR operator will find first positive value. Null is a falsy value by default. {} is a positive value. It didn't reach till 20 and null.
//========================================================================================================================================================================
// const result = null || false || '9';
// console.log(result); //9
//Explaination : OR operator will find first positive value. It will print '' because any of the true value didn't found so it will pick last value always.
//===================================================================================================================================================================
// const result = [] || 0 || true;
// console.log(result); //[]
//Explaination : OR operator will find first positive value. It will print [] because empty array/object is a positive.
//===============================================================================================================================================================
// console.log(Promise.resolve(5)); //Promise {<fulfilled>: 5}
//=================================================================================================================================
// let name  = "priya";
// function getName(){
//   console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
//   let name = "supriya";
// }
// getName();
//Explaination : Hoisting used here. If we use VAR the can use variable before declare. But in LET we can't do that. LET/CONST need declaration first then can use it.
//=================================================================================================================================================================================
let name ="Rakesh";
function getName(){
    let name1;
    console.log(name) //undefined
    name ='-"Rekha';
}
getName();