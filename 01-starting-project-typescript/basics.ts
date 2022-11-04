// Primitives: number, string, boolean
// Complex types: arrays, objects
// Function types: parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// Type Alias
type Person = {
  name: string;
  age: number;
};

let person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true
// }

// an array of object
let people: Person[];

// Type Inference
// Union type

let course: string | number = 'React - The Complete Guide';

course = 1234;

// Type alias

// Functions & types
// inferred return value type
function add(a: number, b: number): number {
  return a + b;
}

// void is inferred for functions
function printOuput(value: any) {
  console.log(value);
}

// Generics
// looks at the type of values to match with return type
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
// now it knows that this array is a number type
const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c', 'd'], 'd');
