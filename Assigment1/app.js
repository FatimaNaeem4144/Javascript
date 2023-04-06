// *************QUESTION 1*****************

// let num1 = +prompt("Enter first number:")
// let num2 = +prompt("Enter second number:")

// if (num1 > num2){
//     console.log("The larger num is " + num1)
// }
// else{
//     console.log("The larger num is " + num2)
// }

// **************QUESTION 2*******************

// let signNum = +prompt("Enter a number:")
// if (signNum < 0 ){
//     alert("The sign is -")
// }
// else{
//     alert("The sign is +")
// }

// **************QUESTION 3*******************

// let num1 = +prompt("Enter first number: ")
// let num2 = +prompt("Enter second number: ")
// let num3 = +prompt("Enter third number: ")
// let num4 = +prompt("Enter fourth number: ")
// let num5 = +prompt("Enter fifth number: ")

// let largestNum = num1;
// if (num2 > largestNum){
//     largestNum = num2
// }
// if (num3 > largestNum){
//     largestNum = num3
// }
// if (num4 > largestNum){
//     largestNum = num4
// }
// if (num5 > largestNum){
//     largestNum = num5
// }
// else{
//     largestNum = num1
// }
// console.log("The largest number is " + largestNum)

// **************QUESTION 4*******************


// for (let i = 0; i <= 15; i++)
// {
//     if (i % 2 === 0){
//     document.write(i + " is even <br>")
// }
//    else{
//     document.write(i + " is odd <br>")
//    }
// }

// **************QUESTION 5*******************

// let number = prompt("Enter your marks:")

// if (number <= 60){
//     alert("Your grade is F" )
// }
// if (number <= 70 && number >= 60){
//     alert("Your grade is D" )
// }
// if (number <= 80 && number >= 70){
//     alert("Your grade is C" )
// }
// if (number <= 90 && number >= 80){
//     alert("Your grade is B" )
// }
// if (number <= 100 && number >= 90){
//     alert("Your grade is A" )
// }

// **************QUESTION 6*******************

// for (let i=1; i<=100; i++){
//     if (i%3==0 && i%5==0){
//         document.write("<br> FizzBuzz")
//     }
//     else if (i%3==0){
//         document.write(" <br> Fizz")
//     }
//     else if (i%5==0){
//         document.write("<br> Buzz")
//     }
//     else{
//     document.write("<br>" + i)}
// }

// **************QUESTION 7*******************

for (let i = 1 ; i<=5 ; i++){
    let style = "";
    for (j = 1; j<=i; j++){
        style += "* ";
    }
    console.log(style);
}