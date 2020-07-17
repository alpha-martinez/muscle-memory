let myName = "My name is Alpha";
let num = 24;
const colors = ["blue", "red", "white", "black"]; //use const for arrays
let isLoggedIn = true;
const places = { //use const when using objects
    favPlace: "New York",
    yearsHere: 14,
    goodFood: ["Pizza", "Chinese food", "mexican"],
    loveItHere: true
}
//to access your key values it should be places.faveplace

//function 1

function addNum(num1, num2){
    sum = num1 + num2; 
    return sum;
}

addNum(4,5);

//function two

function hello(name){
    console.log("Hey there!");
}

hello("Ann");

//function 3

function superHuman (powerOne, powertwo){
    let muscle = powerOne() + powertwo();
    return muscle;
}

function sleepyHead (){
    let sleep = "I am very lazy.";

    return sleep;
}

function powerGroup(){
    let power = " I am strong though, so don't play with me.";

    return power;
}

console.log (superHuman(sleepyHead, powerGroup));





