import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* =================== Introduction of Finite Automata =================== */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Finite Automata
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      Finite automata are abstract machines used to recognize patterns in input sequences,
      forming the foundational model for understanding regular languages in computer science.
      They consist of states, transitions, and input symbols, and process inputs step-by-step.
      If the automaton ends in an accepting state after processing the entire input, the input
      is accepted; otherwise, rejected. Both deterministic and non-deterministic forms (DFA
      and NFA) recognize the same regular languages.
    </p>

    <h2 className="text-3xl font-bold mt-6">Features of Finite Automata</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Input:</strong> Set of symbols processed by the machine.</li>
      <li><strong>Output:</strong> Accept or reject based on the input pattern.</li>
      <li><strong>States of Automata:</strong> Represents different configurations.</li>
      <li><strong>State Relation:</strong> Describes transitions between states.</li>
      <li><strong>Output Relation:</strong> Decision made based on the final state.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      A finite automaton is formally defined as the tuple:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      {"{ Q, Σ, q, F, δ }"} <br />
      Q: Finite set of states <br />
      Σ: Set of input symbols <br />
      q: Initial state <br />
      F: Set of final/accepting states <br />
      δ: Transition function
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Finite Automata</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Deterministic Finite Automata (DFA)</li>
      <li>Non-Deterministic Finite Automata (NFA)</li>
    </ul>

    {/* =================== DFA =================== */}
    <h2 className="text-3xl font-bold mt-10">1. Deterministic Finite Automata (DFA)</h2>
    <p className="leading-relaxed">
      A DFA is represented as {"{Q, Σ, q, F, δ}"}. For each state and input symbol, the machine
      transitions to exactly one next state. No null (ϵ) transitions are allowed.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      DFA consists of 5 tuples: {"{Q, Σ, q, F, δ}"} <br />
      Q : Set of states <br />
      Σ : Input symbols <br />
      q : Initial state <br />
      F : Final states <br />
      δ : Transition function δ : Q × Σ → Q
    </p>

    <h3 className="text-2xl font-semibold mt-6">Example: DFA accepting strings ending with 'a'</h3>

    <p className="leading-relaxed">Given:</p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      Σ = {"{a, b}"} <br />
      Q = {"{q0, q1}"} <br />
      F = {"{q1}"} <br />
    </p>

    <p className="mt-4 font-semibold">State Transition Table</p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      State / Symbol &nbsp;&nbsp; a &nbsp;&nbsp; b <br />
      q0 → q1 &nbsp;&nbsp; q0 <br />
      q1 → q1 &nbsp;&nbsp; q0
    </p>

    <p className="leading-relaxed">
      The DFA reaches state q1 (accepting state) only when the string ends with 'a'.
    </p>

    {/* =================== NFA =================== */}
    <h2 className="text-3xl font-bold mt-10">2. Non-Deterministic Finite Automata (NFA)</h2>
    <p className="leading-relaxed">
      An NFA may move to <strong>multiple states</strong> for the same input symbol and may also include
      <strong> epsilon (ϵ) transitions</strong>, where the machine can change states without consuming input.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Example: NFA accepting strings ending in 'a'</h3>
    <p className="leading-relaxed">Given:</p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      Σ = {"{a, b}"} <br />
      Q = {"{q0, q1}"} <br />
      F = {"{q1}"} <br />
    </p>

    <p className="mt-4 font-semibold">State Transition Table</p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      State / Symbol &nbsp;&nbsp; a &nbsp;&nbsp; b <br />
      q0 → {"{q0, q1}"} &nbsp;&nbsp; q0 <br />
      q1 → φ &nbsp;&nbsp; φ
    </p>

    <p className="leading-relaxed">
      In an NFA, if <strong>any</strong> possible path leads to an accepting state, the string is accepted.
    </p>

    {/* =================== Comparison =================== */}
    <h2 className="text-3xl font-bold mt-10">Comparison of DFA and NFA</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>DFA: Single transition for each symbol, no null moves.</li>
      <li>NFA: Multiple transitions + epsilon moves allowed.</li>
      <li>Both recognize exactly the same set of regular languages.</li>
      <li>Every NFA can be converted into an equivalent DFA.</li>
    </ul>

  </div>
);

export default Home;
