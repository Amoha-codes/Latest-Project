import React from 'react';

const FermatLittleTheorem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Fermat's Little Theorem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fermat's Little Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Feb, 2025</p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      Fermat's little theorem states that if <strong>p</strong> is a prime number and <strong>a</strong> is any integer, then <strong>a<sup>p</sup> ≡ a (mod p)</strong>.  
      Special Case: If <strong>a</strong> is not divisible by <strong>p</strong>, then <strong>a<sup>p-1</sup> ≡ 1 (mod p)</strong>.
    </p>

    {/* Example 1 */}
    <h2 className="text-3xl font-bold mt-8">Example 1</h2>
    <p className="leading-relaxed">
      Let <strong>a = 2</strong> and <strong>p = 17</strong>.  
      According to Fermat's little theorem: <br/>
      2<sup>17-1</sup> ≡ 1 (mod 17) → 65536 % 17 ≡ 1  
      This means (65536 - 1) is a multiple of 17.
    </p>

    {/* Example 2 */}
    <h2 className="text-3xl font-bold mt-8">Example 2</h2>
    <p className="leading-relaxed">
      Find the remainder of 3<sup>100,000</sup> divided by 53.  
      Since 53 is prime: 3<sup>52</sup> ≡ 1 (mod 53).  
      100,000 ÷ 52 → Quotient = 1923, Remainder = 4  
      (3<sup>52</sup>)<sup>1923</sup> ≡ 1<sup>1923</sup> ≡ 1 (mod 53)  
      Multiply both sides by 3<sup>4</sup>: 3<sup>100,000</sup> ≡ 3<sup>4</sup> ≡ 81 ≡ 28 (mod 53)  
      ✅ Remainder = 28
    </p>

    {/* Use in Modular Inverse */}
    <h2 className="text-3xl font-bold mt-8">Application: Modular Inverse</h2>
    <p className="leading-relaxed">
      If <strong>m</strong> is prime, Fermat's little theorem helps compute modular inverse:  
      a<sup>m-1</sup> ≡ 1 (mod m) → Multiply both sides by a<sup>-1</sup> → a<sup>-1</sup> ≡ a<sup>m-2</sup> (mod m)
    </p>

    {/* C++ Implementation */}
    <h2 className="text-3xl font-bold mt-8">C++ Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`#include <bits/stdc++.h>
using namespace std;

// Function to compute x^y under modulo m
int power(int x, unsigned int y, unsigned int m) {
    if (y == 0) return 1;
    int p = power(x, y / 2, m) % m;
    p = (p * p) % m;
    return (y % 2 == 0) ? p : (x * p) % m;
}

// Function to find modular inverse of a under modulo m (m is prime)
void modInverse(int a, int m) {
    if (__gcd(a, m) != 1)
        cout << "Inverse doesn't exist";
    else
        cout << "Modular multiplicative inverse is " << power(a, m - 2, m);
}

// Driver program
int main() {
    int a = 3, m = 11;
    modInverse(a, m);
    return 0;
}`}
    </pre>

    <p className="leading-relaxed mt-2">
      Output: Modular multiplicative inverse is 4 <br/>
      Time Complexity: O(log m) <br/>
      Auxiliary Space: O(log m) due to recursion stack
    </p>

  </div>
);

export default FermatLittleTheorem;
