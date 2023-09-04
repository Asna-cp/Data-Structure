//even numbers
const arr = [1,2,3,9,4,5];

const output = arr.filter(function isEven(x){
    return x%2===0;
});
console.log(output);