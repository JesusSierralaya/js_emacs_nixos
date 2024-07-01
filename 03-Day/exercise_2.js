// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt('Enter base')
// let height = prompt('Enter height')

// base = parseInt(base),
// height = parseInt(height)
// area = 0.5 * base * height

// console.log(
//   `The area of the triangle is: ${area}`
// );

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let a = prompt('side a')
// let b = prompt('side b')
// let c = prompt('side c')
// let value

// [a, b, c] = [a, b, c].map(value => parseInt(value));

// perimeter = a + b + c

// console.log(
//   `The perimeter of the triangle is ${perimeter}.`
// );

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
function calcPerimeter(){
  let length = prompt("Enter length")
  let width = prompt("Enter width")
  let values
  [length, width] = [length, width].map(values => parseInt(values))
  perimeter = 2 * (length + width)

  console.log(`The perimeter of the rectangle is: ${perimeter}`);
}
// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function calcAreaCircum(){
  const pi = 3.14
  let r = prompt("Enter radius")
  r = parseInt(r)
  area = pi * r * r
  c = 2 * pi * r
  console.log(
    `The area of the circle is: ${area}`,
    `\nThe circumference is: ${c}`
  );
}

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// the slope is 2

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
function calcSlope(){
  let x1 = parseInt(prompt("Enter coordinates of the first point: x1", "2"))
  let y1 = parseInt(prompt("Enter coordinates of the first point: y1", "2"))
  let x2 = parseInt(prompt("Enter coordinates of the first point: x2", "6"))
  let y2 = parseInt(prompt("Enter coordinates of the first point: y2", "10"))
  m = (y2-y1)/(x2-x1)
  console.log(`The slope is ${m}`);
}

// 7. Compare the slope of above two questions.
// The points of the tasks 6 are from the line of the task 5 y = 2X -2

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function valueY(){
  let x = parseInt(prompt("Enter x coordinate of the function y = x^2 + 6x + 9"))
  y = (x*x) + 6*x + 9
  console.log(
    `The value of y is: ${y}`
  );
}
// when x = 0 the y value is 9

// 9.
function weeklyEarning(){
  let hours = parseInt(prompt("Enter the hours per week"))
  let rateHour = parseInt(prompt("Enter the rate per hour"))
  console.log(
    `The weekly earning is ${hours * rateHour}`
  );
}

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
function nameShort(){
  let name_length = prompt("Enter your name").length

  name_length > 7
    ? console.log("Your name is Long")
    : console.log("Your name is short");
}

// 11.
function compareNames(){
  let firstName = prompt("Enter your first name")
  let lastName = prompt("Enter your last name")
  firstNameLength = firstName.length
  lastNameLength = lastName.length

  firstNameLength > lastNameLength
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
}

// 12.
function olderThanYou(){
  let myAge = parseInt(prompt("My age is", "250"))
  let yourAge = parseInt(prompt("Your age is", "25"))

  myAge > yourAge
    ? console.log(`I am ${myAge - yourAge} years older than you`)
    : console.log(`I am ${yourAge - myAge} years younger than you`)
}

// 13.
function oldEnoughToDrive(){
  let birthYear = parseInt(prompt('Enter you birth year'))
  let yearNow = new Date().getFullYear()
  age =  yearNow - birthYear

  age > 18
    ? console.log(`You are ${age}. You are old enough to drive`)
    : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

// 14.
function secondsLived(){
  let yearsLived = parseInt(prompt('Enter number of years you live', '100'))
  console.log(
    `You lived ${yearsLived*365*24*60*60} seconds`
  );
}

// 15.
function dateFormats(){
  let YYYY = new Date().getFullYear()
  let MM = new Date().getMonth() +1
  let DD = new Date().getDate()
  let HH = new Date().getHours()
  let mm = new Date().getMinutes()

  MM = MM < 10 ? '0' + MM : MM
  DD = DD < 10 ? '0' + DD : DD
  HH = HH < 10 ? '0' + HH : HH
  mm = mm < 10 ? '0' + mm : mm

  console.log(
    `\ni. ${YYYY}-${MM}-${DD} ${HH}:${mm}`,
    `\nii. ${DD}-${MM}-${YYYY} ${HH}:${mm}`,
    `\niii. ${DD}/${MM}/${YYYY} ${HH}:${mm}`
  );
}
