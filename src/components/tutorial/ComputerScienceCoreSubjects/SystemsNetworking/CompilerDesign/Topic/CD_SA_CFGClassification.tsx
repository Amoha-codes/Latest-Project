import React from "react";

const CFGClassification: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= CFG Classification ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Classification of Context-Free Grammars
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      A <strong>Context-Free Grammar (CFG)</strong> is a formal system that describes the syntax of programming languages in compiler design. It consists of production rules defining how terminals and non-terminals combine to form valid sentences. CFGs are critical in parsing, where the source code is verified against the language's grammar.
    </p>

    {/* Key Components */}
    <h2 className="text-3xl font-bold mt-8">Key Components of a CFG</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Non-terminals:</strong> Symbols replaced by other symbols (e.g., S, A, B).</li>
      <li><strong>Terminals:</strong> Basic symbols of the language that cannot be replaced (e.g., a, b, +, if).</li>
      <li><strong>Start symbol:</strong> Non-terminal from which derivation begins (e.g., S).</li>
      <li><strong>Production rules:</strong> Describe how non-terminals expand into sequences of terminals/non-terminals (e.g., S → A B, A → a).</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example of a CFG</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
E → E + T | T{'\n'}
T → T × F | F{'\n'}
F → (E) | id
    </pre>
    <p className="leading-relaxed">
      Here, <strong>E</strong> is an expression, <strong>T</strong> is a term, <strong>F</strong> is a factor, + and × are operators, and <strong>id</strong> is a terminal identifier.
    </p>

    {/* Classification */}
    <h2 className="text-3xl font-bold mt-8">Classification of CFG</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Based on Number of Strings Generated</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Non-Recursive Grammar:</strong> Generates a finite number of strings.  
        <em>Example:</em> S → A a, A → b | c → Language: {`{ba, ca}`}
      </li>
      <li>
        <strong>Recursive Grammar:</strong> Can generate infinite strings.  
        <em>Examples:</em>  
        <pre className="bg-gray-400 p-2 rounded-lg text-sm">
S → S a S{'\n'}
S → b{'\n'}Language: {`{b, bab, babab, ...}`}  

S → A a{'\n'}
A → A b | c{'\n'}Language: {`{ca, cba, cbba, ...}`}
        </pre>
      </li>
      <li>
        <strong>Types of Recursive Grammars:</strong>  
        Left Recursive, Right Recursive, General Recursive
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Based on Number of Derivation Trees</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Unambiguous CFG:</strong> Only one derivation tree exists.  
        <em>Example:</em>  
        <pre className="bg-gray-400 p-2 rounded-lg text-sm">
E → E + T | T{'\n'}
T → T × F | F{'\n'}
F → (E) | id
        </pre>
        Ensures only one valid parse for expressions like a + b × c.
      </li>
      <li>
        <strong>Ambiguous CFG:</strong> Multiple derivation trees exist.  
        <em>Example:</em>  
        <pre className="bg-gray-400 p-2 rounded-lg text-sm">
E → E + E | E × E | id
        </pre>
        Expression a + b × c has two interpretations: a + (b × c) or (a + b) × c.
      </li>
    </ul>

    <p className="leading-relaxed">
      <strong>Note:</strong> A linear grammar is a CFG with at most one non-terminal on the right-hand side of each production.
    </p>

  </div>
);

export default CFGClassification;
