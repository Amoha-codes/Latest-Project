import React from 'react';

const Home: React.FC = () => (

    <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

  <h1 className="text-4xl font-extrabold border-b-2 pb-2">
    Introduction to Pushdown Automata
  </h1>

  <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

  <p className="text-lg leading-relaxed">
    Finite automata can accept only regular languages. A <strong>Pushdown Automaton (PDA)</strong> 
    extends finite automata with a <strong>stack</strong>, enabling it to recognize context-free languages (CFLs).
  </p>

  <h2 className="text-3xl font-bold mt-8">Definition of PDA</h2>
  <p className="leading-relaxed">
    A PDA is defined by the tuple:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    M = (Q, Σ, Γ, δ, q₀, Z, F)
  </p>
  <ul className="list-disc ml-6 leading-relaxed">
    <li><strong>Q:</strong> set of states</li>
    <li><strong>Σ:</strong> set of input symbols</li>
    <li><strong>Γ:</strong> stack alphabet (symbols pushed/popped)</li>
    <li><strong>q₀:</strong> initial state</li>
    <li><strong>Z:</strong> initial stack symbol</li>
    <li><strong>F:</strong> set of final states</li>
    <li><strong>δ:</strong> transition function, δ: Q × (Σ ∪ ε) × Γ → Q × Γ*</li>
  </ul>

  <h2 className="text-3xl font-bold mt-8">Instantaneous Description (ID)</h2>
  <p className="leading-relaxed">
    An <strong>ID</strong> represents the current configuration of a PDA:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    (q, w, α) <br />
    q → current state <br />
    w → remaining input <br />
    α → stack contents (top on left)
  </p>

  <h2 className="text-3xl font-bold mt-8">Turnstile Notation</h2>
  <ul className="list-disc ml-6 leading-relaxed">
    <li>⊢ denotes a single move</li>
    <li>⊢* denotes a sequence of moves</li>
    <li>Example: (p, b, T) ⊢ (q, w, α) means PDA moves from state p to q, consumes 'b', replaces top stack symbol T with α</li>
  </ul>

  <h2 className="text-3xl font-bold mt-8">Example: PDA for {`{aⁿbⁿ | n > 0}`}</h2>
  <p className="leading-relaxed">
    Define PDA M with:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    Q = &#123;q0, q1&#125;, Σ = &#123;a, b&#125;, Γ = &#123;A, Z&#125;, δ defined as:<br />
    δ(q0, a, Z) = &#123;(q0, AZ)&#125;<br />
    δ(q0, a, A) = &#123;(q0, AA)&#125;<br />
    δ(q0, b, A) = &#123;(q1, ε)&#125;<br />
    δ(q1, b, A) = &#123;(q1, ε)&#125;<br />
    δ(q1, ε, Z) = &#123;(q1, ε)&#125;
  </p>

  <h2 className="text-3xl font-bold mt-8">Explanation</h2>
  <p className="leading-relaxed">
    For input "aaabbb":<br />
    <strong>Step 1:</strong> Read 'a', push A onto stack (repeat for all a’s).<br />
    <strong>Step 2:</strong> Read 'b', pop A from stack, transition to q1.<br />
    <strong>Step 3:</strong> After all b’s, pop Z to empty stack.<br />
    This demonstrates <strong>acceptance by empty stack</strong>.
  </p>

  <h2 className="text-3xl font-bold mt-8">State Diagram</h2>
  <p className="leading-relaxed">
    The PDA is deterministic because there is only one move per state, input symbol, and stack symbol. 
    Non-deterministic PDAs (NPDA) may have multiple moves from the same configuration and cannot always 
    be converted to deterministic PDA (DPDA).
  </p>

  <h2 className="text-3xl font-bold mt-8">Key Notes</h2>
  <ul className="list-disc ml-6 leading-relaxed">
    <li>Acceptance can be by <strong>empty stack</strong> or <strong>final state</strong>.</li>
    <li>NPDA is strictly more expressive than DPDA; some CFLs require non-determinism.</li>
  </ul>

  <h2 className="text-3xl font-bold mt-8">Question</h2>
  <p className="leading-relaxed font-semibold">
    Which pair has DIFFERENT expressive power?
  </p>
  <ul className="list-disc ml-6 leading-relaxed">
    <li>A. DFA & NFA</li>
    <li>B. DPDA & NPDA</li>
    <li>C. Deterministic & Non-deterministic single-tape Turing machine</li>
    <li>D. Single-tape & Multi-tape Turing machine</li>
  </ul>
  <p className="leading-relaxed font-semibold">
    Solution: Option (B) is correct because NPDA cannot always be converted to DPDA.
  </p>

  <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
  <p className="leading-relaxed">
    Pushdown Automata extend finite automata with a stack, enabling recognition of context-free languages. 
    They are crucial for parsing, compilers, and understanding complex language structures in computation.
  </p>

</div>

    );

export default Home;
