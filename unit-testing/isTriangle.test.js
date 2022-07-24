const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(3, 5, 4)).toBe(true);
    expect(isTriangle(5, 4, 3)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});


test('1, 5 is not triangle', () => {
    expect(isTriangle(1, 5)).toBe(false);
});

test('-4, 5, 6 is not triangle', () => {
    expect(isTriangle(-4, 5, 6)).toBe(false);
});

test('6.5, 4, 5 is triangle', () => {
    expect(isTriangle(-4, 5, 6)).toBe(true);
});
