"use strict";
var places = ['Turkey', 'UK', 'USA', 'Karachi', 'Lahore'];
// Step 1: Create a sorted copy of the array
var sortedArray = places.slice().sort();
// Step 2: Print the sorted array
console.log("Sorted Array:");
console.log(sortedArray);
// Step 3: Print the original array
console.log("Original Array:");
console.log(places);
// reverse array
var reverseArray = places.slice().reverse();
console.log("Reversed Array" + " " + reverseArray);
// again reverse array 
var againReverse = reverseArray.reverse();
console.log(againReverse);
// sorrting array again
var sortedArray2 = againReverse.slice().sort();
console.log(sortedArray2);
// reverse alphabatical order array 
var reverse_alpha_order_array = sortedArray2.sort().reverse();
console.log(reverse_alpha_order_array);
