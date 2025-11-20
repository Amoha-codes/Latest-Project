import React from 'react';

const LogicBuildingTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Logic Building Problems ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Logic Building Problems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Logic building involves creating clear, step-by-step methods to solve problems using simple rules and principles. It is the core of programming, enabling developers to think critically, reason, and arrive at efficient solutions.
    </p>

    <h2 className="text-3xl font-bold mt-6">Tips for Improving Logic</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Understand the Problem: Carefully read and comprehend the problem statement.</li>
      <li>Generate Examples: Create sample input and output cases to understand scenarios.</li>
      <li>Draw Observations: Identify patterns and relationships in the examples.</li>
      <li>Start Basic, Then Optimize: Begin with a simple solution and improve efficiency gradually.</li>
    </ul>

    {/* ================= Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">Concepts & Problems</h2>

    {/* Maths for Computer Science */}
    <h3 className="text-2xl font-semibold mt-4">Maths for Computer Science</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Basic Problems: Even/Odd Check, Multiplication Table, Sum of Naturals, Sum of Squares, Swap Two Numbers, Closest Number, Dice Problem, Nth Term of AP</li>
      <li>Easy Problems: Sum of Digits, Reverse Digits, Prime Testing, Check Power, Distance Between Two Points, Valid Triangle, Overlapping Rectangles, Factorial, Pair Cube Count, GCD/HCF, LCM, Perfect Number, Add Two Fractions, Day of the Week, Nth Fibonacci Number, Decimal to Binary, N-th term of 1, 3, 6, 10..., Armstrong Number, Palindrome Number, Digit Root</li>
      <li>Medium Problems: Square Root, 3 Divisors, Divisible by 4, Divisibility by 11, Divisibility by 13, K-th Digit in a^b, Fraction to Recurring Decimal, Recurring Sequence in a Fraction, nPr, nCr, Pascal’s Triangle, All Factors, Prime Factorization, Largest Prime Factor, Modular Exponentiation, nth Catalan Number, Binomial Coefficient, Power Set, Next Permutation</li>
      <li>Hard Problems: Sieve of Eratosthenes, Super Prime, Clock Angle Problem, Tower of Hanoi, Rat and Poisoned, 8 Puzzle Problem, Euler's Totient Function, Josephus Problem</li>
    </ul>

  </div>
);

export default LogicBuildingTutorial;
