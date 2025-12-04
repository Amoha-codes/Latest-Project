import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Syntax Analysis ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Syntax Analysis in Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      Syntax Analysis, also known as parsing, is the step after Lexical Analysis. 
      While Lexical Analysis breaks source code into tokens, Syntax Analysis takes these tokens as input and interprets their meaning. 
      It ensures that tokens are arranged according to the programming language's grammar and constructs a Parse Tree or Abstract Syntax Tree (AST) representing the program's structure.
    </p>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts in Syntax Analysis</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Context-Free Grammars (CFG):</strong> CFG defines syntax rules for a programming language using production rules to form valid sequences of tokens.
      </li>
      <li>
        <strong>Derivations:</strong> The process of applying CFG rules to generate token sequences and build a parse tree.
      </li>
      <li>
        <strong>Concrete and Abstract Syntax Trees:</strong>
        <ul className="list-disc ml-6">
          <li><strong>Concrete Syntax Tree (CST):</strong> Full syntactic structure, including all grammar details.</li>
          <li><strong>Abstract Syntax Tree (AST):</strong> Simplified version focusing on essential elements, easier for further processing.</li>
        </ul>
      </li>
      <li>
        <strong>Ambiguity:</strong> Occurs when a grammar allows multiple interpretations of the same token sequence, which must be avoided.
      </li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features of Syntax Analysis</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Syntax Trees:</strong> Hierarchical representation showing relationships between statements, expressions, and operators.</li>
      <li><strong>Context-Free Grammar:</strong> Formal language used to define the syntax rules of programming languages.</li>
      <li><strong>Top-Down and Bottom-Up Parsing:</strong> Top-down parsing builds the tree from root to leaves, while bottom-up parsing builds from leaves to root.</li>
      <li><strong>Error Detection:</strong> Detects syntax errors and reports their location.</li>
      <li><strong>Intermediate Code Generation:</strong> Produces an abstract representation of the code for subsequent compiler phases.</li>
      <li><strong>Optimization:</strong> Can remove redundant code and simplify expressions during parsing.</li>
    </ul>

    {/* Parsing Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Parsing Algorithms and CFG</h2>
    <p className="leading-relaxed">
      Context-Free Grammars (CFGs) define languages beyond the capabilities of regular expressions. 
      They can handle nested structures such as balanced parentheses and function blocks.
    </p>

    {/* Parse Tree */}
    <h2 className="text-3xl font-bold mt-8">Parse Tree</h2>
    <p className="leading-relaxed">
      A parse tree represents the syntactic structure of a string according to CFG rules:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Root node: start symbol of the grammar.</li>
      <li>Internal nodes: non-terminal symbols expanded according to production rules.</li>
      <li>Leaf nodes: terminal symbols (actual tokens from input).</li>
    </ul>

    <p className="leading-relaxed">
      <strong>Example:</strong> For the grammar:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`S -> cAd
A -> bc | a
Input string: "cad"
`}
    </pre>
    <p className="leading-relaxed">
      The parser tries to construct a syntax tree. It may backtrack if a production rule does not match, until the input string is successfully derived.
    </p>

    {/* Steps in Syntax Analysis */}
    <h2 className="text-3xl font-bold mt-8">Steps in Syntax Analysis Phase</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Parsing:</strong> Analyze tokens according to grammar and construct a parse tree or AST.</li>
      <li><strong>Error Handling:</strong> Detect and report syntax errors with precise locations.</li>
      <li><strong>Symbol Table Creation:</strong> Store information about identifiers, including type, scope, and location.</li>
    </ul>

  </div>
);

export default Home;
