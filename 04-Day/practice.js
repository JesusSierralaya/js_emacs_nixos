document.getElementById('chooseDayButton').addEventListener('click', dayUserInput)

function dayUserInput(){
  let dayUserInput = prompt("What day do you want off?")
  let day = dayUserInput.toLowerCase()
  let resultMessage = document.getElementById('resultMessage')

  switch (day){
    case 'monday':
      resultMessage.textContent = `Accepted! The next ${day} you do not go to work`;
      break
    case 'tuesday':
      resultMessage.textContent = `Accepted! The next ${day} you do not go to work`;
      break
    default:
      resultMessage.textContent = `You must to choose between Monday and Tuesday`;
  }
}

//   switch (day) {
//     case 'monday':
//       resultMessage.textContent = `Accepted! The next ${day} you do not go to work`;
//       break;
//     case 'tuesday':
//       resultMessage.textContent = `Accepted! The next ${day} you do not go to work`;
//       break;
//     default:
//       resultMessage.textContent = "You must choose between Monday and Tuesday";
//   }
// }
