let ar = [7, 8, 5, 1, 4,6];

function missing(a) {
  let l = a.length;
  let sum = 0;
  for (let i = 1; i <= l; i++) {
    sum = sum + i;
    sum = sum - a[i - 1];
  }
  return sum;
}

console.log(missing(ar));
