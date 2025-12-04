import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Undecidability and Reducibility ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Undecidability and Reducibility in TOC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Decidable Problems */}
    <h2 className="text-3xl font-bold mt-8">Decidable Problems</h2>
    <p className="leading-relaxed">
      A problem is <strong>decidable</strong> if a Turing machine exists that halts in finite time for every input and gives an answer as 'yes' or 'no'. In other words, there is an algorithm to solve the problem.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Equivalence of two regular languages: A TM can decide if two regular languages are equal.</li>
      <li>Finiteness of regular language: A TM can decide whether a regular language is finite.</li>
      <li>Emptiness of a context-free language (CFL): A TM can determine if a CFL is empty.</li>
    </ul>

    {/* Undecidable Problems */}
    <h2 className="text-3xl font-bold mt-8">Undecidable Problems</h2>
    <p className="leading-relaxed">
      A problem is <strong>undecidable</strong> if no Turing machine exists that halts for every input with a correct answer. No algorithm can solve the problem for all inputs.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ambiguity of context-free languages: No TM can always decide if a CFL is ambiguous.</li>
      <li>Equivalence of two CFLs: No TM can always decide equality of two CFLs.</li>
      <li>Completeness of CFG: Determining if a CFG generates all strings over its alphabet is undecidable.</li>
      <li>Regularity of CFL, CSL, REC: Determining whether these languages are regular is undecidable.</li>
      <li>Popular examples: Halting Problem, Post Correspondence Problem (PCP).</li>
    </ul>

    {/* Semi-Decidable Problems */}
    <h2 className="text-3xl font-bold mt-8">Semi-Decidable Problems</h2>
    <p className="leading-relaxed">
      A <strong>semi-decidable</strong> problem is a subset of undecidable problems for which a TM always halts with 'yes', but may or may not halt with 'no'.
    </p>

    {/* Rice’s Theorem */}
    <h2 className="text-3xl font-bold mt-8">Rice’s Theorem</h2>
    <p className="leading-relaxed">
      Every non-trivial property of recursively enumerable languages is undecidable.  
      Example: Determining whether the complement of a recursively enumerable language is also recursively enumerable is undecidable.
    </p>

    {/* Reducibility */}
    <h2 className="text-3xl font-bold mt-8">Reducibility and Undecidability</h2>
    <p className="leading-relaxed">
      Language A is reducible to language B (A → B) if there exists a function f converting strings from A to B:
    </p>
    <p className="italic ml-6">w ∈ A ⇔ f(w) ∈ B</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Theorem 1: If A → B and B is decidable, then A is also decidable.</li>
      <li>Theorem 2: If A → B and A is undecidable, then B is also undecidable.</li>
    </ul>

    {/* Examples / Questions */}
    <h2 className="text-3xl font-bold mt-8">Examples / Questions</h2>
    <p className="leading-relaxed">
      <strong>Question 1:</strong> Which of the following is undecidable?
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>G is a CFG. Is L(G) = ∅?</li>
      <li>G is a CFG. Is L(G) = Σ*?</li>
      <li>M is a TM. Is L(M) regular?</li>
      <li>A is a DFA, N is an NFA. Is L(A) = L(N)?</li>
    </ul>
    <p className="leading-relaxed">
      <strong>Answer:</strong> Option D (2 and 3 only) are undecidable.  
      Explanation: CFG emptiness (1) and DFA vs NFA equivalence (4) are decidable. CFG completeness (2) and TM language regularity (3) are undecidable.
    </p>

    <p className="leading-relaxed">
      <strong>Question 2:</strong> Which of the following problems are decidable?
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Does a given program ever produce an output?</li>
      <li>If L is a CFL, then is L’ also CFL?</li>
      <li>If L is regular, then is L’ also regular?</li>
      <li>If L is recursive, then is L’ also recursive?</li>
    </ul>
    <p className="leading-relaxed">
      <strong>Answer:</strong> Option D (3 and 4) are decidable.  
      Explanation: Regular and recursive languages are closed under complementation. CFLs are not, and program output cannot always be determined, making 1 and 2 undecidable.
    </p>

    <p className="leading-relaxed">
      <strong>Question 3:</strong> Consider three decision problems P1 (decidable), P2 (undecidable), and P3. Which is TRUE?  
      <strong>Answer:</strong> Option A: P3 is undecidable if P2 → P3.  
      Explanation: By Theorem 2, reducibility from an undecidable problem implies the target problem is also undecidable.
    </p>

  </div>
);

export default Home;
