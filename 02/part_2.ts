import { file } from "bun";

function getSlices(n: string, i: number) {
  const len = n.length;
  const slices = [];
  for (var j = 0; j < len; j += i) {
    slices.push(n.slice(j, j + i));
  }
  return slices;
}

function compareSlices(slices: string[]) {
  const data = slices.map((slice) => {
    if (slices.some((o) => slice !== o)) {
      return false;
    }
  });
  if (data.some((el) => el === false)) return false;

  return true;
}

function checkInvalidNumber(n: number) {
  const stringN = n.toString();
  const strLen = stringN.length;

  for (var i = 1; i < strLen; ++i) {
    const slices = getSlices(stringN, i);
    if (compareSlices(slices)) {
      return n;
    }
  }

  return 0;
}

let counter = 0;

const data = file("input.txt");
const input = await data.text();

input.split(",").map((pair) => {
  const numbers = pair.split("-");
  const start = numbers[0]!;
  const end = numbers[1]!;
  for (var i = Number(start); i <= Number(end); ++i) {
    counter += checkInvalidNumber(i);
  }
});

console.log(counter);
