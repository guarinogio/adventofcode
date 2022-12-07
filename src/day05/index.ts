import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const lines = (text: string): string[] => {  
  return text.split('\n')
}

const getNumbersFromString = (text: string): number[] => {  
  if(text){
    return text.replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));
  }
  return [];
}

const getCharsFromString = (text: string): string[] => {  
  if(text){
    return text.replace(/\b[a-zA-Z]\s/g, ' ').trim().split(' ');
  }
  return [];
}


const partition = <T>(ary: T[], callback: (e: T) => {}) =>
  ary.reduce((acc:[T[],T[]], e) => {
    acc[callback(e) ? 0 : 1].push(e)
    return acc
  }, [[], []])

const process = (game: string[], rule: string) => {
  const [move, from, to] = getNumbersFromString(rule);
  for (let p = 0; p < move; p++) {
    
  }
  return game;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = lines(input);
  const [game, rawRules] = partition(inputArray, 
      ((x: string) => inputArray.indexOf("") > inputArray.indexOf(x))
    );
  const rules = [, ...rawRules];
  const data: string[][] = [];
  const length = game[0].length;

    for (let index = 1; index < length; index+4) {
      data.push([]);
      let pivot = 0;
      for (let j = 0; j < game.length; j++) {
        const element = game[index][j];
        data[pivot].push(element);
        pivot++;
      }
    }
  for (const rule of rules) {
    //result = process(result, rule!);
  }
  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
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
