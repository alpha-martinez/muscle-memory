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

// make 10 different functions
// one of your functions need to pass in an array
// one of your functions need to pass in a callback
// string
// object
// boolean
// freestyle rest



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

//function 4

function isCool (array){
    let total = [];

    for (let i = 0; i < array.length; i++){
        let newColors = array[i];

        if (newColors.length > 4){
            total.push(newColors);
        }
    }

    return total;
}


console.log(isCool(colors));


//function 5

function checkThis(help){
    if(help){
        console.log("You need more practice")
    } else {
        console.log ("You need more practice regardless");
    }
}

console.log(checkThis(isLoggedIn));


//class notes

const sectionOne = document.getElementById('section-one');
console.log(sectionOne);

const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);

const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);

const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);

const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);

//adding html text using js
sectionOne.textContent = 'Lakers';
sectionTwo.textContent = 'I am getting tired but I need this to stick please';
sectionThree.textContent = 'AYUDAAAAAAA';
sectionFour.textContent = "Ayoo";
sectionFive.textContent = "We'll make it through";

//adding text in paragraphs
const paraOne = document.querySelector('.paragraph-one');
console.log(paraOne);
paraOne.textContent = "Yooo you got this!";


const paraTwo = document.querySelector('.paragraph-two');
paraTwo.textContent = "Tic";

const paraThree = document.querySelector('.paragraph-three');
paraThree.textContent = "Tac"; 

const paraFour = document.querySelector('.paragraph-four');
paraFour.textContent = "Game";

const paraFive = document.querySelector('.paragraph-five');
paraFive.textContent = "Practice your functions! :D";


//add a div and class
const containerSix = document.createElement('div');
console.log(containerSix);
containerSix.classList.add('container-six');

const sectionSix = document.createElement('h2');
console.log(sectionSix);

sectionSix.setAttribute('id','section-six'); //adding an id name
//sectionSix.classList.add('section-six); adds a class name 

sectionSix.textContent = 'Rockets';

const paraSix = document.createElement('p'); //create a paragraph
paraSix.classList.add('paragraph-six'); //add a class name to it

paraSix.textContent = 'James Harden'; //add content to the paragraph element
console.log(paraSix);


const body = document.querySelector('body');
console.log(body);

body.appendChild(containerSix); //add body to html
containerSix.appendChild(sectionSix); //add h2 tag
containerSix.appendChild(paraSix); //add para 


// create another container
    // add class
// create another section
   // add an id
   // add textContent
// create another paragraph
    // add a class
    // add textContent
// append the container to the body
// append section to the container
// append the paragraph to the container

const containerSeven = document.createElement('div');
containerSeven.classList.add('container-seven');
const sectionSeven = document.createElement('h2');
sectionSeven.setAttribute('id', 'section-seven');

sectionSeven.textContent = 'New Content Practice';

const paraSeven = document.createElement('p');
paraSeven.classList.add('paragraph-seven');

paraSeven.textContent = 'Adding a paragraph';

body.appendChild(containerSeven);
containerSeven.appendChild(sectionSeven);
containerSeven.appendChild(paraSeven);








