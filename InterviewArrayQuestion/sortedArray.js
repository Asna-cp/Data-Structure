const a = [1,3,3,5,6];
n=5;
const missingNumber = [];

for(let i=0;i<n;i++){
    const diff = a[i+1] - a[i];
    if(diff>1){
        for(let j=1;j<diff;j++){
            missingNumber.push(a[i]+j);
        }
    }
}
console.log(missingNumber);