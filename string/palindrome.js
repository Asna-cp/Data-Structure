const words = ['racecar', 'deified', 'level', 'rotor', 'civic', 'stats'];

for (let word of words) {
  if (word === word.split('').reverse().join('')) {
    console.log(word);
  }
}