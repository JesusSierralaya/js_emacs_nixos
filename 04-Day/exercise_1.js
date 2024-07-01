//1
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

//2
document.getElementById('button2').addEventListener('click', userInput2)

function userInput2(){
  let myAge = prompt("Enter my age:")
  let yourAge = prompt("Enter your age:")
  resultMessage2 = document.getElementById('result2')

  myAge > yourAge
    ? resultMessage2.textContent = `You are ${myAge - yourAge} years younger than me`
    : resultMessage2.textContent = `You are ${yourAge - myAge} years older than me`
}

//3
document.getElementById('button3').addEventListener('click', userInput3)

function userInput3(){
  let a = prompt('Enter a')
  let b = prompt('Enter b')
  resultMessage3 = document.getElementById('result3')
  // using if else
  // if (a > b){
  //   resultMessage3.textContent = `${a} is greater than ${b}`
  // } else {
  //   resultMessage3.textContent = `${a} is less than ${b}`
  // }
  // using ternary operator
  a > b
    ? resultMessage3.textContent = `${a} is greater than ${b}`
    : resultMessage3.textContent = `${a} is less than ${b}`
}

//4
document.getElementById('button4').addEventListener('click', userInput4)

function userInput4(){
 let num = prompt("Enter a number")

  resultMessage4 = document.getElementById('result4')

 if (num % 2) {
    resultMessage4.textContent = `${num} is an odd number`
  } else {
    resultMessage4.textContent = `${num} is an odd number`
  }
}
