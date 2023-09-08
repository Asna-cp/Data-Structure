const a = [1,100,23,5,40]
const n=5;
const output = arr.sort((a,b)=>a-b);
console.log(output);

//Another Method
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(a[i]>a[j]){
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;

        }
    }
   
}
for(let i=0;i<n;i++){
    console.log(a[i]);
}