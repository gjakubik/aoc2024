import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  console.log(data);
  let safeRows = 0;
  data.forEach((line) => {
    const numbers = line.split(' ').map((n) => parseInt(n));

    const isIncreasing = numbers[0] < numbers[1];
    console.log('line: ', line);
    console.log('isIncreasing', isIncreasing);
    let isSafe = true;
    numbers.forEach((n, i) => {
      const nextNumber = numbers[i + 1];
      if (isIncreasing) {
        if (nextNumber < n + 1 || nextNumber > n + 3) {
          isSafe = false;
        }
      } else {
        if (nextNumber > n - 1 || nextNumber < n - 3) {
          isSafe = false;
        }
      }
    });

    if (isSafe) {
      console.log('safe row: ', line);
      safeRows++;
    }
  });
  return safeRows;
}

await runSolution(day2a);
