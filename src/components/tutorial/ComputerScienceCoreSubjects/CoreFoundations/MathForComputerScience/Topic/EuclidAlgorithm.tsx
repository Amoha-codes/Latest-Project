import React from 'react';

const EuclidDivisionAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Euclid's Division Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Euclid's Division Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Jul, 2025</p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      The Euclidean Division Algorithm is a method to find the Greatest Common Divisor (GCD) of two integers.  
      Given two positive integers <strong>a</strong> and <strong>b</strong> (a ≥ b), we repeatedly divide and find remainders until the remainder becomes zero.  
      Using Euclid's Lemma: <strong>a = bq + r</strong>, then GCD(a, b) = GCD(b, r).  
      The algorithm terminates when the remainder becomes zero, and the last non-zero remainder is the GCD.
    </p>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps to Find GCD Using Euclid's Division Algorithm</h2>
    <ol className="list-decimal list-inside leading-relaxed">
      <li>Divide <strong>A</strong> by <strong>B</strong> to get quotient <strong>Q</strong> and remainder <strong>R</strong>: A = B × Q + R</li>
      <li>Replace A with B and B with R, then repeat the division.</li>
      <li>Continue until remainder = 0. The last non-zero remainder is the GCD.</li>
      <li>If A = 0, GCD(A, B) = B. If B = 0, GCD(A, B) = A.</li>
    </ol>

    {/* Proof */}
    <h2 className="text-3xl font-bold mt-8">Proof of Euclid's Division Algorithm</h2>
    <p className="leading-relaxed">
      Let a = bq + r. If c divides both a and b, then c divides r = a − bq.  
      Conversely, if d divides both b and r, then d divides a = bq + r.  
      Hence, GCD(a, b) = GCD(b, r).  
      Repeating this process with decreasing remainders eventually yields r = 0, and the last non-zero remainder is the GCD.
    </p>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>

    <h3 className="text-2xl font-semibold mt-4">Example 1: GCD of 252 and 105</h3>
    <p className="leading-relaxed">
      252 ÷ 105 → Quotient = 2, Remainder = 42 → GCD(252, 105) = GCD(105, 42) <br/>
      105 ÷ 42 → Quotient = 2, Remainder = 21 → GCD(105, 42) = GCD(42, 21) <br/>
      42 ÷ 21 → Quotient = 2, Remainder = 0 → GCD(42, 21) = 21 <br/>
      ✅ GCD(252, 105) = 21
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2: GCD of 360 and 96</h3>
    <p className="leading-relaxed">
      360 ÷ 96 → Quotient = 3, Remainder = 72 → GCD(360, 96) = GCD(96, 72) <br/>
      96 ÷ 72 → Quotient = 1, Remainder = 24 → GCD(96, 72) = GCD(72, 24) <br/>
      72 ÷ 24 → Quotient = 3, Remainder = 0 → GCD(72, 24) = 24 <br/>
      ✅ GCD(360, 96) = 24
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Find GCD of 120 and 45 → 15</li>
      <li>Find GCD of 144 and 60 → 12</li>
      <li>Find GCD of 462 and 192 → 6</li>
      <li>Find GCD of 84 and 56 → 28</li>
    </ul>

  </div>
);

export default EuclidDivisionAlgorithm;
