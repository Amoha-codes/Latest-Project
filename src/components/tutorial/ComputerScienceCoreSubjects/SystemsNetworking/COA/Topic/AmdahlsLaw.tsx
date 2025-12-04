import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Amdahl's Law and Its Proof
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Aug, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      Amdahl’s Law, proposed by Gene Amdahl in 1967, explains the theoretical speedup of a program 
      when part of it is improved or parallelized. It is widely used in parallel computing 
      to predict the benefits of using multiple processors. The key idea is that the speedup 
      of a system is limited by the portion of the program that cannot be parallelized.
    </p>

    {/* ================= Key Terms ================= */}
    <h2 className="text-3xl font-bold mt-8">Key Terms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Speedup (S):</strong> Performance improvement gained by enhancement.  
        <br />S = Old Execution Time / New Execution Time
      </li>
      <li>
        <strong>Fraction Enhanced (P):</strong> The proportion of the program that can be parallelized (0 &lt; P &lt; 1)
      </li>
      <li>
        <strong>Number of Processors (N):</strong> The number of parallel units used for execution
      </li>
    </ul>

    {/* ================= Formula ================= */}
    <h2 className="text-3xl font-bold mt-8">Formula</h2>
    <p className="leading-relaxed">
      Amdahl’s Law formula:  
      <br /><code>S = 1 / ((1 - P) + P / N)</code>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>(1 - P): sequential portion (cannot be parallelized)</li>
      <li>P / N: parallel portion divided among N processors</li>
    </ul>

    {/* ================= Maximum Speedup ================= */}
    <h2 className="text-3xl font-bold mt-8">Maximum Speedup</h2>
    <p className="leading-relaxed">
      If processors are unlimited (N → ∞):  
      <br /><code>S<sub>max</sub> = 1 / (1 - P)</code>
    </p>
    <p className="leading-relaxed">
      This means the non-parallelizable fraction sets the performance limit.  
      If P = 1 (100% parallelizable), theoretical speedup is infinite (not realistic).
    </p>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Suppose a program spends 20% (P = 0.2) of its time in parallelizable work, 
      and we use 5 processors (N = 5):
    </p>
    <p className="bg-gray-400 p-4 rounded-lg font-mono text-sm">
      S = 1 / ((1 - 0.2) + 0.2 / 5) = 1 / (0.8 + 0.04) = 1.19
    </p>
    <p className="leading-relaxed">
      The system improves by only 19%, showing that the 80% sequential part is the bottleneck.
    </p>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Provides a clear upper bound on performance.</li>
      <li>Helps identify bottlenecks in programs.</li>
      <li>Useful in guiding hardware and software design decisions.</li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Assumes the sequential part is fixed; in practice, it can sometimes be optimized.</li>
      <li>Assumes processors are identical; not always true in heterogeneous systems.</li>
      <li>Ignores real-world factors like communication, synchronization, and load balancing overhead.</li>
    </ul>

  </div>
);

export default Home;
