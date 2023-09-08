//Unique and Count
const a = [1,2,3,4,5,6,1,2,4];
const n = 9;
let count=0;

for(let i=0;i<n;i++){
    let flag = 0;
    for(let j=0;j<n;j++){
        if(a[i]==a[j]){
            flag++
        }
    }
    if(flag==1){
        console.log(a[i]);
        count++;
    }
}
console.log(count);