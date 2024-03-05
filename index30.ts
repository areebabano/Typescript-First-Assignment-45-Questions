let usernames: string[] = ["Anders Hejlsberg","Admin","Eric","John","Harry"];
for(let username of usernames){
    if(username.toLowerCase() === "admin"){
        console.log("Hello Admin would you like to see a status report?")
    }else{
        console.log(`Hello ${username} thank you for logging in again.`)
    }
}