/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since
it is divisible by 1, 2 and 4.

The function returns the sum of all prime Numbers that are less than or equal to num*/

function sumPrimes(num) {
    let sumOfPrime = 0;
    let isPrime = function(n) {
        if (n <= 1)
            return false;
        // Check from 2 to n-1
        for (let i = 2; i < n; i++)
            if (n % i === 0)
                return false;

        return true;
    }

    for (let i =0; i<= num; i++)
        if (isPrime(i))
            sumOfPrime += i;

    return sumOfPrime;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));