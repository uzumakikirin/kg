function fibonacci(number) {
    if (number < 0) {
        return (`Please provide a valid argument. Fibonacci is valid only for numbers >= 0`);
    }

    if (!Number.isInteger(number)) {
        return (`Please provide a valid integer input`);
    }

    switch(number) {
        case 0: return [];
        case 1: return [0];
        case 2: return [0, 1];
    }

    let fibArray = [0, 1];
    for (let i = 2; i < number; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray;
}

module.exports = fibonacci;