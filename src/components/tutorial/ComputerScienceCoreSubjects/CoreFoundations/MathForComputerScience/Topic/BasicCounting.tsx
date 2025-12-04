import React from 'react';

const FundamentalCounting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Fundamental Principle of Counting ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fundamental Principle of Counting
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      The Fundamental Principle of Counting is a method used to determine the total number of possible outcomes 
      in situations with multiple independent events. It allows counting all possibilities without listing each one.
    </p>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>
    
    <h3 className="text-2xl font-semibold mt-4">Example 1: 3-digit PIN</h3>
    <p className="leading-relaxed">
      Each digit can be 0–9, so total combinations = 10 × 10 × 10 = 1000 (from 000 to 999).
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2: Apparel combinations</h3>
    <p className="leading-relaxed">
      3 types of apparel × 3 colors × 3 sizes = 3 × 3 × 3 = 27 combinations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 3: Dressing with pants and shirts</h3>
    <p className="leading-relaxed">
      3 pants × 2 shirts = 6 ways to dress.
    </p>

    <h2 className="text-3xl font-bold mt-8">Rules of Counting</h2>

    <h3 className="text-2xl font-semibold mt-4">Multiplication Rule</h3>
    <p className="leading-relaxed">
      If an event can occur in <strong>m</strong> ways and another independent event in <strong>n</strong> ways, 
      then both events together occur in <strong>m × n</strong> ways.  
      For three events: total outcomes = m × n × p.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Addition Rule</h3>
    <p className="leading-relaxed">
      If A and B are mutually exclusive events, then the number of ways A or B occurs = n(A) + n(B).
    </p>

    <h2 className="text-3xl font-bold mt-8">Practice Problems & Solutions</h2>
    
    <ol className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Four-letter words from "ROSE" (no repetition): 4 × 3 × 2 × 1 = 24 ways</li>
      <li>Two-flag signals (6 flags, no repetition): 6 × 5 = 30 ways</li>
      <li>Two-digit even numbers from 1–5 (digits can repeat): 5 × 2 = 10 numbers</li>
      <li>Positive divisors of 1000 = 2³ × 5³ → 4 × 4 = 16 divisors</li>
      <li>Select 4 books from 5 novels, 3 biographies, 4 textbooks (at least one of each type): 5 × 3 × 4 × 9 = 540 ways</li>
      <li>Probability of exactly 2 married among 4 people (6 couples): 270 / 495 = 6/11 ≈ 0.5455</li>
      <li>7-digit phone numbers, first digit ≠ 0 or 1, no repetition: 8 × 9 × 8 × 7 × 6 × 5 × 4 = 483,840</li>
      <li>People not liking coffee or tea (30 people, 18 like coffee, 15 like tea, 10 both): 30 − (18 + 15 − 10) = 7</li>
      <li>Probability of drawing 1 red, 1 blue, 1 green from 5R,3B,2G marbles: 30/120 = 0.25</li>
      <li>Arrangements of "STATISTICS" with all S's together & T's together: 6! / 2! × 3! × 3! = 12,960 ways</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <p className="leading-relaxed">
      The Fundamental Principle of Counting forms the basis of permutations, combinations, and probability.  
      Multiplication rule is for independent events; addition rule is for mutually exclusive events.
    </p>

  </div>
);

export default FundamentalCounting;
