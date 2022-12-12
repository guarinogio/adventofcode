import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const isVisible = (tree: number, forest: number[][], i: number, j: number): boolean => {
  let left = true;
  let right = true;
  let up = true;
  let drown = true;
  for (let m = 0; m < i; m++) {
      if(forest[m][j] >= tree){
        left = false;
      }
  }

  for (let m = i+1; m < forest[i].length; m++) {
    if(forest[m][j] >= tree){
      right = false;
    }
  } 

  for (let m = 0; m < j; m++) {
    if(forest[i][m] >= tree){
      up = false;
    }
  }

  for (let m = j+1; m < forest[j].length; m++) {
    if(forest[i][m] >= tree){
      drown = false;
    }
  }
  
  return (left || right || up || drown)!;
} 

const getScore = (tree: number, forest: number[][], i: number, j: number): number => {
  let left = 0;
  let right = 0;
  let up = 0;
  let drown = 0;

  for (let m = i-1; m >= 0; m--) {
    left++;
    if( forest[m][j] >= tree){
      break;
    }
  } 

  for (let m = i+1; m < forest[i].length; m++) {
    right++;
    if( forest[m][j] >= tree){
      break;
    }
  } 

  for (let m = j-1; m >= 0; m--) {
    up++;
    if( forest[i][m] >= tree){
      break;
    }
  } 

  for (let m = j+1; m < forest[i].length; m++) {
    drown++;
    if( forest[i][m] >= tree){
      break;
    }
  } 
  return left * right * up * drown;
} 

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const forest = input.split('\n').map(line => line.split('').map(tree => Number(tree)));
  let result = ((forest.length + forest[0].length) * 2) - 4;
  for (let i = 1; i < forest.length-1; i++) {
    for (let j = 1; j < forest[i].length-1; j++) {
      if(isVisible(forest[i][j], forest, i, j)){
        result++;
      }
    }    
  }
  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const forest = input.split('\n').map(line => line.split('').map(tree => Number(tree)));
  let result = 0;
  for (let i = 1; i < forest.length-1; i++) {
    for (let j = 1; j < forest[i].length-1; j++) {
      const score = getScore(forest[i][j], forest, i, j)
      result = result < score ? score : result;
    }    
  }
  return result;
};

run({
  part1: {
    tests: [
      {
        input: `
        30373
        25512
        65332
        33549
        35390`,
        expected: 21,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        30373
        25512
        65332
        33549
        35390`,
        expected: 8,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
