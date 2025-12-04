import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Principle of Mathematical Induction ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Principle of Mathematical Induction
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Mathematical induction is a fundamental technique in mathematics used to prove statements involving natural numbers. 
      It allows us to prove that a statement holds for all n ≥ 1 by verifying a base case and establishing an inductive step.
    </p>

    {/* Explanation Section */}
    <h2 className="text-3xl font-bold mt-8">How Mathematical Induction Works</h2>
    <p className="leading-relaxed">
      Suppose P(n) is a statement about a natural number n. To prove P(n) using induction:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Base Step:</strong> Verify P(1) is true.</li>
      <li><strong>Inductive Step:</strong> Assume P(k) is true for some k ≥ 1, and then show P(k+1) is true.</li>
      <li>If both steps succeed, P(n) is true for all n ∈ ℕ.</li>
    </ul>
    <p className="leading-relaxed">
      This is analogous to falling dominoes: the first domino falls (base case) and ensures all subsequent dominoes fall (inductive step).
    </p>

    {/* Example Section */}
    <h2 className="text-3xl font-bold mt-8">Example: Divisibility by 3</h2>
    <p className="leading-relaxed">
      Prove that for any positive integer n, <strong>n³ + 2n</strong> is divisible by 3.
    </p>

    <p className="leading-relaxed font-semibold">Solution:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Step 1 (Base Case):</strong> n = 1 → 1³ + 2(1) = 3, divisible by 3.</li>
      <li><strong>Step 2 (Inductive Hypothesis):</strong> Assume k³ + 2k is divisible by 3.</li>
      <li><strong>Step 3 (Inductive Step):</strong> (k+1)³ + 2(k+1) = k³ + 3k² + 3k + 1 + 2k + 2 = (k³ + 2k) + 3(k² + k + 1), divisible by 3.</li>
    </ul>
    <p className="leading-relaxed">
      By induction, n³ + 2n is divisible by 3 for all n ∈ ℕ.
    </p>

    {/* Additional Examples */}
    <h2 className="text-3xl font-bold mt-8">Additional Examples</h2>
    <p className="leading-relaxed">
      1 + 3 + 5 + ... + (2n-1) = n²<br/>
      1·2 + 2·3 + ... + n(n+1) = n(n+1)(n+2)/3<br/>
      aₙ = a₁ + (n-1)d is the general term of an arithmetic sequence.
    </p>

    {/* Application in Computer Science */}
    <h2 className="text-3xl font-bold mt-8">Applications in Computer Science</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Proving correctness of recursive algorithms.</li>
      <li>Verifying loop invariants and iterative processes.</li>
      <li>Analyzing properties of data structures like trees, graphs, and linked lists.</li>
      <li>Complexity analysis of algorithms.</li>
      <li>Formal verification in automata and combinatorics.</li>
    </ul>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>1 + 2 + 3 + ... + n = n(n+1)/2</li>
      <li>1³ + 2³ + ... + n³ = [n(n+1)/2]²</li>
      <li>2<sup>n</sup> &gt; n<sup>2</sup> for n &ge; 1</li>
      <li>1·2 + 2·3 + ... + n(n+1) = n(n+1)(n+2)/3</li>
      <li>7ⁿ − 4ⁿ is divisible by 3 for n ≥ 1</li>
    </ul>

  </div>
);

export default Home;
