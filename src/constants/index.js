const generateFibonacci = (n) => {
    const fib = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(100); 
        } else if (i === 1) {
            fib.push(200); 
        } else {
            fib.push(fib[i - 1] + fib[i - 2]); 
        }
    }
    return fib;
};

export const EarningMoney = generateFibonacci(15).map(amount => `$ ${amount}`);