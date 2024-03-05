let newGuestList:Array<string> = [
    'Minal',    'Fatima',
    'Zara',     'Iqra',
    'Javeriya', 'Ayat',
    'Sara'
  ]
  console.log("I can invite only two people for dinner");
  // remove guest from new guest list
  while(newGuestList.length > 2){
    let removeGuest = newGuestList.pop();
    console.log(`Sorry! ${removeGuest} I can't invite you for dinner`)
  }
  for(let guest of newGuestList){
    console.log(`"Hello! ${guest} You are still invited for dinner."`)
  }
  newGuestList.pop();
  newGuestList.pop();
  console.log(`Empty list: ${newGuestList}`)