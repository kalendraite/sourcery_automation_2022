function isTriangle(a, b, c) {
    return (a < b + c)  (c < a + b);
}

module.exports = isTriangle;