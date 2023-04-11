// ****************QUESTION 1********************

// function firstFunction(a) {
//     return function secondFunction (b) {
//         console.log(a + b)
//     }
// }
// let answer1 = firstFunction(5);
// let answer2 = answer1(5);

// *****************QUESTION 2********************

// let array = [1, 2, 3, 7, 5];
// search = 7;
// function recurse(x) {
//     if (array.length == 0){
//         console.log("array is empty");
//     }
//     if(array[0] === search){
//         console.log("true")
//     }
//     if(array[1] === search){
//         console.log("true")
//     }
//     if(array[2] === search){
//         console.log("true")
//     }
//     if(array[3] === search){
//         console.log("true")
//     }
//     if(array[4] === search){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// recurse();

// *****************QUESTION 3********************

// let userInput = prompt("Enter the paragraph you want to add:");
// let para = document.createElement("p");  
// let paragraph = document.getElementsByTagName("html")[0];

// function parag(text) {    
// para.textContent = text;
// paragraph.appendChild(para);
// paragraph.insertAdjacentElement("afterbegin", para);
// }
// parag(userInput);


// *****************QUESTION 4********************

// let userInput = prompt("Enter list item:");
// let unorderedList1 = document.getElementsByTagName("body")[0];
// let unorderedList = document.createElement("ul"); 
// let list = document.createElement("li");  
// unorderedList1.appendChild(unorderedList);

// function listItem(string) {    
// list.textContent = string;
// unorderedList.appendChild(list);
// }
// listItem(userInput);

// *****************QUESTION 5********************

// function addColor(reference, color){
//     reference.style.backgroundColor = color;
// }  
// let call = document.querySelector("#head1");
// addColor(call, "blue");

// *****************QUESTION 6********************

// let object = {
//     myName : "fatima",
//     age : 17,
//     no : "031320"
// }
// function objSaving(key, value){
//     localStorage.setItem(key,newObject);
// }
// let newObject = JSON.stringify(object);
// objSaving("Stored Data", object);
// console.log(newObject);

// *****************QUESTION 7********************

// let objectStored = {
//     myName : "fatima",
//     age : 17,
//     no : "031320"
// }
// function localStorage1(key) {
   
//    if(objectStored){
//     return JSON.parse(objectStored);
//    }
//    else{
//     return null;
//    }
// }
// let objectStored = localStorage.getItem(key);
// let retrieve = localStorage1("stored Object");
// console.log(retrieve);

// *****************QUESTION 8********************

// function save (obj){
//     Object.entries(obj).forEach(([key, value]) => {
//         localStorage.setItem(key, JSON.stringify(value));
//       });

// let newObj = {};
// Object.keys(obj).forEach((key) => {
//     let value = localStorage.getItem(key);
//     if (value !== null) {
//       newObj[key] = JSON.parse(value);
//     }
//   });
//   return newObj;
// }