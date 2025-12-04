import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= L-Graphs in TOC ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      L-Graphs and What They Represent in TOC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In Theory of Computation (TOC), Finite Automata (DFA/NFA) are mathematical
      models used to recognize <strong>Regular Languages</strong>. However, many
      programming languages require more computational power than what finite automata 
      can provide. Languages like C, Pascal, Haskell, and C++ follow complex grammatical 
      structures which cannot be recognized by FA or PDA. To handle more expressive language 
      classes, <strong>L-graphs</strong> are introduced.
    </p>

    <p className="leading-relaxed">
      L-graphs extend finite automata with additional structures (called bracket groups) 
      to represent certain <strong>context-sensitive languages</strong>, offering a graphical 
      alternative to the more complex Turing Machine.
    </p>

    {/* Example Language */}
    <h2 className="text-3xl font-bold mt-8">Example Language</h2>
    <p className="leading-relaxed">
      Consider the language L = {'{ aⁿ bⁿ cⁿ | n ≥ 1 }'}. This language:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cannot be represented by DFA</li>
      <li>Cannot be represented by NFA</li>
      <li>Cannot be represented by PDA</li>
      <li><strong>Can be represented using an L-graph</strong></li>
    </ul>

    {/* Structure of L-Graphs */}
    <h2 className="text-3xl font-bold mt-8">Structure of L-Graphs</h2>

    <p className="leading-relaxed">An L-graph has two main components:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Bracket Groups:</strong> Up to two independent bracket groups 
        that are updated during transitions.
      </li>
      <li>
        <strong>Dyck Language Constraints:</strong> Both bracket groups must form a 
        valid Dyck string for the input to be accepted.
      </li>
    </ul>

    <p className="leading-relaxed">
      Thus, an L-graph is essentially a finite automaton enhanced with bracket 
      tracking mechanisms.
    </p>

    {/* How L-Graphs Accept Strings */}
    <h2 className="text-3xl font-bold mt-8">How L-Graphs Accept Strings</h2>

    <p className="leading-relaxed">Example Input: <strong>abc</strong></p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      {'{ε, ε, ε} → {a, (, ε} → {ab, (), <} → {abc, (), <>'}
    </p>

    <p className="leading-relaxed">Example Input: <strong>a²b²c²</strong></p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      {'{ε,ε,ε} → {a,(,ε} → {aa,((,ε} → {aab,((),<} → {aabb,(()),<<} → {aabbc,(()),<<>} → {aabbcc,(()),<<>>}'}
    </p>

    <p className="leading-relaxed">Example Input: <strong>a⁵b⁵c⁵</strong></p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      {'{ε,ε,ε} → {a,(,ε} → … → {aaaaa,(((((,ε} → {aaaaab,(((((),<} → … → {aaaaabbbbb,((((())))),<<<<<} → {aaaaabbbbbc,((((())))),<<<<<>} → … → {aaaaabbbbbccccc,((((())))),<<<<<>>>>>}'}
    </p>

    {/* Definitions */}
    <h2 className="text-3xl font-bold mt-8">Definitions Related to L-Graphs</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Neutral Path</h3>
    <p className="leading-relaxed">
      A path is <strong>neutral</strong> if both bracket strings are right-balanced.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Nest</h3>
    <p className="leading-relaxed">
      A neutral path T is a <strong>nest</strong> if it can be decomposed as 
      T = T₁ T₂ T₃, where T₁ and T₃ are cycles.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. (ω, d)-Core</h3>
    <p className="leading-relaxed">
      A set of (ω, d)-canons, where each canon has at most ω neutral cycles and d nests.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4. Context-Free L-Graph</h3>
    <p className="leading-relaxed">
      An L-graph is <strong>context-free</strong> if it contains only one bracket group. 
      Its transitions follow the patterns:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      {'[ symbol | bracket , ? ]'}<br />
      {'[ symbol | ?, bracket ]'}
    </p>

    {/* Dyck Language */}
    <h2 className="text-3xl font-bold mt-8">Dyck Language Definition</h2>
    <p className="leading-relaxed">
      A Dyck language consists of balanced bracket strings. It is defined by:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      S → ε | a S b S , where a ∈ Σ( and b = ϕ(a)
    </p>

    {/* Real Life Example */}
    <h2 className="text-3xl font-bold mt-8">Real-Life Example: Organizational Structure</h2>

    <p className="leading-relaxed">
      L-graphs can be used to model hierarchical structures such as XML documents,
      folder systems, and organizational charts.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>The main graph represents departments (Sales, Marketing, Finance, etc.)</li>
      <li>The L-graph represents managerial relationships</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      This helps in understanding chains of command and decision-making structures.
    </p>

  </div>
);

export default Home;
