

// JavaScript Loops are used to repeatedly run a block of code - until a certain condition is met. When developers talk about iteration or iterating over, say, an array, it is the same as looping.

// for loop is good when you know how many times you want to iterate or run through your code Iteration in programming means repeating steps, or instructions , over and over again. This is often called a 'loop'. Algorithms consist of instructions that are carried out (performed) one after another.


            //loops allow us to repeat some code until our conditonns are met just like filling a bowl with flour until it is full. you dont say fill the flower bowl until it is full you would say scoop for cups of flour into the bowl



            //for loop the condition is i = 0 as long as i is less than 10 and this is true we will perform an iteration of the loop until it is no longer true{body of the for loop the code that will run or execute}
//i is a variable here i++ is called a post iteration
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('whatever is next');

// if statement if i % (mod) 2 (even) then we will log out i otherwise we wont do anything The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend. this prints out all the even numbers
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
let a = 0;

while (a < 10) {
    console.log(a);
    a++
}



//do while loop will iterate at least once


do {
    console.log(a);
} while (a < 10);

//for in loop used with arrays(list of values)
for (i in names){
    console.log(names[i]);
}
//for of loop used with arrays (list of values)
for (i of names) {
    console.log(i);
}

for(i = 0; i < 16; i++)
console.log(i);



let firstName = prompt('enter your first name');

if (!firstName){
    firstName = prompt('Try Again!!!!');
}


for (let i = 0; i < 10; i++) {
    console.log(i);}



    