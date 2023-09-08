const arr = [1,2,4,5,6]
arr.splice(0,2);
console.log(arr);

//ANOTHER METHOD TO DELETE 2

const a = [1,2,3,4,5];
let n=5;
for(let i=0;i<n;i++){
    if(a[i]==2){
        for(j=i;j<n;j++){
            a[j] = a[j+1];
        }
        n--;
        i--;
    }
}
for(let i=0;i<n;i++){
    console.log(a[i]);
}