// Problem 2:
// Ask the user to enter a 4 digit code. Ask the user to enter the password again.
// If the passwords are the same print "Password is set."
// If the passwords are different print "ERROR, Passwords are different."

Ask_password= prompt("please enter a 4 digit code")
Ask_password_again= prompt("please enter 4 digit code again")

if (Ask_password === Ask_password_again)
        console.log("password is set");
    else {
        console.log("ERROR. Passwords are different.")
    }
