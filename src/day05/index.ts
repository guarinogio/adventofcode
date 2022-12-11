import run from "aocrunner";
import { getNumbersFromString, lines, partition } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput;

const process = (game: string[][], rule: string) => {
  const [move, from, to] = getNumbersFromString(rule);
  for (let p = 0; p < move; p++) {
      game[to-1].unshift(game[from-1].shift()!);
  }
  return game;
}

const process9001 = (game: string[][], rule: string) => {
  const [move, from, to] = getNumbersFromString(rule);
  const pivot: string[] = [] as string[];
  for (let p = 0; p < move; p++) {
      const element = game[from-1].shift()!
      pivot.push(element);
  }
  game[to-1] = pivot.concat(game[to-1]);
  return game;
}


const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = lines(input);
  const [_, rawRules] = partition(inputArray, 
      ((x: string) => inputArray.indexOf("") > inputArray.indexOf(x))
    );

    let game = [
      ['R','W','F','H','T','S'],
      ['W','Q','D','G','S'],
      ['W','T','B'],
      ['J','Z','Q','N','T','W','R','D'],
      ['Z','T','V','L','G','H','B','F'],
      ['G','S','B','V','C','T','P','L'],
      ['P','G','W','T','R','B','Z'],
      ['R','J','C','T','M','G','N'],
      ['W','B','G','L']
    ]

  rawRules.shift();
  const rules = rawRules;
  for (const rule of rules) {
    game = process(game, rule!);
  }
  let res = ''
  for (const col of game) {
    res += col[0];
  }
  return res;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = lines(input);
  const [_, rawRules] = partition(inputArray, 
      ((x: string) => inputArray.indexOf("") > inputArray.indexOf(x))
    );

    let game = [
      ['R','W','F','H','T','S'],
      ['W','Q','D','G','S'],
      ['W','T','B'],
      ['J','Z','Q','N','T','W','R','D'],
      ['Z','T','V','L','G','H','B','F'],
      ['G','S','B','V','C','T','P','L'],
      ['P','G','W','T','R','B','Z'],
      ['R','J','C','T','M','G','N'],
      ['W','B','G','L']
    ]

  rawRules.shift();
  const rules = rawRules;
  for (const rule of rules) {
    game = process9001(game, rule!);
  }
  let res = ''
  for (const col of game) {
    res += col[0];
  }
  return res;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
