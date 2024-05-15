const nameObj = {
    firstName : "Rakesh",
    lastName : "Singh"
}
let printFullName = function( state , homeTown){
    return this.firstName + " " +this.lastName+ " " +homeTown+ " " +state; 
}

//Call method
/* we will pass the aurgument Individually comma seperated */
console.log(printFullName.call(nameObj, "Gopalganj", "bihar"))

//Apply method
/* we will pass the second argument as a arrayList */
console.log(printFullName.apply(nameObj,["Gopalganj", "Bihar"]))

//Bind method
/* Similar to the call method but only difference jus keep copy of the method and invoke later */
let testBindMethod = printFullName.bind(nameObj);
console.log(testBindMethod("Gopalganj", "Bihar"))