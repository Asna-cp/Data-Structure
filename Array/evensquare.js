//Square of EVEN numbers
const arr = [1,2,4,6,10,3,5]
const evenSquare = [];

for(let i=0;i<=arr.length;i++){
    if(arr[i]%2==0){
        evenSquare.push(arr[i] ** 2)
    }
}

console.log(evenSquare);

//Skip Multiple of 10 

const array = [1,2,4,6,10,3,5]
const arrayoften = []

for(let i=0;i<=array.length;i++){
    if(array[i]%10 !== 0){

        arrayoften.push(array[i])
    }
}
console.log(arrayoften);


//REVERSE OF ARRAY

const a = [1,2,4,6,10,3,5]
const reversedArray = a.reverse();
console.log(reversedArray);

//another reverse Method
const ar = [1,2,4,6,10,3,5]
reverse = []

for(let i=ar.length;i>=0;i--){
    reverse.push(arr[i]);

}
console.log(reverse);



