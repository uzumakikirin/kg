const fibo = require('./fibonacci');


// Test boundary conditions
test('finds fibo for 0', () => {
    expect(fibo(0)).toEqual([]);
});

test('finds fibo for 1', () => {
    expect(fibo(1)).toEqual([0]);
});

test('finds fibo for 2', () => {
    expect(fibo(2)).toEqual([0, 1]);
});

// Test around boundary conditions
test('finds fibo for 3', () => {
    expect(fibo(3)).toEqual([0, 1, 1]);
})

test('finds fibo for 4', () => {
    expect(fibo(4)).toEqual([0, 1, 1, 2]);
})

// Validates input format 
// Case: Negative number
test('checks if input is an integer', () => {
    expect(fibo(-1)).toEqual('Please provide a valid argument. Fibonacci is valid only for numbers >= 0');
})

// Case: Float
test('checks if input is an integer', () => {
    expect(fibo(0.3333)).toEqual("Please provide a valid integer input");
})
// Case: String
test('checks if input is an integer', () => {
    expect(fibo('DaftAcademy')).toEqual("Please provide a valid integer input");
})
// Case: Object
test('checks if input is an integer', () => {
    expect(fibo({})).toEqual("Please provide a valid integer input");
})

// Validates output 
test('checks if output is an array', () => {
    expect(fibo(1)).toBeInstanceOf(Array);
})

test('checks if output array is of correct length', () => {
    expect(fibo(8)).toHaveLength(8);
})