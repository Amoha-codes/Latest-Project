import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Recurrence Relations ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Recurrence Relations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      Recurrence Relations define sequences in terms of their previous terms and are crucial in analyzing the 
      time complexity of recursive algorithms like Fibonacci, Merge Sort, Binary Search, and Tower of Hanoi.
    </p>

    <h2 className="text-3xl font-bold mt-8">General Form</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      aₙ = f(aₙ₋₁, aₙ₋₂, ..., aₙ₋ₖ)
    </p>
    <p className="leading-relaxed">
      where f defines the relation between the current term and previous terms.
    </p>

    <h2 className="text-3xl font-bold mt-8">Significance in DSA</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Time Complexity Analysis</li>
      <li>Generalizing Divide and Conquer Algorithms</li>
      <li>Analyzing Recursive Algorithms</li>
      <li>Defining State and Transitions for Dynamic Programming</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Examples</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Fibonacci Sequence: F(n) = F(n-1) + F(n-2)</li>
      <li>Factorial: F(n) = n * F(n-1)</li>
      <li>Merge Sort: T(n) = 2*T(n/2) + O(n)</li>
      <li>Tower of Hanoi: H(n) = 2*H(n-1) + 1</li>
      <li>Binary Search: T(n) = T(n/2) + 1</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Recurrence Relations</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Linear Recurrence Relations</li>
      <li>Divide and Conquer Recurrences</li>
      <li>Substitution Recurrences</li>
      <li>Homogeneous Recurrences</li>
      <li>Non-Homogeneous Recurrences</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">1. Linear Recurrence</h3>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      T(n) = T(n-1) + n, T(0) = 1
    </p>
    <p className="leading-relaxed">
      Solving gives: T(n) = n(n+1)/2 = O(n²)
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Divide and Conquer</h3>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      T(n) = 2T(n/2) + cn
    </p>
    <p className="leading-relaxed">
      Solved using Master Theorem: Θ(n log n)
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Substitution Recurrences</h3>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      T(n) = T(√n) + 1
    </p>
    <p className="leading-relaxed">
      Substituting n = 2^m → T(2^m) = S(m) = S(m/2) + 1 → Θ(log log n)
    </p>

    <h3 className="text-2xl font-semibold mt-6">4. Homogeneous Recurrences</h3>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      aₙ = 2aₙ₋₁ - aₙ₋₂
    </p>

    <h3 className="text-2xl font-semibold mt-6">5. Non-Homogeneous Recurrences</h3>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded">
      aₙ = 2aₙ₋₁ - aₙ₋₂ + 3ⁿ
    </p>

    <h2 className="text-3xl font-bold mt-8">Methods to Solve Recurrences</h2>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Substitution Method</li>
      <li>Recurrence Tree Method</li>
      <li>Master Method</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">1. Substitution Method</h3>
    <p className="leading-relaxed">
      Make a guess and prove by induction. <br/>
      Example: T(n) = 2T(n/2) + n → guess O(n log n) → verified by induction.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Recurrence Tree Method</h3>
    <p className="leading-relaxed">
      Visualize the recurrence as a tree, sum work at each level, often forms geometric series. <br/>
      Example: T(n) = T(n/4) + T(n/2) + c*n² → sum series level by level → O(n²)
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Master Method</h3>
    <p className="leading-relaxed">
      Used for recurrences of form: T(n) = aT(n/b) + f(n) where a≥1, b1
    </p>
    <p className="leading-relaxed whitespace-pre-line">
    Cases:{"\n"}
    1. f(n) = O(n^c), c &lt; log_b(a) &rarr; T(n) = Θ(n^log_b(a)){"\n"}
    2. f(n) = Θ(n^c), c = log_b(a) &rarr; T(n) = Θ(n^c log n){"\n"}
    3. f(n) = Ω(n^c), c &gt; log_b(a) &rarr; T(n) = Θ(f(n))
    </p>


    <h3 className="text-2xl font-semibold mt-6">Examples Using Master Method</h3>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Merge Sort: T(n) = 2T(n/2) + Θ(n) → Case 2 → Θ(n log n)</li>
      <li>Binary Search: T(n) = T(n/2) + Θ(1) → Case 2 → Θ(log n)</li>
    </ul>

  </div>
);

export default Home;
