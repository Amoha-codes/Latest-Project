import React from 'react';

const ModularArithmetic: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Modular Arithmetic ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Modular Arithmetic
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Sep, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Modular arithmetic is a system of arithmetic where numbers "wrap around" after reaching a certain value, called the modulus. It is often called "clock arithmetic." For example, in a 12-hour clock, 9 + 4 = 13, which wraps around to 1.
    </p>
    <p className="leading-relaxed">
      Modular arithmetic is widely used in cryptography, computer science, number theory, and engineering.
    </p>

    {/* Division with Remainder */}
    <h2 className="text-3xl font-bold mt-8">Division with Remainder</h2>
    <p className="leading-relaxed">
      For integers A and B, dividing gives a quotient Q and remainder R: <br />
      <strong>A ÷ B = Q remainder R</strong> <br />
      The modulo operator focuses on the remainder: <strong>A mod B = R</strong>
    </p>
    <p className="leading-relaxed">Example: 13 ÷ 5 = 2 remainder 3 → 13 mod 5 = 3</p>

    {/* Congruence */}
    <h2 className="text-3xl font-bold mt-8">Congruence</h2>
    <p className="leading-relaxed">
      For integers a, b and modulus n, <strong>a ≡ b (mod n)</strong> if a and b leave the same remainder when divided by n.
    </p>

    {/* Quotient Remainder Theorem */}
    <h2 className="text-3xl font-bold mt-8">Quotient Remainder Theorem</h2>
    <p className="leading-relaxed">
      For integers a and positive b, there exist unique q and r such that <strong>a = b × q + r</strong> where 0 ≤ r  <br />
      Example: a = 20, b = 6 → q = 3, r = 2 → 20 = 6 × 3 + 2
    </p>

    {/* Modular Operations */}
    <h2 className="text-3xl font-bold mt-8">Modular Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Modular Addition:</strong> (a + b) mod m = ((a mod m) + (b mod m)) mod m <br />
        Example: (15 + 17) mod 7 = ((15 mod 7) + (17 mod 7)) mod 7 = 4
      </li>
      <li>
        <strong>Modular Multiplication:</strong> (a × b) mod m = ((a mod m) × (b mod m)) mod m <br />
        Example: (12 × 13) mod 5 = 1
      </li>
      <li>
        <strong>Modular Division:</strong> Only exists if b has a modular inverse under m. <br />
        (a / b) mod m = (a × (inverse of b)) mod m
      </li>
      <li>
        <strong>Modular Inverse:</strong> b is inverse of a mod m if (a × b) mod m = 1. Exists if gcd(a, m) = 1 <br />
        Example: a = 5, m = 7 → 5 × 3 mod 7 = 1 → 3 is inverse
      </li>
      <li>
        <strong>Modular Exponentiation:</strong> Compute a^b mod m efficiently using recursion or iteration in O(log n) time.
      </li>
    </ul>

    {/* Example: Modular Exponentiation Code */}
    <h3 className="text-2xl font-bold mt-4">Example: Modular Exponentiation (C++)</h3>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`#include<iostream>
using namespace std;

int modpower(int x, int n, int m) {
    if (n == 0) return 1 % m;
    long long u = modpower(x, n/2, m);
    u = (u * u) % m;
    if (n % 2 == 1) u = (u * x) % m;
    return u;
}

int main() {
    cout << modpower(5, 2, 7) << endl;
    return 0;
}`}
    </pre>
    <p className="leading-relaxed">Output: 4 | Time Complexity: O(log n)</p>

    {/* Fermat's Theorem */}
    <h2 className="text-3xl font-bold mt-8">Fermat's Theorem</h2>
    <p className="leading-relaxed">
      If m is prime and x is coprime with m: <br />
      <strong>x^(m-1) mod m = 1</strong> <br />
      This also implies: x^k mod m = x^(k mod (m-1)) mod m
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cryptography: RSA and public-key encryption</li>
      <li>Computer Science: Hashing, checksums, data integrity</li>
      <li>Number Theory: Solving congruences, Diophantine equations</li>
      <li>Digital Signal Processing: FFT, error-correcting codes</li>
      <li>Clock Arithmetic: Hours wrap around after 12 or 24</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>38 ≡ 14 (mod 12)</li>
      <li>(27 + 19) mod 7 = 4</li>
      <li>(23 × 17) mod 5 = 1</li>
      <li>7^100 mod 11 = 1</li>
      <li>5x ≡ 3 (mod 7) → x ≡ 2 (mod 7)</li>
      <li>Chinese Remainder Theorem → x = 23 (mod 105)</li>
      <li>Modular inverse of 3 mod 11 → 4</li>
      <li>7^222 mod 11 = 5 (Fermat's Little Theorem)</li>
    </ol>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Calculate 47 mod 7.</li>
      <li>Solve 5x ≡ 3 (mod 8)</li>
      <li>Find modular inverse of 5 mod 11.</li>
      <li>Using Fermat's Little Theorem, calculate 7^100 mod 11.</li>
      <li>Solve system: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 4 (mod 7)</li>
      <li>Determine if 29 is prime using Wilson's Theorem.</li>
      <li>Calculate (17 × 23 + 31) mod 13.</li>
      <li>Remainder when 3200 is divided by 7.</li>
      <li>Solve x^2 ≡ 4 (mod 11)</li>
      <li>Given 7^10 ≡ 1 (mod 11), find 7^103 mod 11.</li>
    </ol>

  </div>
);

export default ModularArithmetic;
