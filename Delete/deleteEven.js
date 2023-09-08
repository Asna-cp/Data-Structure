//Delete Even Numbers
const a = [1,2,3,4,5,6];
let n = 6;
 for(let i=0;i<n;i++){
    if(a[i]%2==0){
        for(let j=i;j<n;j++){
            a[j]=a[j+1];
        }
        n--;
        i--;
    
    }
 }
 for(let i=0;i<n;i++){
    console.log(a[i]);
 }