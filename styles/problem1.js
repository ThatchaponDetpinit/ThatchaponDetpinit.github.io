type="text/javascript"

function showPrimes(n) {
    Prime = []
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        Prime.push(i)
    }
    alert("For n = " + n + " prime numbers are " + Prime); // a prime
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
