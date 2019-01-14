// Problem 4:
// Create a function that returns 5 more than the integer sent to it. Assume the user only enters integers.
// Create a different function that adds " is awesome" to any strings sent to it.
// Challenge: If the wrong data type is sent to one of the functions print "ERROR"

number =parseInt(prompt("Please enter number"))

function number_add() {
    if (isNaN(number))
    console.log ("ERROR")

    else {
    console.log(number + 5)}
}

sentence = prompt("Enter a random thought")

function sentence_add() {
    console.log(sentence + " is awesome")
}
number_add()
sentence_add()
