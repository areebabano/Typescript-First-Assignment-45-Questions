const current_users: string[] =["John","Ammar","Allon Musk","Bill Gates","Rohan"];
const new_users: string[] = ["Harry","Jack","Bill Gates","Ali","Allon MUsk"];

function checkedUserNames(current_users: string[], new_users: string[]):void{
  const lowerCaseCurrentUser:string[] = current_users.map(users => users.toLowerCase())
  for(const newuser of new_users){
    const lowerCaseNewUser = newuser.toLowerCase();
    if(lowerCaseCurrentUser.indexOf(lowerCaseNewUser) !== -1){
        console.log(`"${newuser}" you will need to enter a new username. `)
    }else{
        console.log(`username "${newuser}" is available.`)
    }
  }
}
checkedUserNames(current_users,new_users)