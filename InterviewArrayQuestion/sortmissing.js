//FIND  MISSING NUMBERS FROM UNSORTED ARRAY

// const a = [5,4,1,1,7];

//INPUTS
// const a = [1,2,0];     
const a= [3,4,-1,1] //2
// const a = [-8,-7,-6]; //1

const n = 4;

// Implement bubble sort (you can use other sorting methods as well)
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(a[i]>a[j]){
            temp=a[i];
            a[i] =a[j];
            a[j] = temp;
        }
    }
}
const missingNumbers = [];

// Iterate through the sorted array to find missing numbers
for (let i = 0; i < n - 1; i++) {
    const diff = a[i + 1] - a[i];
    if (diff > 1) {
        for (let j = 1; j < diff; j++) {
            missingNumbers.push(a[i] + j);
        }
    }
}

console.log("Missing numbers:", missingNumbers);
