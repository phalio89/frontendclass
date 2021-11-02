
//conditions or conditional statements

//(if, else if, else, swtich)

//Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.

// if (variable or value ){write what you want to go in the curly braces to execute or run} below sams first name is true so it will show up in the console as hello sam if it was not true it would not show up (changed to tim to show how the else statement works)

var firstName = 'Tim';

if (firstName == 'Sam') {
    console.log('Hello Sam!');
}

//else statement following if statement write else in case sam is not equal to the first name the variable delcared will show up

else {
    console.log('Hey,' + ' ' + firstName);
}


// delcare a variable and assign it a value. if the cost of milk is valued at less than < 2 we will buy 2 gallons else if the cost of milk is valued at less than 3 dollars we will only buy 1 gallon else cost of milk is greater than no thanks it is too expensive
var costOfMilk = 2;



if (costOfMilk < 2) {
    console.log('We will buy 2 gallons');
}
else if (costOfMilk < 3 ){
    console.log('We will buy only 1 gallon');
}

else {
    console.log('No thanks, way to expensive!');
}

var priceOfGas = 2.99;


if (priceOfGas < 4){
    console.log('I will fill up my tank');
}

else if (priceOfGas > 4){
    console.log('I will only buy 20 dollars woth');


}

var weeklyFoodBill = 120;

if (weeklyFoodBill < 100){
    console.log('Go out');
}

else if (weeklyFoodBill > 100);{
console.log('Stay In');
}


var numberOfInvites = 125; 
var numberExpectedToShow = 100;

console.log(numberOfInvites - numberExpectedToShow );

if (numberExpectedToShow > 115) {

    console.log ('buy extra food');
}

    else if (numberExpectedToShow <= 100){
        console.log('Keep food same amount');
    }
    else{
        console.log('Do nothing');
    }


    var myBalance = 1500;



    console.log(myBalance += 500);












// switch statement evaluates a variable then provide multiple code blocks baed on the variable


var grade ='C';

switch (grade) {
    case 'A':
        console.log('90-100');
    break;
    case 'B':
        console.log('70-79');
        break;
        case 'C':
        console.log('70-79');
        break;

        // default is if its not anything else what do you want to happen
        default:
            console.log('0-69');


            /*let eth = 3500;

            switch (eth) {

                case 3500:
                console.log('hold my eth');
                break;

                case '4000':
                console.log('think about selling');
                break;

                case '5000':
                console.log('sell!!!')
                break;

                default: 
                
                console.log('stay put');*/



                
var grade ='C';

switch (grade) {
    case 'A':
        console.log('90-100');
    break;
    case 'B':
        console.log('70-79');
        break;
        case 'C':
        console.log('70-79');
        break;

        // default is if its not anything else what do you want to happen
        default:
            console.log('0-69');


              



            }

            


}






























// break is saying as soon as we hit the case that matches we exit out of the block of code and execute it in this case 70-79 will show up in the console because the grade is C


var A = 5;
var b = 6;

if (A == 5);

if (b == 6);

console.log('A is 5 and b is 6.')


// flattening is a way of writing multiple if statements and code in a cleaner way as shown below using the && 

if (A == 5 && b == 6);
console.log('A is 5 and b is 6.');


// JavaScript Loops are used to repeatedly run a block of code - until a certain condition is met. When developers talk about iteration or iterating over, say, an array, it is the same as looping. iterate means to perform repeately

// for loop is good when you know how many times you want to iterate or run through your code


let haliotis = 'me';

console.log(haliotis);



                
let eth = 3500;

switch (eth) {
    case 3500:
        console.log('hold the line');
    break;
    case 4000:
        console.log('think about selling');
        break;
        case 5000:
        console.log('sell!!!!!');
        break;

        // default is if its not anything else what do you want to happen
        default:
            console.log('stay put');


              



            }


            let dogBreed = 'Pitbull';
            console.log(dogBreed);



            //loops allow us to repeat some code until our conditonns are met just like filling a bowl with flour until it is full. you dont say fill the flower bowl until it is full you would say scoop for cups of flour into the bowl



            //for loop the condition is i = 0 as long as i is less than 10 and this is true we will perform an iteration of the loop until it is no longer true{body of the for loop the code that will run or execute}
//i is a variable here i++ is called a post iteration
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('whatever is next');

// if statement if i % (mod) 2 (even) then we will log out i otherwise we wont do anything
for (let i = 0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}




//while loop you have less knowledge of how many itergrades are needed
//infinite loop a is equal to 0 as long as 0 is less than 10 it will always run and crash the browser. make sure 0 changes as shown with a++
let a = 110;

while (a < 10) {
    console.log(a);
    a++
}



//do while loop will iterate at least once


do {
    console.log(a);
} while (a < 10);

//for i 
for (i in names){
    console.log(names[i]);
}
//for of
for (i of names) {
    console.log(i);
}

