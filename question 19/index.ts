var list = ["Aryan", "Arsh Momin", "Hadi", "Arfa", "Shehreen"];
list[3] = "aiman";
list.unshift("Zaheer");
var newGuest = "Sarah";
// Calculate the index at which to add the new guest
var index = Math.floor(list.length / 2);
// Use splice() to add the new guest at the calculated index
list.splice(index, 0, newGuest);
list.push("nazish");
while (list.length > 2) {
    const removedGuest = list.shift();
}
for (const guest of list) {
    console.log(`You're still invited, ${guest}!`);
// printing np. of people who are invited 
console.log(list.length);
