let name = "Okumba Jeremiah";
let age = 22;
const birthYear = 2004;

console.log(typeof name);
console.log(typeof age);
console.log(typeof true);

// Variable Practice

let myName = "Okumba Jeremiah";
let myAge = 22;
let isStudent = true;
let favoriteColors = ["Blue", "Purple", "Black"];
let today = new Date();

console.log("My Name:", myName);
console.log("My Age:", myAge);
console.log("Am I a student?", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", today);


// ========================
// Number Operations
// ========================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

let count = 0;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);

// ========================
// String Operations
// ========================

let firstName = "Okumba";
let lastName = "Jeremiah";

// Concatenation
let fullName = firstName + " " + lastName;

// Template Literals
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log("Full Name:", fullName);
console.log(greeting);
console.log(message);

// String Methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First Character:", firstName.charAt(0));
console.log("Contains 'Okumba':", fullName.includes("Okumba"));

// ========================
// Comparison Operators
// ========================

console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log('5 == "5":', 5 == "5");
console.log("5 !== 3:", 5 !== 3);

// ========================
// Logical Operators
// ========================

console.log("true && true:", true && true);
console.log("true || false:", true || false);
console.log("!true:", !true);

// ========================
// Challenge
// ========================

let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = birthYear + 100;

console.log("Age in Days:", ageInDays);
console.log("Age in Hours:", ageInHours);
console.log("You will turn 100 in:", yearTurn100);

// ========================
// Function Declarations
// ========================

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const add = function (a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Arrow Function with Body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
};
console.log(greet("Jeremiah"));

console.log(add(10, 5));

console.log(multiply(10, 5));

console.log(divide(10, 5));

console.log(divide(10, 0));

// ========================
// Exercise 2
// Build These Functions
// ========================

// 1. Calculate Area
function calculateArea(width, height) {
    return width * height;
}

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get Initials
function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

// 5. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Rectangle Area:", calculateArea(10, 5));

console.log("30°C =", celsiusToFahrenheit(30), "°F");

console.log("Is 20 even?", isEven(20));

console.log("Initials:", getInitials("Okumba Jeremiah"));

console.log("Reversed:", reverseString("JavaScript"));

// ========================
// Default Parameters
// ========================

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetUser());
console.log(greetUser("jeff"));
console.log(greetUser("mike", "Hi"));

// ========================
// Tip Calculator
// ========================

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Tip for KSh 500:", calculateTip(500));

console.log("Tip for KSh 1000 (10%):", calculateTip(1000, 10));

// ========================
// If/Else Statements
// ========================

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log("95 =", getGrade(95));
console.log("84 =", getGrade(84));
console.log("76 =", getGrade(76));
console.log("62 =", getGrade(62));
console.log("40 =", getGrade(40));

// ========================
// Switch Statements
// ========================

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
console.log(getDayName(0));
console.log(getDayName(1));
console.log(getDayName(2));
console.log(getDayName(3));
console.log(getDayName(4));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(8));

// ========================
// Print Numbers 1 - 100
// ========================

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// ========================
// Even Numbers 1 - 50
// ========================

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// ========================
// FizzBuzz
// ========================

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

// ========================
// Triangle of Stars
// ========================

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// ========================
// Mini Project - Calculator
// ========================

// Add these only if you don't already have them

function subtract(a, b) {
    return a - b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return modulus(num1, num2);

        case "**":
            return power(num1, num2);

        default:
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 5));

// ================================
// TASK 8.1 - ARRAYS
// ================================

// Creating Arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing Elements
console.log("First Fruit:", fruits[0]);
console.log("Number of Fruits:", fruits.length);
console.log("Mixed Array:", mixed);

// Modifying Arrays
fruits.push("grape");
console.log("After push:", fruits);

fruits.unshift("mango");
console.log("After unshift:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

// ================================
// Array Methods
// ================================

numbers.forEach(num => console.log("Double:", num * 2));

const doubled = numbers.map(num => num * 2);
console.log("Doubled Array:", doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even:", firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

console.log("Contains 3?", numbers.includes(3));

// ================================
// Build
// ================================

const values = [5, -3, 12, -8, 20, 7];

const doubledValues = values.map(num => num * 2);
console.log("Doubled:", doubledValues);

const positiveNumbers = values.filter(num => num >= 0);
console.log("Positive Numbers:", positiveNumbers);

const greaterThanTen = values.find(num => num > 10);
console.log("First Number > 10:", greaterThanTen);

const product = values.reduce((total, num) => total * num, 1);
console.log("Product:", product);

// ================================
// TASK 8.2 - OBJECTS
// ================================

const person = {
    firstName: "Okumba",
    lastName: "Jeremiah",
    age: 22,
    isStudent: true,
    hobbies: ["Chess", "Coding", "Blogging"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 23;
person.email = "okumba@example.com";

delete person.isStudent;

console.log(person);

// ================================
// Object Methods
// ================================

const calculator = {

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    }

};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));

// ================================
// Object Iteration
// ================================

const scores = {

    Math: 95,
    English: 88,
    Science: 92

};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {

    console.log(`${subject}: ${score}`);

}

// ================================
// TASK 8.3 - ARRAY OF OBJECTS
// ================================

const students = [

    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }

];

// Student Names
const names = students.map(student => student.name);
console.log(names);

// High Achievers
const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

// Find Charlie
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);

// Average Grade
const avgGrade =
students.reduce((total, student) => total + student.grade, 0) /
students.length;

console.log(avgGrade);

// CS Students
const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors);

// Sort by Grade
const sortedByGrade =
[...students].sort((a, b) => b.grade - a.grade);

console.log(sortedByGrade);

// Grade > 90
const hasTopStudent =
students.some(student => student.grade > 90);

console.log(hasTopStudent);

// Everyone Passing
const allPassing =
students.every(student => student.grade >= 60);

console.log(allPassing);

// ================================
// STUDENT GRADE TRACKER
// ================================

const gradeTracker = {

    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    getStudentAverage(name) {

        const student = this.getStudent(name);

        if (!student) return null;

        const grades = Object.values(student.grades);

        return grades.reduce((a, b) => a + b, 0) / grades.length;
    },

    getSubjectAverage(subject) {

        let total = 0;
        let count = 0;

        this.students.forEach(student => {

            if (student.grades[subject] !== undefined) {

                total += student.grades[subject];
                count++;

            }

        });

        return total / count;

    },

    getTopStudent() {

        return this.students.reduce((top, student) => {

            return this.getStudentAverage(student.name) >
                   this.getStudentAverage(top.name)
                   ? student
                   : top;

        });

    },

    getStrugglingStudents() {

        return this.students.filter(student =>
            this.getStudentAverage(student.name) < 70
        );

    },

    getLetterGrade(score) {

        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";

        return "F";

    },

    generateReportCard(name) {

        const student = this.getStudent(name);

        if (!student) return "Student not found.";

        const average = this.getStudentAverage(name);

        return `
Report Card
------------
Name: ${student.name}

Math: ${student.grades.math}
English: ${student.grades.english}
Science: ${student.grades.science}

Average: ${average.toFixed(2)}
Letter Grade: ${this.getLetterGrade(average)}
`;

    }

};

// Test

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));
