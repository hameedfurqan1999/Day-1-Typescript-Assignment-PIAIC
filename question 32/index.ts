let current_users: string[] = ["john", "Ali", "Furqan", "nazeer", "Hassan"];
let new_users: string[] = ["Momin", "john", "sarah", "Shehreen", "lucas"];

for (let new_username of new_users) {
    let lowercase_new_username = new_username.toLowerCase();
    let isUsernameTaken = false;

    for (let username of current_users) {
        if (username.toLowerCase() === lowercase_new_username) {
            isUsernameTaken = true;
            break;
        }
    }

    if (isUsernameTaken) {
        console.log(`The username "${new_username}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_username}" is available.`);
    }
}
