var list = ["Aryan", "Arsh Momin", "Hadi", "Arfa", "Shehreen"];
list[3] = "aiman";
list.unshift("Zaheer");



console.log("You have got Big dinner Table");

var newGuest = "Sarah";

// Calculate the index at which to add the new guest
var index = Math.floor(list.length / 2);

// Use splice() to add the new guest at the calculated index
list.splice(index, 0, newGuest);

list.push("nazish");

for (var i = 0; i < list.length; i++) {
    console.log(list[i] + " " + "You are invited to today dinner");
}


