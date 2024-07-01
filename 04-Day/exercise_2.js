//1
document.getElementById('button21').addEventListener('click', userInput2_1)

function userInput2_1(){
  let score = prompt('Enter your score')
  grade = document.getElementById('result21')

  switch (true){
    case score >= 80 && score < 100:
      grade.textContent = `your grade is A`;
      break;
    case score >= 70 && score < 79:
      grade.textContent = `your grade is B`;
      break;
    case score >= 60 && score < 69:
      grade.textContent = `your grade is C`;
      break;
    case score >= 60 && score < 59:
      grade.textContent = `your grade is D`;
      break;
    case score <= 50 && score > 0:
      grade.textContent = `your grade is F`;
      break;
    default:
      grade.textContent = `The score is between 0 and 100`;
  }
}
//2
document.getElementById('button22').addEventListener('click', userInput22)

function userInput22(){
  let month = prompt('Enter the month').toLowerCase()
  season = document.getElementById('result22')

  let beep = new Audio('beep-07a.mp3')
  beep.play()

  switch (month){
    case 'september':
    case 'october':
    case 'november':
      season.textContent = `Autumn`;
      break;
    case 'december':
    case 'january':
    case 'february':
      season.textContent = `Winter`;
      break;
    case 'march':
    case 'april':
    case 'may':
      season.textContent = `Spring`;
      break;
    case 'june':
    case 'july':
    case 'august':
      season.textContent = `Summer`;
      break;
    default:
      season.textContent = `enter a valid month`
  }
}
//3
document.getElementById('button23').addEventListener('click', userInput23)

function userInput23(){
  let day = prompt("Waht is the day today").toLowerCase()
  dayResult = document.getElementById('result23')
  let beep = new Audio('beep-07a.mp3')
  beep.play()

  FormatedDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()

  switch (day){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      dayResult.textContent = `${FormatedDay} is a working day.`;
      break;
    case 'saturday':
    case 'sunday':
      dayResult.textContent = `${FormatedDay} is a weekend.`;
      break;
    default:
      dayResult.textContent = `Invalid day`
  }
}
