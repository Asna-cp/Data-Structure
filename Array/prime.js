const a = [1,2,3,4,5];
const n=5;
for(let i=0;i<n;i++){
  let  flag=0;
    for(let j=1;j<=a[i];j++){
        if(a[i]%j==0){
            flag ++;
        }
    }
    if(flag==2){
        console.log(a[i]);
    }
}