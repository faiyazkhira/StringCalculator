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

//Handling New Lines Between Numbers
test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

