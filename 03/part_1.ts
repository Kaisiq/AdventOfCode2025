import { file } from "bun";

const data = file("input.txt");
const input = await data.text();
let sum = 0;

function findLargestNumberInString(str: string, lenModifier: number) {
  let largestNumber = 0;
  let largestIndex = 0;
  const len = str.length - lenModifier;
  for (var i = 0; i < len; ++i) {
    if (Number(str[i]) > largestNumber) {
      largestNumber = Number(str[i]);
      largestIndex = i;
    }
  }
  return [largestNumber, largestIndex];
}

function extractBiggestNumber(line: string) {
  const firstNumber = findLargestNumberInString(line, 1);
  const secondNumber = findLargestNumberInString(
    line.slice(firstNumber[1]! + 1),
    0,
  );

  return Number(`${firstNumber[0]}${secondNumber[0]}`);
}

input.split("\n").forEach((line) => {
  sum += extractBiggestNumber(line);
});

console.log(sum);
