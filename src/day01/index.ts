import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const calories = input.split('\n');
  let max = 0;
  let pivot = 0;
  for (let i = 0; i < calories.length; i++) {
    if(calories[i] == ''){
      max = pivot > max ? pivot : max;
      pivot = 0;
    }else{
      pivot = pivot + parseInt(calories[i]);
    }    
  }
  return max;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const calories = input.split('\n');
  let max: number[] = [];
  let pivot = 0;
  for (let i = 0; i < calories.length; i++) {
    if(calories[i] == ''){
      max.push(pivot);
      pivot = 0;
    }else{
      pivot = pivot + parseInt(calories[i]);
    }    
  }
  max.push(pivot);
  max = max.sort(function(a, b){return b - a});
  const result = max[0] + max[1] + max[2];
  return result;
};

run({
  part1: {
    tests: [
      {
        input:`
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000
        `,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input:`
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000
        `,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
