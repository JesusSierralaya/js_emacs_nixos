document.getElementById('button31').addEventListener('click', userInput31)
function userInput31(){
  let month = prompt("Enter a month").toLowerCase()
  let days = document.getElementById('result31')
  let beep = new Audio('beep-07a.mp3')
  beep.play()

  let FormatedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLocaleLowerCase()

  switch (month){
    case 'february':
      let isLeapYear = confirm("Is the year leap? click 'OK' for yes and 'Cancel' for No")
      if (isLeapYear) {
        days.textContent = `${FormatedMonth} has 29 days.`
      } else {
        days.textContent = `${FormatedMonth} has 28 days.`
      }
      break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      days.textContent = `${FormatedMonth} has 30 days.`
      break
    case 'january':
    case 'march':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      days.textContent = `${FormatedMonth} has 31 days.`
      break
    default:
      days.textContent = `Enter a valid month.`
  }
}
