const add = require('./StringCalculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

//haandling single number
test('should return the number itself for a single number string', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

//handling two numbers
test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,5")).toBe(8);
});

//handling more than two numbers
test('should return the sum of two numbers', () => {
    expect(add("1,2,7")).toBe(10);
    expect(add("3,5,63")).toBe(71);
});

//Handling New Lines Between Numbers
test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

//Supporting Different Delimiters
test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
});

//Handle Negative Numbers
test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});

