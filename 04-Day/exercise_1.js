// 1
document.getElementById('oldToDrive').addEventListener('click', ageUserInput)

function ageUserInput(){

  let age = prompt("Enter your age")
  let resultMessageDrive = document.getElementById('resultOED')

  if (age > 18){
    resultMessageDrive.textContent = `You are old enough to drive`
  } else {
    resultMessageDrive.textContent = `You are left with ${18 - age} years to drive`
  }
}
