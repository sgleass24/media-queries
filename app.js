// console.log("hello world");
// // window objects//
// alert("you have to be 18 to enter this site");
// //alert message on page//
// confirm("are you over 18?");
// //ask yes or no//
// prompt("how old are you?");
// //forces an input answer//

// console.log("hello + 5*10");

// console.log("hello" + 5 * 10);

// var firstName = "shelby";
// var lastName = "gleason";
// var middleInitial = "e";

// console.log(firstName[5]);

// var quote = "stay awhile and listen!";
// console.log(quote[6]);

// alert("my name is " + " " + firstName + '\n' +
//     " My last name is " + " " + lastName + '\n' +
//     " my last name is" + " " + lastName);

// console.log("my name is " + " " + firstName + '\n' +
//     " My last name is " + " " + lastName + '\n' +
//     " my last name is" + " " + lastName);

// document.write("my name is " + " " + firstName + '\n' +
//     " My last name is " + " " + lastName + '\n' +
//     " my last name is" + " " + lastName);

// document.getElementById("demo").innerHTML = "my name is " + " " + firstName + '\n' +
//     " My last name is " + " " + lastName + '\n' +
//     " my last name is" + " " + lastName;

//console.log, alert, document.write, target html element

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var partnerName = "John";
var numberOfChildren = "2";
var geographicLocation = "Italy";
var jobTitle = "UX Designer";

document.getElementById("demo").innerHTML = "You will be a" + " " 
+ jobTitle  + " " + "in" + " " 
+ geographicLocation + " " + "and married to" + " " 
+ partnerName + " " + "with" + " " 
+ numberOfChildren + " " + "kids";