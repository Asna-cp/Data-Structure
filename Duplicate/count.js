const a = [1,2,3,1,2,3,4,6]
const n = 8;
let=count =0;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(a[i] == a[j]){
           count++;
        }
    
    }
}
console.log(count);