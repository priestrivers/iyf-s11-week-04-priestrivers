// ========================
// DAY 1 - FizzBuzz
// ========================

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } ese if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

// ========================
// DAY 2 - Reverse a String
// ========================

// Method 1 - Built-in Methods
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));

// Method 2 - Using a Loop
function reverseStringLoop(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseStringLoop("hello"));
console.log(reverseStringLoop("Coding"));

// ========================
// DAY 3 - Find Largest Number
// ========================

const numbers = [5, 18, 7, 30, 12, 45, 2];

// Method 1 - Using a Loop
function findLargest(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

console.log(findLargest(numbers));

// Method 2 - Using reduce()

const largestNumber = numbers.reduce((largest, current) => {

    return current > largest ? current : largest;

});

console.log(largestNumber);

// ========================
// DAY 4 - Remove Duplicates
// ========================

const values = [1, 2, 2, 3, 4, 4, 5];

// Method 1 - Using Set

const uniqueValues = [...new Set(values)];

console.log(uniqueValues);

// Method 2 - Using filter

const uniqueFilter = values.filter((value, index) => {

    return values.indexOf(value) === index;

});

console.log(uniqueFilter);

// ========================
// DAY 5 - Palindrome Checker
// ========================

function isPalindrome(str) {

    let cleaned = str.toLowerCase().replace(/\s/g, "");

    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;

}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));

