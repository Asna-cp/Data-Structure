//Merge and find Duplicate

const a1 = [1, 2, 3, 1];
const a2 = [1, 5, 6, 7];
const output = a1.concat(a2);
console.log(output);

function findDuplicates(arr) {
  duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i]== arr[j] && duplicate.includes(arr[i])) {
        duplicate.push(arr[i]);
      }
    }
  }
  return duplicate;
}

const result = findDuplicates(output);
console.log(result);
