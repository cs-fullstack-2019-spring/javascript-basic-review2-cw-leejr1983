// Problem 3:
// Create a function that is sent two integers, then print from the first integer to the second integer.
// Assume the first integer is less than the second integer.

num1 = parseInt(prompt("Please enter a number"))
num2 = parseInt(prompt("Please enter a 2nd number"))

function counting(num1,num2){
    for (i = num1; i<= num2; i++)
    console.log(i)
}

counting(num1,num2)