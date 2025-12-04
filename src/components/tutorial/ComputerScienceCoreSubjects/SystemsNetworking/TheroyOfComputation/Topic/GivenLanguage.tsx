import React from "react";

const Home: React.FC = () => (

<div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

  <h1 className="text-4xl font-extrabold border-b-2 pb-2">
    Construct Pushdown Automata for Given Languages
  </h1>

  <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

  <p className="leading-relaxed text-lg">
    Prerequisite: Pushdown Automata, Acceptance by Final State. A Pushdown Automata (PDA) extends a deterministic finite automaton (DFA) with a stack, which allows it to count and track symbols. PDAs can push symbols onto the stack, pop symbols from the stack, or ignore input while processing.
  </p>

  <h2 className="text-3xl font-bold mt-6">Definition of a PDA</h2>
  <p className="leading-relaxed">
    A PDA M is defined as:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    M = (Q, Σ, Γ, δ, q0, Ζ, F) <br />
    Q = finite set of states <br />
    Σ = input alphabet <br />
    Γ = stack alphabet <br />
    δ = Q × (Σ ∪ {"ε"}) × Γ → Q × Γ* (transition relation) <br />
    q0 ∈ Q = start state <br />
    Ζ ∈ Γ = initial stack symbol <br />
    F ⊆ Q = set of accepting (final) states
  </p>

  <h2 className="text-3xl font-bold mt-6">State Transitions</h2>
  <p className="leading-relaxed">
    A PDA can perform the following operations:
  </p>
  <ul className="list-disc ml-6 leading-relaxed">
    <li><strong>Push:</strong> Push a symbol onto the stack.</li>
    <li><strong>Pop:</strong> Pop a symbol from the stack.</li>
    <li><strong>Ignore:</strong> Do not change the stack for a given input.</li>
  </ul>

  <h2 className="text-3xl font-bold mt-6">Example 1: L = {"0ⁿ1ᵐ2ᵐ3ⁿ | n≥1, m≥1"}</h2>
  <p className="leading-relaxed">
    <strong>Approach:</strong> Push 0's first, then push 1's. Pop 1's for each 2, then pop 0's for each 3. Accept if the stack is empty at the end.
  </p>
  <ol className="list-decimal ml-6 leading-relaxed">
    <li>On receiving 0 → push onto stack. On receiving 1 → push onto stack and go to next state.</li>
    <li>On receiving 1 → push onto stack. On receiving 2 → pop 1 from stack and go to next state.</li>
    <li>On receiving 2 → pop 1 from stack. When 1's are finished, receiving 3 → pop 0 from stack.</li>
    <li>On receiving 3 → pop 0 from stack. If input is finished and stack is empty → accept.</li>
  </ol>

  <p className="leading-relaxed font-semibold">Examples:</p>
  <ul className="list-disc ml-6">
    <li>Input: 0 0 1 1 1 2 2 2 3 3 → <strong>ACCEPTED</strong></li>
    <li>Input: 0 0 0 1 1 2 2 2 3 3 → <strong>NOT ACCEPTED</strong></li>
  </ul>

  <h2 className="text-3xl font-bold mt-6">Example 2: L = {"0ⁿ1ᵐ | n≥1, m≥1, m > n+2"}</h2>
  <p className="leading-relaxed">
    <strong>Approach:</strong> Push 0's onto stack. Ignore first two 1's. Then pop 0's for remaining 1's. Any extra 1's are ignored. Accept if input finishes correctly.
  </p>
  <ol className="list-decimal ml-6 leading-relaxed">
    <li>On receiving 0 → push onto stack. On receiving 1 → ignore and go to next state.</li>
    <li>Ignore 1.</li>
    <li>On receiving 1 → pop 0 from stack and go to next state.</li>
    <li>Continue popping 0 for each 1. If stack empty, ignore remaining 1's.</li>
    <li>If input finishes → accept.</li>
  </ol>

  <p className="leading-relaxed font-semibold">Examples:</p>
  <ul className="list-disc ml-6">
    <li>Input: 0 0 0 1 1 1 1 1 1 → <strong>ACCEPTED</strong></li>
    <li>Input: 0 0 0 0 1 1 1 1 → <strong>NOT ACCEPTED</strong></li>
  </ul>

</div>
       );

export default Home;
