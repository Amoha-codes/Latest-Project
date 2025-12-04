import React from "react";

const Home: React.FC = () => (

    <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

  <h1 className="text-4xl font-extrabold border-b-2 pb-2">
    Detailed Study of PushDown Automata
  </h1>

  <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

  <p className="leading-relaxed text-lg">
    According to the Chomsky Hierarchy, the type of grammar needed to generate a language often corresponds to a specific computational model to accept it. 
    For example, Type 0 Grammar generates a Recursive Enumerable Language (REL), which requires a Turing Machine for recognition. 
    Similarly, Type 2 Grammar generates Context-Free Languages (CFLs), which are accepted by a Pushdown Automata (PDA).
  </p>

  <p className="leading-relaxed">
    A PDA extends the concept of a Finite Automata (FA) by adding a stack. The PDA consists of the following components:
  </p>

  <ul className="list-disc ml-6 leading-relaxed">
    <li><strong>Q</strong>: Finite set of states.</li>
    <li><strong>Σ</strong>: Input alphabet.</li>
    <li><strong>Γ</strong>: Stack alphabet.</li>
    <li><strong>q₀</strong>: Initial state.</li>
    <li><strong>Z₀</strong>: Initial stack symbol, placed on stack before processing any input.</li>
    <li><strong>F</strong>: Set of accepting states.</li>
    <li><strong>δ</strong>: Transition function defining moves based on current state, input symbol, and top stack symbol.</li>
  </ul>

  <p className="leading-relaxed">
    The stack allows the PDA to recognize languages that a FA cannot. To avoid underflow, the stack is assumed to be infinite and initially contains the symbol Z₀. This symbol also helps indicate when string processing is successfully completed.
  </p>

  <p className="leading-relaxed font-semibold">Note:</p>
  <p className="leading-relaxed">Non-deterministic PDA (NPDA) is more powerful than Deterministic PDA (DPDA).</p>

  <h2 className="text-3xl font-bold mt-6">Stack Operations in PDA</h2>

  <h3 className="text-2xl font-semibold mt-4">1. PUSH</h3>
  <p className="leading-relaxed">
    Push operation adds a symbol to the top of the stack. The transition is defined as:
  </p>
  <p className="ml-6">Input symbol, top stack element → push new symbol onto stack</p>
  <p className="ml-6">Example: Input = a, Top = Z₀ → Stack becomes aZ₀</p>

  <h3 className="text-2xl font-semibold mt-4">2. POP</h3>
  <p className="leading-relaxed">
    Pop operation removes the top element from the stack. The transition is defined as:
  </p>
  <p className="ml-6">Input symbol, top stack element → remove top element (ε indicates removal)</p>
  <p className="ml-6">Example: Input = a, Top = c → Stack pops c and becomes empty (if Z₀ is not counted)</p>

  <h3 className="text-2xl font-semibold mt-4">3. SKIP</h3>
  <p className="leading-relaxed">
    Skip operation leaves the stack unchanged. The transition is defined as:
  </p>
  <p className="ml-6">Input symbol, top stack element → stack remains the same</p>
  <p className="ml-6">Example: Input = a, Top = Z₀ → Stack remains Z₀</p>

  <p className="leading-relaxed mt-4">
    These operations form the basis of PDA computation. By combining these transitions, PDAs can accept complex languages, particularly context-free languages, which cannot be handled by simple finite automata.
  </p>

</div>    
);

export default Home;
