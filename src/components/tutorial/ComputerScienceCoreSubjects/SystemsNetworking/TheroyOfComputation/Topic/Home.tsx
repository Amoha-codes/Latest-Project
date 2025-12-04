import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Theory of Computation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Theory of Computation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Automata theory, also known as the Theory of Computation, studies abstract machines and 
      mathematical models to understand the capabilities and limitations of computation.
    </p>

    {/* Basic Terminologies */}
    <h2 className="text-3xl font-bold mt-8">Basic Terminologies</h2>
    <p className="leading-relaxed">
      <strong>1. Symbol:</strong> The smallest building block, such as a letter, number, or character.
    </p>
    <p className="leading-relaxed">
      <strong>2. Alphabet (Σ):</strong> A finite set of symbols used to construct strings. Example: Σ = &#123;a, b&#125;.
    </p>
    <p className="leading-relaxed">
      <strong>3. String:</strong> A finite sequence of symbols from an alphabet. Denoted w, with length |w|. 
      Empty string is ε. Example of strings of length 2 over Σ = &#123;a, b&#125;:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      aa, ab, ba, bb
    </p>
    <p className="leading-relaxed">
      Number of strings of length n = |Σ|ⁿ. Automata theory helps model computational problems and 
      design systems like compilers and interpreters.
    </p>

    {/* Closure Representation */}
    <h2 className="text-3xl font-bold mt-8">Closure Representation</h2>
    <p className="leading-relaxed">
      <strong>L+:</strong> Positive closure, all strings except ε.<br />
      <strong>L*:</strong> Kleene closure, zero or more repetitions of symbols, including ε. <br />
      L* = ε ∪ L+
    </p>
    <p className="leading-relaxed">
      Example: Σ = &#123;g&#125;<br />
      <span className="font-semibold">R = g*</span> → &#123;ε, g, gg, ggg, …&#125;<br />
      <span className="font-semibold">R = g+</span> → &#123;g, gg, ggg, …&#125;
    </p>
    <p className="leading-relaxed">
      Kleene Star allows all combinations and repetitions of symbols from the alphabet. Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Input String: "GFG"<br />
      Σ* = &#123;ε, GFG, GGFG, GFGGGGG, …&#125;
    </p>

    {/* Language */}
    <h2 className="text-3xl font-bold mt-8">Language</h2>
    <p className="leading-relaxed">
      A language is a set of strings formed over an alphabet Σ. Formally, L ⊆ Σ*. <br />
      Examples:
    </p>
    <p className="leading-relaxed">
      <strong>Finite Language:</strong> L₁ = &#123;xy, yx, xx, yy&#125;<br />
      <strong>Infinite Language:</strong> L₂ = all strings starting with 'b' = &#123;b, ba, bab, bbb, …&#125;
    </p>

    {/* Types of Languages */}
    <h2 className="text-3xl font-bold mt-8">Types of Languages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Regular Languages: Defined using regular expressions or finite automata. Example: L = aⁿ, n ≥ 0.</li>
      <li>Context-Free Languages: Defined using context-free grammars or pushdown automata. Example: L = aⁿbⁿ, n ≥ 0.</li>
      <li>Context-Sensitive Languages: Defined using context-sensitive grammars or linear-bounded automata.</li>
      <li>Recursive & Recursively Enumerable Languages: Defined using Turing machines.</li>
    </ul>

    {/* Core Areas */}
    <h2 className="text-3xl font-bold mt-8">Core Areas of Theory of Computation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Automata Theory:</strong> Studies abstract computational models like finite automata, pushdown automata, and Turing machines.
      </li>
      <li>
        <strong>Formal Languages and Grammars:</strong> Examines syntax and structure of languages; includes regular, context-free languages and the Chomsky hierarchy.
      </li>
      <li>
        <strong>Computability and Decidability:</strong> Explores what problems can be solved algorithmically; includes decidable and undecidable problems like the Halting Problem.
      </li>
      <li>
        <strong>Complexity Theory:</strong> Analyzes algorithm efficiency in terms of time and space; classes include P, NP, NP-Complete, and NP-Hard.
      </li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Theory of Computation provides a foundation for understanding computation, designing efficient algorithms, 
      and modeling the limits of what computers can solve. It forms the backbone for compiler design, formal verification, and computational complexity analysis.
    </p>

  </div>
);

export default Home;
