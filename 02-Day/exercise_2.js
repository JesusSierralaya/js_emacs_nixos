// 1.
console.log(
  'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
);
// 2.
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof parseInt('10'));
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numFloat = parseFloat('9.8')
console.log(Math.ceil(numFloat) == 10);
// 5. Check if 'on' is found in both python and jargon
let languages = 'python jargon'
console.log(languages.match(/on/g));
// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargon = 'I hope this course is not full of jargon.'
console.log(jargon.search('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.round(Math.random() * 100));
// 8. Generate a random number between 50 and 100 inclusively.
// Math.random() * (max - min) + min;
let min = 50
let max = 100
console.log(Math.round(Math.random() * (max - min) + min));
// 9. Generate a random number between 0 and 255 inclusively.
min = 0
max = 255
console.log(Math.round(Math.random() * (max - min) + min));
// 10. Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
min = 0
max = js.length
let index = Math.round(Math.random() * (max - min) + min)
console.log(js[index]);
// 11.
let one = '1 '
console.log(
  one.repeat(5),
  '\n2 1 2 4 8',
  '\n3 1 3 9 27',
  '\n4 1 4 16 64',
  '\n5 1 5 25 125'
);
// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// console.log(
//   because.indexOf('because'),
//   because.lastIndexOf('because')
// );
let firstIndex =  because.indexOf('because')
let word = 'because '
let numChar = word.length * 3

console.log(numChar);
console.log(because.substr(firstIndex, numChar));
