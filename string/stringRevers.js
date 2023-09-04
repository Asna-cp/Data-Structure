
let str = "ARRAY";
let temp;
let arr = str.split(''); // Convert string to array

for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
}

str = arr.join(''); // Convert array back to string
console.log("Reversed string:", str);
