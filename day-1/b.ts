import { runSolution } from '../utils.ts';
import { sum } from 'lodash-es';
/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  console.log(data);

  const left = [];
  const right = [];
  data.forEach((line) => {
    const [leftVal, rightVal] = line.split('  ');
    left.push(parseInt(leftVal));
    right.push(parseInt(rightVal));
  });

  const similiarities = left.map((leftVal) => {
    let similarityScore = 0;
    right.forEach((rightVal) => {
      if (leftVal === rightVal) {
        similarityScore++;
      }
    });
    return leftVal * similarityScore;
  });
  return sum(similiarities);
}

await runSolution(day1b);
