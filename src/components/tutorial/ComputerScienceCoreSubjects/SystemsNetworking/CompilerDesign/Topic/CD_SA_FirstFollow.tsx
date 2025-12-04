import React from "react";

const FirstFollow: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= FIRST and FOLLOW ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      FIRST and FOLLOW in Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      In compiler design, <strong>FIRST</strong> and <strong>FOLLOW</strong> sets help parsers understand how to process a grammar efficiently.
    </p>

    {/* FIRST Set */}
    <h2 className="text-3xl font-bold mt-8">FIRST Set</h2>
    <p className="leading-relaxed">
      The <strong>FIRST</strong> set of a non-terminal contains all terminal symbols that can appear at the beginning of any string derived from that non-terminal. It tells us which terminals are possible when expanding a non-terminal.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Terminal:</strong> If X is a terminal, FIRST(X) = {`{X}`}  
        <em>Example:</em> X = a → FIRST(a) = {"a"}.
      </li>
      <li>
        <strong>Single production:</strong> X → aY → FIRST(X) = {"a"}.
      </li>
      <li>
        <strong>Multiple productions:</strong> Include all first terminals from each production and ε if a production can derive ε.  
        <em>Example:</em>  
        <pre className="bg-gray-400 p-2 rounded-lg text-sm">
A → a B{'\n'}A → b{'\n'}A → ε{'\n'}FIRST(A) = {'{a, b, ε}'}
        </pre>
      </li>
      <li>
        <strong>String of non-terminals:</strong> For X → A B C, start with FIRST(A). If A can derive ε, include FIRST(B), and so on.  
        <em>Example:</em>  
        <pre className="bg-gray-400 p-2 rounded-lg text-sm">
A→a|ε{'\n'}B→b|ε{'\n'}C→c|d{'\n'}FIRST(A B C) = {'{a, b, c, d}'}
        </pre>
      </li>
    </ul>

    {/* FOLLOW Set */}
    <h2 className="text-3xl font-bold mt-8">FOLLOW Set</h2>
    <p className="leading-relaxed">
      The <strong>FOLLOW</strong> set of a non-terminal contains all terminals that can appear immediately after it in any derivation. It is essential for handling productions where a non-terminal appears at the end of a rule.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Start symbol:</strong> Always includes the end-of-input marker $.  
        <em>Example:</em> FOLLOW(S) = {`{$}`} if S is the start symbol.
      </li>
      <li>
        <strong>Before a terminal:</strong> If X → a B c, then c ∈ FOLLOW(B).
      </li>
      <li>
        <strong>Before a non-terminal:</strong> If X → a B Y and FIRST(Y) includes ε, add FOLLOW(X) to FOLLOW(B).  
        <em>Example:</em>  
        <pre className="bg-gray-400 p-2 rounded-lg text-sm">
A → a X B{'\n'}B → b | ε{'\n'}FOLLOW(X) = {"b"} + FOLLOW(A)
        </pre>
      </li>
      <li>
        <strong>At end of production:</strong> If X → B Y, then FOLLOW(X) ⊆ FOLLOW(Y).
      </li>
    </ul>

    {/* Importance */}
    <h2 className="text-3xl font-bold mt-8">Importance of FIRST and FOLLOW Sets</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Building LL(1) Parsing Tables:</strong> Guides parsers to choose the correct production.</li>
      <li><strong>Ensuring Grammar is LL(1):</strong> Avoids overlapping entries in parsing tables.</li>
      <li><strong>Handling ε-Productions:</strong> FIRST includes ε, FOLLOW ensures correct continuation.</li>
      <li><strong>Predictive Parsing:</strong> Enables parsers to decide the next production without backtracking.</li>
      <li><strong>Error Detection and Recovery:</strong> FOLLOW sets indicate expected symbols for error handling.</li>
      <li><strong>Compiler Design & Syntax Analysis:</strong> Fundamental for systematic grammar analysis and detecting left recursion.</li>
    </ul>

  </div>
);

export default FirstFollow;
