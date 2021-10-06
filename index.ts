let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = "hello";
let double = "hello";
let back = `hello`;

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}

const book: [string, number, boolean] = ['business', 1500, false];

enum Coffeesize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: Coffeesize.TALL
}

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"]

const apple: 'apple' = 'apple'
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}