//SREAD OPERATOR

const numbers = [1,2,3];

const moreNumber = [...numbers,4,5,6];

console.log(moreNumber); // output [123456]

//DESTRUCTION ARRAY

const [first,second,third] = moreNumber;

console.log(first,third,second); // output 1 3 2