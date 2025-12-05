import { file } from "bun";
import { isParenthesizedTypeNode } from "typescript";

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

function extractBiggestNumber(line: string, length: number) {
  const result = [];
  let lastIndex = 0;
  for (var i = length; i > 0; --i) {
    const iThNumber = findLargestNumberInString(line.slice(lastIndex), i - 1);
    lastIndex = iThNumber[1]! + 1 + lastIndex;
    result.push(iThNumber[0]);
  }

  return Number(result.join(""));
}

input.split("\n").forEach((line) => {
  sum += extractBiggestNumber(line, 12);
});

console.log(sum);
