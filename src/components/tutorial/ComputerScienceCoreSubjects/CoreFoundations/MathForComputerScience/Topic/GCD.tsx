import React from 'react';

const GCD: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= GCD Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Greatest Common Divisor (GCD)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      The Greatest Common Divisor (GCD), also called the Highest Common Factor (HCF), is the largest number that divides a set of numbers without leaving a remainder.  
      Example: GCD of 4 and 6 is 2.
    </p>
    <p className="leading-relaxed">
      The GCD is always positive. The smallest positive GCD between any two numbers is 1.
    </p>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples of GCD</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        12 and 18: Common divisors: 1, 2, 3, 6 → GCD = 6
      </li>
      <li>
        30 and 15: Common divisors: 1, 3, 5, 15 → GCD = 15
      </li>
      <li>
        4 and 9: Only common divisor is 1 → GCD = 1
      </li>
    </ul>

    {/* How to find GCD */}
    <h2 className="text-3xl font-bold mt-8">How to find GCD</h2>
    <p className="leading-relaxed">
      There are multiple methods to find GCD:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Listing all divisors</li>
      <li>Euclid's Algorithm</li>
      <li>Prime Factorization</li>
      <li>Using LCM: GCD(a, b) = (a × b) / LCM(a, b)</li>
    </ul>

    {/* Euclidean Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Euclidean Algorithm</h2>
    <p className="leading-relaxed">
      Step 1: Divide the larger number by the smaller number. <br />
      Step 2: Replace the larger number with the remainder. <br />
      Step 3: Repeat until remainder is 0. The last non-zero remainder is the GCD.
    </p>

    {/* Properties */}
    <h2 className="text-3xl font-bold mt-8">Properties of GCD</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>GCD(a, b) = GCD(b, a)</li>
      <li>GCD(a, 0) = a</li>
      <li>GCD(a, b) × LCM(a, b) = a × b</li>
      <li>If a and b are coprime, GCD(a, b) = 1</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of GCD</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simplifying fractions</li>
      <li>Finding least common multiples (LCM)</li>
      <li>Cryptography</li>
      <li>Problem solving in competitive programming</li>
      <li>Real-life problems: dividing objects into equal groups</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>GCD of 24 and 36 → 24 = 2³×3, 36 = 2²×3² → GCD = 2²×3 = 12</li>
      <li>GCD of 36 and 72 → Common factors: 1, 2, 3, 4, 6, 9, 12, 18, 36 → GCD = 36</li>
      <li>GCD using Euclid's Algorithm: GCD(48, 18) → 48 mod 18 = 12 → 18 mod 12 = 6 → 12 mod 6 = 0 → GCD = 6</li>
    </ol>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Find GCD of 56 and 98.</li>
      <li>Find GCD of 81 and 27.</li>
      <li>Calculate GCD of 48, 64, and 80.</li>
      <li>Find GCD using Euclid’s algorithm: 210 and 45.</li>
      <li>Check if 17 and 31 are coprime.</li>
      <li>Compute GCD using LCM: a = 36, b = 60, LCM = 180.</li>
      <li>Simplify fraction 84/126 using GCD.</li>
      <li>Find GCD of 7, 14, and 28.</li>
      <li>Compute GCD of two numbers from prime factorization: 90 and 150.</li>
      <li>Problem: Divide 120 sweets among 18 children equally. How many sweets per child? (Use GCD)</li>
    </ol>

    {/* Common Questions */}
    <h2 className="text-3xl font-bold mt-8">Common Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Are GCD and HCF the same? <strong>Yes.</strong></li>
      <li>Are GCD and LCM the same? <strong>No.</strong></li>
      <li>Can GCD be negative? <strong>No.</strong> GCD is always positive.</li>
      <li>How to calculate GCD using LCM? GCD(a, b) = (a × b) / LCM(a, b)</li>
    </ul>

  </div>
);

export default GCD;
