import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Top-Down Parser Classification ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Classification of Top-Down Parsers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      <strong>Top-down parsing</strong> analyzes a sentence or program by starting with the <strong>start symbol</strong> 
      (root of the parse tree) and working down to the leaves (input symbols). The parser expands non-terminals 
      using grammar rules to match the input string. This process constructs the parse tree from top to bottom.
    </p>

    <p className="leading-relaxed">
      In top-down parsing:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The parser follows the <strong>leftmost derivation</strong>, expanding the leftmost non-terminal first.</li>
      <li>It uses recursion to handle different parts of the string, hence sometimes called <strong>recursive parsing</strong>.</li>
      <li>Works only with grammars free from ambiguity and left recursion.</li>
      <li>Does not allow grammars with common prefixes.</li>
      <li>Based on Left Most Derivation, unlike Bottom-Up parsing which relies on Reverse Right Most Derivation.</li>
    </ul>

    {/* ================= Recursive Descent Parsing ================= */}
    <h2 className="text-3xl font-bold mt-8">Recursive Descent Parsing</h2>
    <p className="leading-relaxed">
      Recursive Descent Parsing is a top-down parsing technique where each non-terminal in the grammar is 
      processed using a recursive function. It tries to match the input string by testing each alternative of a non-terminal.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Start with a non-terminal.</li>
      <li>Check the first alternative and try to match it with the input string.</li>
      <li>If it fails, try the next alternative, continuing until a match is found.</li>
      <li>Parsing succeeds if at least one alternative matches the input string.</li>
    </ul>

    <p className="leading-relaxed">
      In simple terms, it systematically tries combinations until the correct one is found for the input.
    </p>

    {/* ================= LL(1) Parsing ================= */}
    <h2 className="text-3xl font-bold mt-8">LL(1) Parsing (Predictive Parser)</h2>
    <p className="leading-relaxed">
      LL(1) parsing analyzes a sentence to verify if it follows the correct programming structure.
      The name LL(1) means:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>First L:</strong> Read input from Left to Right.</li>
      <li><strong>Second L:</strong> Construct the Leftmost Derivation.</li>
      <li><strong>1:</strong> Look one step ahead in the input to decide the next action.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Rules for LL(1) Parsing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>No left recursion (rules must not refer to themselves at the start).</li>
      <li>No common prefixes (rules with the same starting symbols must be refactored).</li>
      <li>No ambiguity (there must be only one way to derive a string).</li>
    </ul>

    <p className="leading-relaxed">
      LL(1) parsers are predictable and fast, commonly used in compilers and interpreters.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Important Notes</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>If a grammar contains left factoring, it cannot be LL(1). Example: <code>S → aS | a</code> both go under <code>a</code>.</li>
      <li>If a grammar contains left recursion, it cannot be LL(1). Example: <code>S → Sa | b</code> leads to multiple entries in <code>FIRST(S)</code>.</li>
      <li>If a grammar is ambiguous, it cannot be LL(1).</li>
      <li>Not every regular grammar is LL({"1>"}, because it may contain left recursion, left factoring, or ambiguity.</li>
    </ul>

  </div>
);

export default Home;
