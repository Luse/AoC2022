const fetchFile = async (): Promise<string> => (
  await Deno.readTextFile("./input.txt")
);

interface IDirectory {
  path: string;
  size: number;
  children: IDirectory[];
}

class Directory implements IDirectory {
  path: string;
  size: number;
  children: IDirectory[];

  constructor(path: string, size: number, children: IDirectory[]) {
    this.path = path;
    this.size = size;
    this.children = children;
  }
}

export const mapDirectories = (file: string): IDirectory => {
  `$ cd /
  $ ls
  dir a
  14848514 b.txt
  `;

  const sections = file.split(/\r?\n/);
  let currentDirectory: IDirectory = new Directory("/", 0, []);
  sections.forEach((e) => {
    const isCommand = e.includes("$");
  });

  return currentDirectory;
};

export const firstStar = (file: string): number => {
  return 0;
};

export const secondStar = (file: string): any => {
  return "bar";
};

console.log("first ⭐: ", firstStar(await fetchFile()));
console.log("second ⭐: ", secondStar(await fetchFile()));
