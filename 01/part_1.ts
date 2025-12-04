import { file } from "bun";

const startNumber = 50;
let currentNumber = startNumber;
let counter = 0;

const formatNumber = () => {
  if (currentNumber >= 100) {
    currentNumber %= 100;
  } else {
    while (currentNumber < 0) {
      currentNumber = 100 + currentNumber;
    }
  }
};

const applyOperation = (operation: string) => {
  if (currentNumber === 0) counter++;
  if (operation.startsWith("R")) {
    currentNumber += Number(operation.slice(1));
    formatNumber();
  } else {
    currentNumber -= Number(operation.slice(1));
    formatNumber();
  }
};

const input = file("./input.txt");
const data = await input.text();
data.split("\n").map((el) => applyOperation(el));

console.log(counter);
