// Find the number which is less then 3 using filter method

const num = [0, 1, 2, 3, 4, 5];

const filterarray = num.filter(
  (value) => {
    return value < 3;
  },
)
console.log(filterarray);


// In above question output will be add 5 number

const filtarr = num.filter((value) => {
  return value < 3;
}).map((value) => {
  return value + 5;
})
console.log('After adding 5 to each element', filtarr);


// print first latter as capital latter each word in string

const str = 'hi i am saurabh';

const sepstr = str.split(' ');

const newstr = sepstr.map((val) => {
  return val[0].toUpperCase() + val.slice(1);
})

console.log(`New String :  ${newstr.join(' ')}`);

