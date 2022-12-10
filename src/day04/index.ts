import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const getNumbersFromString = (text: string): number[] => {  
  if(text){
    return text.replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));
  }
  return [];
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  let result = 0;
  for (const line of lines) {
    const [fromOne, toOne, fromTwo, toTwo] = getNumbersFromString(line);
    if(
      fromOne <= fromTwo && toOne >= toTwo ||
      fromTwo <= fromOne && toTwo >= toOne
      ){
        result++;
      }
  }
  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  let result = 0;
  for (const line of lines) {
    const [fromOne, toOne, fromTwo, toTwo] = getNumbersFromString(line);
    if(
      (toOne >= fromTwo && toOne <= toTwo) ||
      (toTwo >= fromOne && toTwo <= toOne)
      ){
        result++;
      }
  }
  return result;
};

run({
  part1: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
