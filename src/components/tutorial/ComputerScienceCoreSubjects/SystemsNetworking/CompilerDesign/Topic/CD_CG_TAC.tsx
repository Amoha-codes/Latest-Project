import React from "react";

const ThreeAddressCode: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Three Address Code in Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Dec, 2024</p>

    <p className="leading-relaxed">
      TAC (Three Address Code) is an intermediate representation used by compilers to simplify code generation. Complex expressions are broken down into simple steps using at most three addresses: two operands and one result. Results are stored in compiler-generated temporary variables, ensuring explicit ordering of operations. TAC is simple, optimizable, and translates easily into machine code. It captures control flow and data dependencies, positioning itself between high-level source code and machine instructions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Applications of Three Address Code</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Optimization:</strong> Enables analyzing code to perform optimizations improving performance.</li>
      <li><strong>Code Generation:</strong> Helps generate correct and efficient target-specific code.</li>
      <li><strong>Debugging:</strong> Easier to read and understand than final machine code, helping trace execution.</li>
      <li><strong>Language Translation:</strong> Serves as a common intermediate representation for multi-language translation.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">General Representation</h2>
    <p className="leading-relaxed">
      TAC typically has the forms:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>a = b</li>
      <li>a = op b</li>
      <li>a = b op c</li>
    </ul>
    <p className="leading-relaxed">
      Where <strong>a, b, c</strong> are operands (variables, constants, or temporaries) and <strong>op</strong> is an operator.
    </p>

    <h2 className="text-3xl font-bold mt-8">Examples</h2>
    <p className="leading-relaxed"><strong>Example 1:</strong> Convert expression <code>a * -(b + c)</code> into TAC.</p>
    <p className="bg-gray-400 p-4 rounded">Three Address Code here...</p>

    <p className="leading-relaxed mt-4"><strong>Example 2:</strong> Convert the following code into TAC:</p>
    <pre className="bg-gray-400 p-4 rounded">
{`for(i = 1; i <= 10; i++) {
  a[i] = x * 5;
}`}</pre>
    <p className="bg-gray-400 p-4 rounded">Three-address code for the for loop here...</p>

    <h2 className="text-3xl font-bold mt-8">Representations of Three Address Code</h2>
    <p className="leading-relaxed">
      TAC can be represented in three ways:
    </p>

    <h3 className="text-2xl font-bold mt-4">1. Quadruple</h3>
    <p className="leading-relaxed">
      Structure consists of 4 fields: <strong>op</strong>, <strong>arg1</strong>, <strong>arg2</strong>, and <strong>result</strong>.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Advantage: Easy for global optimization, temporary variables accessible via symbol table.</li>
      <li>Disadvantage: Many temporaries increase time and space complexity.</li>
    </ul>
    <pre className="bg-gray-400 p-4 rounded">
{`t1 = uminus c
t2 = b * t1
t3 = uminus c
t4 = b * t3
t5 = t2 + t4
a = t5`}
</pre>

    <h3 className="text-2xl font-bold mt-4">2. Triples</h3>
    <p className="leading-relaxed">
      Only three fields: <strong>op</strong>, <strong>arg1</strong>, and <strong>arg2</strong>. References to other triples are pointers, avoiding extra temporaries.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Disadvantage: Implicit temporaries are harder to rearrange and optimize.</li>
    </ul>
    <pre className="bg-gray-400 p-4 rounded">
{`Triples representation for a = b * - c + b * - c`}
</pre>

    <h3 className="text-2xl font-bold mt-4">3. Indirect Triples</h3>
    <p className="leading-relaxed">
      Uses pointers to a separate listing of computations. Less space than quadruples and easier to rearrange.
    </p>
    <pre className="bg-gray-400 p-4 rounded">
{`Indirect Triples for a = b * - c + b * - c`}
</pre>

    <h2 className="text-3xl font-bold mt-8">Example Problem</h2>
    <p className="leading-relaxed">
      Write quadruple, triples, and indirect triples for <code>(x + y) * (y + z) + (x + y + z)</code>.
    </p>
    <pre className="bg-gray-400 p-4 rounded">
{`(1) t1 = x + y
(2) t2 = y + z
(3) t3 = t1 * t2
(4) t4 = t1 + z
(5) t5 = t3 + t4`}
</pre>
    <p className="leading-relaxed">Represented as Quadruple, Triples, and Indirect Triples accordingly.</p>

    <h2 className="text-3xl font-bold mt-8">Implementation of TAC</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Source Code Parsing & AST Generation:</strong>
        <ul className="list-disc ml-6">
          <li>Lexical Analysis: Tokenizes source code.</li>
          <li>Syntax Analysis: Builds Abstract Syntax Tree.</li>
          <li>Semantic Analysis: Type checking, builds symbol table.</li>
        </ul>
      </li>
      <li>
        <strong>TAC Instructions Generation:</strong>
        <ul className="list-disc ml-6">
          <li>Traverse AST and generate instructions.</li>
          <li>Use temporaries for intermediate computations.</li>
        </ul>
      </li>
      <li>
        <strong>Evaluation of Expressions:</strong>
        <ul className="list-disc ml-6">
          <li>Arithmetic: Divide complex expressions. Example: a + b * c → t1 = b * c, t2 = a + t1</li>
          <li>Logical: AND, OR, NOT → translated into conditional jumps.</li>
        </ul>
      </li>
      <li>
        <strong>Control Flow Constructs:</strong>
        <ul className="list-disc ml-6">
          <li>If statements → conditional jumps</li>
          <li>While loops → unconditional and conditional jumps</li>
          <li>For loops → converted to while loops</li>
          <li>Goto → unconditional jump to label</li>
        </ul>
      </li>
      <li>
        <strong>Procedure Calls:</strong>
        <ul className="list-disc ml-6">
          <li>Arguments pushed onto the stack</li>
          <li>Jump to function entry</li>
          <li>Return value stored in temporary variable</li>
        </ul>
      </li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      TAC is a crucial intermediate representation due to its simplicity, efficiency, and flexibility. It breaks complex expressions into manageable instructions with at most three addresses. TAC supports optimizations like constant folding and dead code elimination, and remains independent of machine architecture, bridging high-level source code and machine code.
    </p>

    <h2 className="text-3xl font-bold mt-8">TAC Instructions and Operators</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Instructions: Arithmetic, logical AND/OR, assignments, conditional jumps, function calls.</li>
      <li>Operators: Arithmetic (+, -), logical (AND, OR), comparisons, control flow, load/store for memory access.</li>
      <li>Difference from other IRs: Makes operations and operands explicit, easier to generate, manipulate, and optimize than ASTs or other intermediate representations.</li>
    </ul>

  </div>
);

export default ThreeAddressCode;
