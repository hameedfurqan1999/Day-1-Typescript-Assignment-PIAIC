"use strict";
let usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    let age = 25;
    if (age < 2) {
        console.log("The person is a baby.");
    }
    else if (age < 4) {
        console.log("The person is a toddler.");
    }
    else if (age < 13) {
        console.log("The person is a kid.");
    }
    else if (age < 20) {
        console.log("The person is a teenager.");
    }
    else if (age < 65) {
        console.log("The person is an adult.");
    }
    else {
        console.log("The person is an elder.");
    }
}
