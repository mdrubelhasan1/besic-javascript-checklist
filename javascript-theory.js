// 1. declare 3 variable:
var numbers = 20;
let num1 = 'rubrl';
const country = 'Bangladesh'
// 2. write a program to print 1 to 100 numbers.

for(let i = 1; i<=100; i++){
    // console.log(i);
}
// 3. find odd numbers fromm 50 to 80.
for(let i = 51; i <=80; i+=2){
    // console.log(i);

}
// 4. write a function that sum 3 elements:
function sum(a, b, c, d, e){
    var sum = a + b + c + d + e;
    return sum;
}
let myNumbers =sum(100, 30, 30, 50, 50);
// console.log(myNumbers);
// module 18 practice:
// latter grade program:

var marks =70;
if(marks>=90){
    console.log("Grade: 'A+'");
}
else if(marks>=80){
    console.log("Grade: 'A'");
}
else if(marks>=70){
    console.log("Grade: 'B'");
}
else if(marks>=60){
    console.log("Grade: 'C'");
}
else if(marks>=50){
    console.log("Grade: 'D'");
}
else{
    console.log("Grade: 'F'");
}

// signal program:
let signal = 'yellow';

switch (signal){
    case 'green':
        console.log('should cross the road');
        break;
    case 'yellow':
        console.log('should not cross the road');
        break;  
    case 'red':
        console.log('should be danger');
        break;      
}
// ARRAY
let number = [ 10, 20, 30, 50, 40, 60, 80, 70];
// console.log(number.length);
let element = number[4];
// console.log(element);
number[4]= 255;
// console.log(number);
// console.log(number[5]);
number.pop();
// console.log(number);
number.push(115);
// console.log(number);

for(let i = 0; i <=39; i++){
    // console.log(i);
    // console.log('ajke amar mon valo nei');
}
for(let i = 58; i<=98; i++){
    // console.log(i);
}
for(let i = 412; i <=456; i+=2){
    console.log(i);
}
for (let i = 481; i<=623; i +=2){
    // console.log(i);
}


function reverseString(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();  
     var joinArray = reverseArray.join(""); 
     return joinArray; 
}
 
reverseString("hello");