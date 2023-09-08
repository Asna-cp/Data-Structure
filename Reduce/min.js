const arr = [1, 2, 3, 4, 5, 6];
const output = arr.reduce(function(acc,curr){
    if(curr<acc){
        acc=curr;
    }
    return acc;
})
console.log(output);