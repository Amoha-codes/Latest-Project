import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Hypothesis & Algorithm in TOC ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hypothesis (Language Regularity) and Algorithm (L-graph to NFA) in TOC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      <strong>Prerequisite:</strong> Finite Automata, L-graphs, and their representation.  
      L-graphs can generate <strong>context-sensitive languages</strong>, which are significantly
      harder to program or implement in real systems than regular languages.
    </p>

    <p className="leading-relaxed">
      The following hypothesis attempts to identify what type of L-graphs generate
      <strong>regular languages</strong>. To explain it properly, we first introduce
      the concept of an <strong>iterating nest</strong>.
    </p>

    {/* Iterating Nest */}
    <h2 className="text-3xl font-bold mt-8">Iterating Nest in an L-Graph</h2>

    <p className="leading-relaxed">
      Recall that a <strong>nest</strong> is a neutral path:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      T = T₁ T₂ T₃  
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>T₁ and T₃ are cycles</li>
      <li>T₂ is a neutral path</li>
    </ul>

    <p className="leading-relaxed">
      The nest becomes an <strong>iterating nest</strong> if:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      T₁ prints αᵏ, T₂ prints αˡ, T₃ prints αᵐ where k, l, m ≥ 0,  
      and α is a string of input symbols (preferably k, l, or m ≥ 1)
    </p>

    {/* Hypothesis */}
    <h2 className="text-3xl font-bold mt-8">Regularity Hypothesis</h2>

    <p className="leading-relaxed font-semibold">
      <strong>Hypothesis:</strong>  
      If in a context-free L-graph G, all nests are iterating nests,  
      then the language L(G) defined by G is <strong>regular</strong>.
    </p>

    <p className="leading-relaxed">
      If proven, this could significantly impact language design, potentially enabling
      much simpler creation of new programming languages.
    </p>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Algorithm — Converting a Context-Free L-Graph to NFA</h2>

    <p className="leading-relaxed">
      <strong>Input:</strong> Context-free L-graph G = (Σ, V, P, λ, P₀, F) with iterating nests  
      <br />
      <strong>Output:</strong> NFA G′ = (Σ′, V′, λ′, P′₀, F′)
    </p>

    {/* Step 1 */}
    <h3 className="text-2xl font-semibold mt-4">Step 1: Keep the Same Alphabet</h3>
    <p className="leading-relaxed">
      Since G and the resulting NFA recognize the same language:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      Σ′ = Σ  
      <br />  
      P′ = P
    </p>

    <p className="leading-relaxed">
      This initializes G″ (a cleaned-up version of the L-graph).
    </p>

    {/* Step 2 */}
    <h3 className="text-2xl font-semibold mt-4">Step 2: Build Core(1,1)</h3>
    <p className="leading-relaxed">
      Core(1,1) consists of all canons with ≤1 neutral cycle and ≤1 nest.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Construct V″ using pairs (v, η)</li>
      <li>Build λ″ using arcs whose start/end states are in V″</li>
    </ul>

    <p className="leading-relaxed">
      Each canon contributes new states and transitions according to bracket rules:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>If bracket = ε → η unchanged</li>
      <li>If bracket is opening → η appended</li>
      <li>If bracket is closing → remove last bracket from η</li>
    </ul>

    {/* Step 3 */}
    <h3 className="text-2xl font-semibold mt-4">Step 3: Build Core(1,2)</h3>
    <p className="leading-relaxed">
      If a canon repeats two identical arcs, add a self-loop.  
      Remaining arcs v → u(α) become:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      (v, ε) → (u, ε) on symbol α
    </p>

    {/* Step 4 */}
    <h3 className="text-2xl font-semibold mt-4">Step 4: Set Start and Final States</h3>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
  P₀″ = (P₀, ε) <br />
  {'F″ = { (f, ε) | f ∈ F }'}
</p>


    {/* Step 5 */}
    <h3 className="text-2xl font-semibold mt-4">Step 5: Remove Iterating Complements</h3>
    <p className="leading-relaxed">
      For each iterating nest T = T₁ T₂ T₃:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Create a new state v</li>
      <li>Duplicate T₃ as a path from beg(T₃)</li>
      <li>From v recreate T₁</li>
      <li>Delete cycles T₁ and T₃</li>
    </ul>

    {/* Step 6 */}
    <h3 className="text-2xl font-semibold mt-4">Step 6: Resulting NFA</h3>

    <p className="leading-relaxed">
      The resulting graph G′ = G″ without bracket-loaded arcs is the final NFA.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Regularity Hypothesis</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Provides a structured framework for language classification</li>
      <li>Enables predictable behavior using finite automata</li>
      <li>Bridges theory and practical applications like compilers</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Regularity Hypothesis</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Many languages do not fit cleanly into regular/CF categories</li>
      <li>Real-world languages are often more complex</li>
      <li>Assuming regularity may oversimplify important structures</li>
    </ul>

  </div>
);

export default Home;
