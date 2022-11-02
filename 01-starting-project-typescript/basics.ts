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
