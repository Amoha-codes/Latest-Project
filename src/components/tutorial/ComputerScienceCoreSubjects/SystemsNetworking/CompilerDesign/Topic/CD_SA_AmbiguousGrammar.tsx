import React from "react";

const AmbiguousGrammar: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Ambiguous Grammar ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ambiguous Grammar
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      A <strong>Context-Free Grammar (CFG)</strong> describes the structure of a language using rules that combine symbols into valid strings. CFGs can be classified as:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Ambiguous grammars:</strong> Can generate more than one derivation tree for the same string.</li>
      <li><strong>Unambiguous grammars:</strong> Allow only one derivation tree for each string.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Ambiguous Grammar Definition</h2>
    <p className="leading-relaxed">
      A CFG G = (V, T, P, S) is <strong>ambiguous</strong> if there exists at least one string in the terminal set T that can be derived in more than one way, producing multiple parse trees.  
      Here:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>V = set of non-terminal symbols</li>
      <li>T = set of terminal symbols</li>
      <li>P = set of production rules</li>
      <li>S = start symbol</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example 1</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
E → E + E | E * E | id
    </pre>
    <p className="leading-relaxed">
      The string <strong>id + id * id</strong> can be parsed in two different ways using the same grammar, making it ambiguous.
    </p>

    <h2 className="text-3xl font-bold mt-8">Example 2</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
Alphabets: {`{0,...,9,+,*,(,)}`}

E → I | E + E | E * E | (E)
I → 0 | 1 | ... | 9
    </pre>
    <p className="leading-relaxed">
      The string <strong>3 * 2 + 5</strong> can be derived in two different leftmost derivations:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>First derivation: E ⇒ E * E ⇒ 3 * E + E ⇒ 3 * 2 + 5</li>
      <li>Second derivation: E ⇒ E + E ⇒ E * E + E ⇒ 3 * 2 + 5</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Examples of Ambiguous and Unambiguous Grammars</h2>
    <p className="leading-relaxed">
      <strong>Ambiguous:</strong> S → aS | Sa | ε, E → E + E | E * E | id, A → AA | (A) | a, S → SS | AB  
      <strong>Unambiguous:</strong> S → (L) | a, L → LS | S, S → AA, A → aA | b
    </p>

    <h2 className="text-3xl font-bold mt-8">Removal of Ambiguity</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simplify production rules</li>
      <li>Set precedence and associativity (e.g., multiplication before addition)</li>
      <li>Fix left recursion by moving it to the end of rules</li>
      <li>Factor out common parts in productions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Inherent Ambiguity</h2>
    <p className="leading-relaxed">
  A language is <strong>inherently ambiguous</strong> if every possible grammar for it is ambiguous.  
  Example: L = {"{"} a^n b^n c^m d^m : n ≥ 1, m ≥ 1 {"}"} ∪ {"{"} a^n b^m c^m d^n : n ≥ 1, m ≥ 1 {"}"}  
  The string <strong>aabbccdd</strong> can be derived using two different rules, so L is inherently ambiguous.
</p>


    <h2 className="text-3xl font-bold mt-8">Important Points</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Grammar with both left and right recursion can be ambiguous.  
      Example: S → SaS | ε</li>
      <li>Even without left/right recursion, a grammar can be ambiguous.  
      Example: S → aB | ab, A → AB | a, B → Abb | b</li>
    </ul>

  </div>
);

export default AmbiguousGrammar;
