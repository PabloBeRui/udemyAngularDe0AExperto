function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(firstNumber: number, base: number, secondNumber?: number) {
  return firstNumber * base;
}

const result = addNumbers(1, 2);
const result2: string = addNumberArrow(2, 2);
const multiplyResult: number = multiply(5, 2);

console.log({ result });
console.log({ result2 });
console.log({ multiplyResult });
export {};
