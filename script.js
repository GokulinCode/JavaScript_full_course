// console.log("new folder");

// var let const

// var variable
// var name = "gokul"
// var name = "pradap"


// let variable
// let name = "gokul";
//  name = "pradap";

// const variable
// const name = "gokul";
// const name = "pradap"
// name = "pradap"


// let firstName = "gokul";
// let FirstName = "Gokul";
// let lastName = "pradap";
// let fullName = firstName +lastName;
// console.log(firstName +lastName);
// console.log(firstName +" "+lastName);
// console.log("my name is"+" "+firstName +lastName);
// console.log("my name is"+" "+fullName);


//primitive type
/*
string
number
boolean
undefined
null
*/
//reference type
// object
//array
//function
// let myName = "gokulpradap"; //string
// let age = 27; // number
// let isActive= true ; //boolean
// let person; //undefined
// let got = null; //object


// object

let public = {
    // key : value
    name : "gokul",
    age : 27,
    address: "maharajapuram",
    father : {
        name : "marichamy",
        age : 55,
        wife: {
            name : "selvarani",
        }
    }
}
// console.log(public.father.wife.name);

// array
let colors = ["white", "black", "red", "green"];
colors[5] = 10;
// console.log(colors);

// functions

function num(num1, num2){
    console.log(num1 + num2);
}
num(5, 5)

function name(firstName){
     
    console.log("hi im "+ firstName );
}
name("gokul")