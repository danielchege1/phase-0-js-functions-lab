// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// Function 4: isPalindrome
function isPalindrome(word) {
    const normalizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = normalizedWord.split('').reverse().join('');
    return normalizedWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage / 100);
}

// Make sure all functions are exported so the tests can find them!
module.exports = { 
    calculateTax, 
    convertToUpperCase, 
    findMaximum, 
    isPalindrome, 
    calculateDiscountedPrice
 
}