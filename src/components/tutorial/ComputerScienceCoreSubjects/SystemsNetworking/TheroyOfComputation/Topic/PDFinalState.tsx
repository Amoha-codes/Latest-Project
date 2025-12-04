import React from "react";

const Home: React.FC = () => (
    <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

  <h1 className="text-4xl font-extrabold border-b-2 pb-2">
    Pushdown Automata: Acceptance by Final State
  </h1>

  <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

  <p className="text-lg leading-relaxed">
    In the previous article, we discussed acceptance by empty stack. Here, we focus on how a PDA can accept a string by reaching a <strong>final state</strong>. 
  </p>

  <h2 className="text-3xl font-bold mt-8">Definition</h2>
  <p className="leading-relaxed">
    A PDA P is defined as:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    P = (Q, Σ, Γ, δ, q₀, Z, F)
  </p>
  <p className="leading-relaxed">
    The language accepted by P is:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    L(P) = &#123; w | (q₀, w, Z) ⇒ (qf, ε, s), qf ∈ F &#125;
  </p>
  <p className="leading-relaxed">
    Here, the PDA moves from the initial state q₀ to a final state qf while consuming input w. The stack may contain any string s, which is irrelevant for acceptance.
  </p>

  <h2 className="text-3xl font-bold mt-8">Example: {`{aⁿbⁿ | n > 0}`}</h2>
  <p className="leading-relaxed">
    Define PDA M with:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    Q = &#123;q0, q1, q2, q3&#125;<br />
    Σ = &#123;a, b&#125;<br />
    Γ = &#123;A, Z&#125;<br />
    F = &#123;q3&#125;<br />
    δ defined as:<br />
    δ(q0, a, Z) = &#123;(q1, AZ)&#125;<br />
    δ(q1, a, A) = &#123;(q1, AA)&#125;<br />
    δ(q1, b, A) = &#123;(q2, ε)&#125;<br />
    δ(q2, b, A) = &#123;(q2, ε)&#125;<br />
    δ(q2, ε, Z) = &#123;(q3, Z)&#125;
  </p>

  <h2 className="text-3xl font-bold mt-8">Explanation</h2>
  <p className="leading-relaxed">
    For input "aaabbb":<br />
    <strong>Step 1:</strong> Read 'a', push A onto the stack and move to q1.<br />
    <strong>Step 2:</strong> Repeat for all a’s; stack becomes AAAZ.<br />
    <strong>Step 3:</strong> Read 'b', pop A and move to q2.<br />
    <strong>Step 4:</strong> After all b’s, input is empty; stack has Z, move to final state q3.<br />
    The string is accepted by <strong>final state</strong> acceptance.
  </p>

  <p className="leading-relaxed">
    For input "aab": PDA ends in non-final state q2, so the string is <strong>rejected</strong>.
  </p>

  <h2 className="text-3xl font-bold mt-8">Example Question</h2>
  <p className="leading-relaxed">
    Consider a PDA with Σ = &#123;a, b&#125; and Γ = &#123;X, Z&#125;, initial stack symbol Z, and final states F = &#123;q0, q2&#125;.
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    Q = &#123;q0, q1, q2&#125;<br />
    δ(q0, a, Z) = &#123;(q0, XZ)&#125;<br />
    δ(q0, a, X) = &#123;(q0, XX)&#125;<br />
    δ(q0, b, X) = &#123;(q1, ε)&#125;<br />
    δ(q1, b, X) = &#123;(q1, ε)&#125;<br />
    δ(q1, ε, Z) = &#123;(q2, Z)&#125;
  </p>
  <p className="leading-relaxed">
    Explanation: 
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initial state q0 is also final, so empty string ε is accepted.</li>
      <li>Each 'a' pushes X onto the stack; PDA remains in final state.</li>
      <li>Each 'b' pops X; PDA moves to q2 once stack processing completes.</li>
      <li>The number of b’s must equal the number of a’s for acceptance.</li>
      <li>The PDA is deterministic because there is only one move per state, input, and stack symbol.</li>
    </ul>
  </p>

  <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
  <p className="leading-relaxed">
    Acceptance by final state is an alternative to empty stack acceptance. In this method, a PDA accepts a string if it reaches a designated final state after processing the input, irrespective of the remaining stack contents. Both deterministic and non-deterministic PDAs can use this method for context-free language recognition.
  </p>

</div>
    );

export default Home;
