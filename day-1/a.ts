import { runSolution } from '../utils.ts';
import { sum } from 'lodash-es';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  console.log(data);
  const left = [];
  const right = [];
  data.forEach((line) => {
    const [leftVal, rightVal] = line.split('  ');
    left.push(parseInt(leftVal));
    right.push(parseInt(rightVal));
  });
  left.sort();
  right.sort();
  console.log(left, right);

  const distances = left.map((leftVal, i) => {
    const rightVal = right[i];
    return Math.abs(leftVal - rightVal);
  });

  return sum(distances);
}

await runSolution(day1a);
