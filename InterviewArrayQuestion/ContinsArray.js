const a = [1,2,3,5,6];
const n = 5;
let sum = 0;

for(let i=0;i<n;i++){
    sum += a[i];
}
let exptsum = (n*(n+1))/2;

let missingnum = exptsum - sum;
console.log(missingnum);