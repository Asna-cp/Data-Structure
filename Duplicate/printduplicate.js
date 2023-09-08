const a = [1,2,3,1,2,3,4,6]
const n = 8;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(a[i] == a[j]){
            console.log(a[i]);
        }
    }
}