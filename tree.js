'use strict';

const argv = process.argv.slice(2);
const size = Number.parseInt(argv[0], 10);

if (!size) {
  console.error('usage: tree <size>');
  process.exit(1);
}

if (size < 3) {
  console.error('Too small. Size must be at least 3');
  process.exit(1);
}

const result = [];

for (let i = 0; i < size; i++) {
  result.push(`${' '.repeat(size - 1 - i)}${'*'.repeat(i * 2 + 1)}`);
}

result.push(`${' '.repeat(size - 2)}| |`);

let str = result.join('\n');

if (argv.includes('--noel')) {
  str = `${' '.repeat(size - 2)}⭐\n${' '.repeat(size - 1)}|\n${str}`;
  const numStars = size ** 2;
  const numBalls = numStars * 0.1;
  for (let i = 0; i < numBalls; i++) {
    const randIndex = Math.round(Math.random() * numStars);
    let seen = 0;
    for (let ind = 0; ind < str.length; ind++) {
      if (str[ind] === '*' && ++seen === randIndex) {
        str = str.slice(0, ind) + 'o' + str.slice(ind + 1);
      }
    }
  }
}

console.log(str);
