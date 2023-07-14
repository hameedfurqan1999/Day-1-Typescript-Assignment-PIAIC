"use strict";
function order_sandwich(items) {
    console.log("Sandwich order summary:");
    console.log("Bread: Whole Wheat");
    console.log("Items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
    console.log();
}
// Calling the function with different numbers of arguments
order_sandwich(["Ham", "Cheese"]);
order_sandwich(["Turkey", "apple", "Tomato", "Mayonnaise"]);
order_sandwich(["Chicken", "Avocado", "sandwich", "Swiss Cheese", "Pickles"]);
