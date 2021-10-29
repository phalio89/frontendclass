//boolean operators
// == equal to
// > greater than
// < less than 
// && and 
// >= greater than or equal to
// <= less than  or equal to
// || or 

/* +	Adds two numeric operands.
-	Subtract right operand from left operand
*	Multiply two numeric operands.
/	Divide left operand by right operand.
%	Modulus operator. Returns remainder of two operands.
++	Increment operator. Increase operand value by one.
--	Decrement operator. Decrease value by one.*/

5 == 4  //5 is equal to 4 false
5 > 4   // 5 is greater than 4 true
4 < 10  // 4 is less than 10 true
10 >= 10 // 10 is greater than or equal to 10 true
11 <= 8  // 11 is less than or equal to 8 false

5 > 4 && 4 > 10  // 5 is greater than 4 and 4 is less than 10
4 > 10 || 1 == 1 // 4 is greater to 10 is false but 1 == 1 is true so it is true


//conditions or conditional statements

//Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.

// if (variable or value ){write what you want to go in the curly braces to execute or run} below sams first name is true so it will show up in the console as hello sam if it was not true it would not show up (changed to tim to show how the else statement works)

var firstName = 'Tim';

if (firstName == 'Sam') {
    console.log('Hello Sam!');
}

//else statement following if statement write else in case sam is not equal to the first name the variable delcared will show up

else {
    console.log('Hey,' + firstName);
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
        default:
            console.log('0-69');



}

















// break is saying as soon as we hit the case that matches we exit out of the block of code and execute it in this case 70-79 will show up in the console because the grade is C


var a = 5;
var b = 6;

if (a == 5);

if (b == 6);

console.log('a is 5 and b is 6.')


// flattening is a way of writing multiple if statements and code in a cleaner way as shown below using the && 

if (a == 5 && b == 6);
console.log('a is 5 and b is 6.');


// JavaScript Loops are used to repeatedly run a block of code - until a certain condition is met. When developers talk about iteration or iterating over, say, an array, it is the same as looping. iterate means to perform repeately

// for loop is good when you know how many times you want to iterate or run through your code









