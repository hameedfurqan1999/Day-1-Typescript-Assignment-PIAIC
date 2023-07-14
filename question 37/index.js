"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it has the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello World!");
