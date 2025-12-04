import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Pigeonhole Principle ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pigeonhole Principle
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      The Pigeonhole Principle states that if more objects (pigeons) are placed into fewer containers (pigeonholes), 
      at least one container must hold more than one object. Formally, if <strong>n</strong> items are put into <strong>m</strong> containers 
      with n &gt; m, then at least one container contains more than one item.
    </p>

    <h2 className="text-3xl font-bold mt-8">Simple Examples</h2>
    <p className="leading-relaxed">
      <strong>Example 1:</strong> 13 pigeons in 12 pigeonholes → at least one hole contains ≥ 2 pigeons.
    </p>
    <p className="leading-relaxed">
      <strong>Example 2:</strong> 10 black socks + 12 blue socks. To guarantee a matching pair, pick at least 3 socks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Generalized Pigeonhole Principle</h2>
    <p className="leading-relaxed">
      If n items are placed into k containers, at least one container contains at least 
      ⌈n/k⌉ items.
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> 100 students, 12 months → at least ⌈100/12⌉ = 9 students share a birth month.
    </p>

    <h2 className="text-3xl font-bold mt-8">Pigeonhole Principle Theorem</h2>
    <p className="leading-relaxed">
      If A is the average number of pigeons per hole (non-integer), then:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>At least one pigeonhole contains ≥ ⌈A⌉ pigeons.</li>
      <li>The remaining pigeonholes each contain ≤ ⌊A⌋ pigeons.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Strong Form of Pigeonhole Principle</h2>
    <p className="leading-relaxed">
      Let q1, q2, ..., qn be positive integers. If q1 + q2 + ... + qn - n + 1 objects are put into n boxes, then either the 1st box contains ≥ q1 objects, the 2nd ≥ q2 objects, ..., or the nth ≥ qn objects.
    </p>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Computer Science: Hashing algorithms and collisions.</li>
      <li>Coding Theory: Error detection and correction.</li>
      <li>Number Theory: Existence of certain properties in integer sets.</li>
      <li>Graph Theory: Proving existence of subgraphs with specific properties.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <p className="leading-relaxed">
      <strong>1.</strong> Among 52 integers, there exist two whose difference is divisible by 51. <br/>
      <em>Solution:</em> 52 numbers, 51 remainders → by PHP, two numbers share a remainder.
    </p>
    <p className="leading-relaxed">
      <strong>2.</strong> 1001 people → at least two have the same number of friends. <br/>
      <em>Solution:</em> 0–1000 friends possible, 1001 people → PHP guarantees a match.
    </p>
    <p className="leading-relaxed">
      <strong>3.</strong> 5 points in a unit square → two points ≤ 1/√2 apart. <br/>
      <em>Solution:</em> Divide square into 4 smaller squares → at least two points share a square.
    </p>
    <p className="leading-relaxed">
      <strong>4.</strong> Sequence of 101 distinct reals → increasing/decreasing subsequence length ≥ 11. <br/>
      <em>Solution:</em> Assign longest increasing/decreasing subsequence lengths, PHP ensures a sequence of length 11.
    </p>
    <p className="leading-relaxed">
      <strong>5.</strong> Any set of 10 integers → two distinct subsets with same sum. <br/>
      <em>Solution:</em> 2¹⁰ = 1024 subsets, sum of elements ≤ 90 → PHP ensures repeated subset sum.
    </p>

    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Drawer: 10 black, 10 blue socks. How many to pick for a guaranteed pair?</li>
      <li>Class of x students, scores 0–100. Minimum x for two students to share a score?</li>
      <li>City of 500,000 people → at least two share hair count (max 150,000).</li>
      <li>Group of 6 → at least 3 mutual friends or strangers.</li>
      <li>Store sells 3 shoe types → minimum to guarantee a matching pair?</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Answer Key</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Pick 3 socks to ensure a pair.</li>
      <li>x = 102 students (101 pigeonholes, 0–100 scores).</li>
      <li>PHP ensures two share same hair count.</li>
      <li>At least ⌈5/2⌉ = 3 mutual friends/strangers.</li>
      <li>4 shoes to guarantee at least one matching pair.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Landmark Open Questions in Number Theory</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Riemann Hypothesis zeros real part = 1/2?</li>
      <li>P vs NP: Every problem verifiable quickly can also be solved quickly?</li>
      <li>Hodge classes → algebraic cycles?</li>
      <li>Rank of elliptic curve vs order of zero of L-function at s = 1?</li>
      <li>Collatz conjecture: n → n/2 or 3n+1 always reaches 1?</li>
      <li>Goldbach conjecture: every even  2 sum of two primes?</li>
      <li>Infinitely many twin primes?</li>
      <li>Computational hardness of approximating CSPs?</li>
      <li>4/n as sum of three unit fractions?</li>
      <li>Every bounded linear operator on complex Hilbert space has non-trivial invariant subspace?</li>
    </ul>

  </div>
);

export default Home;
