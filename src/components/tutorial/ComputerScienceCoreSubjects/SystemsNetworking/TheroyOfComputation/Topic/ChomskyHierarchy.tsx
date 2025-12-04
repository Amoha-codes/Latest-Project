import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Chomsky Hierarchy ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Chomsky Hierarchy in Theory of Computation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      According to Chomsky hierarchy, grammars are divided into four types:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Type 0: Unrestricted Grammar</li>
      <li>Type 1: Context-Sensitive Grammar</li>
      <li>Type 2: Context-Free Grammar</li>
      <li>Type 3: Regular Grammar</li>
    </ul>

    {/* Type 0 */}
    <h2 className="text-3xl font-bold mt-8">Type 0: Unrestricted Grammar</h2>
    <p className="leading-relaxed">
      Type 0 grammars include all formal grammars. The languages generated are recognized by 
      a Turing Machine and are also known as Recursively Enumerable languages.
    </p>
    <p className="leading-relaxed">
      Grammar production: <strong>α → β</strong>, where α ∈ (V + T)* V (V + T)*, β ∈ (V + T)*, 
      and α must contain at least one variable.
    </p>
    <p className="leading-relaxed">
      Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S A b → b a<br />
      A → S<br />
      Variables: S, A; Terminals: a, b
    </p>

    {/* Type 1 */}
    <h2 className="text-3xl font-bold mt-8">Type 1: Context-Sensitive Grammar</h2>
    <p className="leading-relaxed">
      Type 1 grammars generate context-sensitive languages, recognized by a Linear Bounded Automata (LBA). 
      Productions must satisfy <strong>|α| ≤ |β|</strong>, meaning the length of the left-hand side is 
      less than or equal to the right-hand side.
    </p>
    <p className="leading-relaxed">
      Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → AB<br />
      AB → abc<br />
      B → b
    </p>

    {/* Type 2 */}
    <h2 className="text-3xl font-bold mt-8">Type 2: Context-Free Grammar</h2>
    <p className="leading-relaxed">
      Type 2 grammars generate context-free languages and are recognized by Pushdown Automata. 
      The left-hand side of each production contains exactly one variable.
    </p>
    <p className="leading-relaxed">
      Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → AB<br />
      A → a<br />
      B → b
    </p>

    {/* Type 3 */}
    <h2 className="text-3xl font-bold mt-8">Type 3: Regular Grammar</h2>
    <p className="leading-relaxed">
      Type 3 grammars generate regular languages and are recognized by Finite-State Automata. 
      They are the most restricted form of grammar.
    </p>
    <p className="leading-relaxed">
      Left-Regular: V → VT / T<br />
      Right-Regular: V → TV / T
    </p>
    <p className="leading-relaxed">
      Extended Regular Grammar allows repetition: V → VT* / T*V / T*
    </p>
    <p className="leading-relaxed">
      Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → a (strictly regular)<br />
      S → ab (extended regular)
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      The Chomsky hierarchy classifies grammars and languages based on their computational power: 
      Type 0 (most general) → Type 1 → Type 2 → Type 3 (most restricted). This hierarchy is 
      fundamental in compiler design, language processing, and automata theory.
    </p>

  </div>
);

export default Home;
