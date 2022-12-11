import run from "aocrunner";


 const  getDirectorySizes = (lines : string[]): Map<string,number> => {
  
  const dirs = new Map();
  let currentDirectory = ['.'];

  for (let line of lines) {
    if (line.startsWith('$')) {
      let [, command, arg] = line.split(' ');

      if (command === 'cd') {
        if (arg === '/') {
          currentDirectory.splice(1);
        } else if (arg === '..') {
          currentDirectory.pop();
        } else {
          currentDirectory.push(arg);
        }
      }
    }

    if (!line.startsWith('dir') && !line.startsWith('$')) {
      const [size] = line.split(' ');
      const key = currentDirectory.join('/');
      dirs.set(key, (dirs.get(key) || 0) + Number(size));
      if (currentDirectory.length > 1) {
        for (let i = currentDirectory.length - 1; i > 0; i--) {
          const parentKey = currentDirectory.slice(0, i).join('/');
          dirs.set(parentKey, (dirs.get(parentKey) || 0) + Number(size));
        }
      }
    }
  }

  return dirs;
}

const getSumOfTotalSizes = (dirs: Map<string,number>): number => {
  let total = 0;
  for (let size of dirs.values()) {
    if (size <= 100000) {
      total += size;
    }
  }
  return total;
}

export function getSmallestDirToDelete(dirs: Map<string,number>) {
  const usedSpace = dirs.get('.')!;
  const minRequired = 30000000 - (70000000 - usedSpace);
  let smallest = Infinity;
  for (let size of dirs.values()) {
    if (size >= minRequired && size < smallest) {
      smallest = size;
    }
  }
  return smallest;
}


const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  const dirs = getDirectorySizes(lines);
  const result = getSumOfTotalSizes(dirs);
  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  const dirs = getDirectorySizes(lines);
  const result = getSmallestDirToDelete(dirs);
  return result;
};

run({
  part1: {
    tests: [
      {
        input: `
        $ cd /
        $ ls
        dir a
        14848514 b.txt
        8504156 c.dat
        dir d
        $ cd a
        $ ls
        dir e
        29116 f
        2557 g
        62596 h.lst
        $ cd e
        $ ls
        584 i
        $ cd ..
        $ cd ..
        $ cd d
        $ ls
        4060174 j
        8033020 d.log
        5626152 d.ext
        7214296 k`,
        expected: 95437,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        $ cd /
        $ ls
        dir a
        14848514 b.txt
        8504156 c.dat
        dir d
        $ cd a
        $ ls
        dir e
        29116 f
        2557 g
        62596 h.lst
        $ cd e
        $ ls
        584 i
        $ cd ..
        $ cd ..
        $ cd d
        $ ls
        4060174 j
        8033020 d.log
        5626152 d.ext
        7214296 k`,
        expected: 24933642,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
