//Find Maxinum number(acc-accumulator and curr-current)

const arr = [1, 2, 3, 4, 5, 6];
const output = arr.reduce(function (acc, curr) {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
},0);
console.log(output);

//Normal method
function findMax(arr){
    let max = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
console.log(findMax(arr));
