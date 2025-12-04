import { file } from "bun";

function checkDoubleNumber(n: number) {
  const stringN = n.toString();
  const len = stringN.length / 2;
  const part1 = stringN.slice(0, len);
  const part2 = stringN.slice(len);
  if (part1 === part2) return n;
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
    counter += checkDoubleNumber(i);
  }
});
console.log(counter);
