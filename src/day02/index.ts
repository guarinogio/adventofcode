import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  let result = 0;
  for (const line of lines) {
    switch (line) {
      case 'A X':
        result = result + 4
        break;
      case 'A Y':
        result = result + 8
        break;
      case 'A Z':
        result = result + 3
        break;
      case 'B X':
        result = result+ 1
        break;
      case 'B Y':
        result = result + 5
        break;
      case 'B Z':
        result = result + 9
        break;
      case 'C X':
        result = result + 7
        break;
      case 'C Y':
        result =result + 2
        break;
      case 'C Z':
        result = result + 6
        break;
      default:
        break;
    }
  }
  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  let result = 0;
  for (const line of lines) {
    switch (line) {
      case 'A X':
        result = result + 3
        break;
      case 'A Y':
        result = result + 4
        break;
      case 'A Z':
        result = result + 8
        break;
      case 'B X':
        result = result+ 1
        break;
      case 'B Y':
        result = result + 5
        break;
      case 'B Z':
        result = result + 9
        break;
      case 'C X':
        result = result + 2
        break;
      case 'C Y':
        result =result + 6
        break;
      case 'C Z':
        result = result + 7
        break;
      default:
        break;
    }
  }
  return result;
};

run({
  part1: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
