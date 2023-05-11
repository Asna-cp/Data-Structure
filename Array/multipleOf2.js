const array = [1,2,3,4,5,6,7]
const multipleOfTwo = [];

for(let i=0;i<array.length;i++){

    if(array[i] % 2 == 0){

        multipleOfTwo.push(array[i]);
    }
}

console.log(multipleOfTwo);


//MULTIPLE of two b/w 1 - 50

const multipleOf2 = [];

for(let i=1;i<=50;i++){
    if( i % 2 == 0){
        multipleOf2.push(i);
    }
}
console.log(multipleOf2);