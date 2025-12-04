import React from 'react';

const Home: React.FC = () => (

    <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

  <h1 className="text-4xl font-extrabold border-b-2 pb-2">
    Converting Context Free Grammar to Chomsky Normal Form
  </h1>

  <p className="text-sm text-gray-500">Last Updated : 16 Apr, 2025</p>

  <p className="text-lg leading-relaxed">
    Chomsky Normal Form (CNF) simplifies context-free grammars (CFGs) so that all production rules
    follow specific patterns. In CNF, each rule either produces:
  </p>

  <ul className="list-disc ml-6 leading-relaxed">
    <li>Two non-terminal symbols (e.g., X → YZ)</li>
    <li>A single terminal symbol (e.g., X → x)</li>
    <li>The empty string ε, only for the start symbol (e.g., S → ε)</li>
  </ul>

  <h2 className="text-3xl font-bold mt-8">Example Grammars</h2>
  <p className="leading-relaxed">
    G₁ = &#123; S → a, S → AZ, A → a, Z → z &#125;  (in CNF)<br />
    G₂ = &#123; S → a, S → aZ, Z → a &#125;  (not in CNF, as S → aZ contains terminal followed by non-terminal)
  </p>

  <h2 className="text-3xl font-bold mt-8">Key Properties of CNF</h2>
  <ul className="list-disc ml-6 leading-relaxed">
    <li>A CFG can be converted into multiple equivalent CNFs.</li>
    <li>CNF generates the same language as the original CFG.</li>
    <li>Widely used in parsing algorithms like CYK and bottom-up parsers.</li>
    <li>For a string of length n, a CNF derivation requires at most 2n-1 steps.</li>
    <li>Any CFG that does not generate ε has an equivalent CNF.</li>
  </ul>

  <h2 className="text-3xl font-bold mt-8">Steps to Convert CFG to CNF</h2>

  <h3 className="text-2xl font-semibold mt-6">Step 1: Eliminate Start Symbol from RHS</h3>
  <p className="leading-relaxed">
    If the start symbol S appears on the RHS, create a new start symbol S₀ with a rule: S₀ → S
  </p>

  <h3 className="text-2xl font-semibold mt-6">Step 2: Remove Null, Unit, and Useless Productions</h3>
  <ul className="list-disc ml-6 leading-relaxed">
    <li><strong>Null (ε) Productions:</strong> Remove ε by modifying other rules accordingly.</li>
    <li><strong>Unit Productions:</strong> Replace rules like A → B with B's productions.</li>
    <li><strong>Useless Productions:</strong> Remove non-reachable or non-generating symbols.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Step 3: Replace Terminals in Mixed Productions</h3>
  <p className="leading-relaxed">
    If a terminal appears with non-terminals on RHS (e.g., X → xY), introduce a new symbol Z → x
    and rewrite as X → ZY.
  </p>

  <h3 className="text-2xl font-semibold mt-6">Step 4: Reduce Productions with More Than Two Non-Terminals</h3>
  <p className="leading-relaxed">
    For rules like X → YZW, introduce new symbols to break it into binary rules:
    X → PY, P → YZ, etc.
  </p>

  <h2 className="text-3xl font-bold mt-8">Example: Converting CFG to CNF</h2>
  <p className="leading-relaxed">
    Consider the CFG:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    S → ASB<br />
    A → aAS | a | ε<br />
    B → SbS | A | bb
  </p>

  <p className="leading-relaxed font-semibold">Step 1: Eliminate Start Symbol from RHS</p>
  <p className="leading-relaxed">
    S₀ → S<br />
    S → ASB<br />
    A → aAS | a | ε<br />
    B → SbS | A | bb
  </p>

  <p className="leading-relaxed font-semibold">Step 2: Remove Null and Unit Productions</p>
  <p className="leading-relaxed">
    After removing ε-productions and unit productions:
  </p>
  <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
    S₀ → AS | ASB | SB<br />
    S → AS | ASB | SB<br />
    A → RS | XS | a<br />
    B → TS | YY | RS | XS | a<br />
    X → a<br />
    Y → b<br />
    P → AS<br />
    R → XA<br />
    T → SY
  </p>

  <p className="leading-relaxed font-semibold">Step 3: Replace Terminals in Mixed Productions</p>
  <p className="leading-relaxed">
    Replace terminals a, b in rules with new variables X → a, Y → b
  </p>

  <p className="leading-relaxed font-semibold">Step 4: Reduce RHS with More Than Two Non-Terminals</p>
  <p className="leading-relaxed">
    All rules are broken into binary rules using new variables P, R, T as shown above.
  </p>

  <p className="leading-relaxed">
    This is the required CNF for the given CFG.
  </p>

</div>

 );

export default Home;
