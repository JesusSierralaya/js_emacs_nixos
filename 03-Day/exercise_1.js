// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Jesus'
let lastName = 'Sierralaya'
let country = 'Spain'
let city = 'Madrid'
let age = 100
let isMarried = true
let year = new Date().getFullYear()
// let year = new Date()

console.log(
  '1.',
  typeof firstName,
  typeof age,
  typeof year
);
// 2. Check if type of '10' is equal to 10
console.log(
  '2.',
  '10' == 10
);

// 3. Check if parseInt('9.8') is equal to 10
console.log(
  '3.',
  parseInt('9.8') == 10,
);

// 4. Boolean value is either true or false.
    // Write three JavaScript statement which provide truthy value.
    // Write three JavaScript statement which provide falsy value.
console.log(
  '4.',
  !false, 9 > 8, Boolean(1),
  '\n',
  !true, 9 < 8, Boolean(0),
);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log('5.');
    // 4 > 3 true
console.log(4>3);
    // 4 >= 3 true
console.log(4 >= 3);
    // 4 < 3 false
console.log(4 < 3);
    // 4 <= 3 false
console.log(4 <= 3);
    // 4 == 4 true
console.log(4 == 4);
    // 4 === 4 true
console.log(4 === 4);
    // 4 != 4 false
console.log(4 != 4);
    // 4 !== 4 false
console.log(4 !== 4);
    // 4 != '4' false
console.log(4 != '4');
    // 4 == '4' true
console.log(4 == '4');
    // 4 === '4' false
console.log(4 === '4');
    // Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length === 'jargon'.length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    // 4 > 3 && 10 < 12 true
console.log(4 > 3 && 10 < 12)
    // 4 > 3 && 10 > 12 false
console.log(4 > 3 && 10 > 12)
    // 4 > 3 || 10 < 12 true
console.log(4 > 3 || 10 < 12)
    // 4 > 3 || 10 > 12 true
console.log(4 > 3 || 10 > 12)
    // !(4 > 3) false
console.log(!(4 > 3))
    // !(4 < 3) true
console.log(!(4 < 3))
    // !(false) true
console.log(!(false));
    // !(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 < 12))
    // !(4 > 3 && 10 > 12) true
console.log(!(4 > 3 && 10 > 12))
    // !(4 === '4') true
console.log(!(4 === '4'))
    // There is no 'on' in both dragon and python false
let no_on = 'python dragon'
console.log(no_on.match('on') != 'on');

// 7. Use the Date object to do the following activities
    // What is the year today?
console.log(new Date().getFullYear());
    // What is the month today as a number?
console.log(new Date().getMonth() +1);
    // What is the date today?
console.log(new Date().getDate());
    // What is the day today as a number?
console.log(new Date().getDay());
    // What is the hours now?
console.log(new Date().getHours());
    // What is the minutes now?
console.log(new Date().getMinutes());
    // Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(
  `The number of seconds from January 1, 1970 to now are: ${Math.round(new Date().getTime()/1000).toLocaleString('en-US')}. `
)
