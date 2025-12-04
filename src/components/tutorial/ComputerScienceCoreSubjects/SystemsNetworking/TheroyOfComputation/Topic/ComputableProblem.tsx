import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Computable and Non-Computable Problems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computable and Non-Computable Problems in TOC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Computable Problems */}
    <h2 className="text-3xl font-bold mt-8">Computable Problems</h2>
    <p className="leading-relaxed">
      In the Theory of Computation, a problem is <strong>computable</strong> if there exists an algorithm that can solve it in a finite number of steps. Computable problems always lead to a correct solution.
    </p>
    <p className="leading-relaxed">
      Example: Computing f(x) = x + 1 for any integer x.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Computing the greatest common divisor of two integers.</li>
      <li>Computing the least common multiple of two integers.</li>
      <li>Finding the shortest path between two nodes in a finite graph.</li>
      <li>Determining whether a propositional formula is a tautology.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficiency: Algorithms exist that can solve many computable problems efficiently.</li>
      <li>Predictability: Well-defined inputs and outputs make their behavior predictable.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Some computable problems may require significant time or resources to solve.</li>
    </ul>

    {/* Non-Computable Problems */}
    <h2 className="text-3xl font-bold mt-8">Non-Computable Problems</h2>
    <p className="leading-relaxed">
      A problem is <strong>non-computable</strong> if no algorithm exists to solve it for all inputs. These problems cannot be solved regardless of time or resources.
    </p>
    <p className="leading-relaxed">
      Example: The <strong>Halting Problem</strong> – given a Turing machine and its input, determine whether it halts or runs forever.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Determining whether a computer program (or Turing machine) loops forever on some input.</li>
      <li>State Entry Problem: Determining if a Turing machine enters a specific state for a given input.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Flexibility: Represent fundamental mathematical or logical questions.</li>
      <li>Theoretical Insights: Help establish limits of computation and inspire new computational models.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Lack of Practical Solutions: No general method exists to solve these problems.</li>
      <li>Intractability: Often involve infinite computations, making reasoning difficult.</li>
    </ul>

    {/* Proving Computability / Non-Computability */}
    <h2 className="text-3xl font-bold mt-8">Proving Computability or Non-Computability</h2>
    <p className="leading-relaxed">
      <strong>To prove a problem is computable:</strong> Describe a procedure that always terminates and produces the correct result.
    </p>
    <p className="leading-relaxed">
      <strong>To prove a problem is non-computable:</strong> Show that no algorithm can exist by reduction, often using the Halting Problem.
    </p>
    <p className="leading-relaxed">
      <strong>Reduction technique:</strong> If solving problem P would allow solving a known non-computable problem Q, then P is also non-computable.  
      Formally, Q is reducible to P if a solution to P can solve Q, meaning P is at least as hard as Q.
    </p>

  </div>
);

export default Home;
