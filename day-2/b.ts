import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2b(data: string[]) {
  let safeRows = 0;
  data.forEach((line) => {
    const numbers = line.split(' ').map((n) => parseInt(n));

    let isSafe = false;

    if (isSequenceValid(numbers)) {
      isSafe = true;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        const numbersWithoutI = [
          ...numbers.slice(0, i),
          ...numbers.slice(i + 1),
        ];
        if (isSequenceValid(numbersWithoutI)) {
          isSafe = true;
          break;
        }
      }
    }

    if (isSafe) {
      safeRows++;
    }
  });
  return safeRows;
}

function isSequenceValid(numbers: number[]): boolean {
  const isIncreasing = numbers[0] < numbers[1];

  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i + 1] - numbers[i];
    if (isIncreasing) {
      if (diff < 1 || diff > 3) return false;
    } else {
      if (diff > -1 || diff < -3) return false;
    }
  }
  return true;
}

await runSolution(day2b);
