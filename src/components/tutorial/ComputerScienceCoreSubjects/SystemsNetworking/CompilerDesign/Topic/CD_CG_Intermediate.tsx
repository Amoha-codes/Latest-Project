import React from "react";

const IntermediateCodeGeneration: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Intermediate Code Generation in Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="leading-relaxed text-lg">
      In the analysis-synthesis model of a compiler, the front end translates a source program into an independent intermediate code, 
      and the back end generates the target machine code from this intermediate code. Benefits of using machine-independent intermediate code include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Enhanced portability: The intermediate code allows compilation for multiple machines without rewriting the compiler.</li>
      <li>Facilitates retargeting for new machines.</li>
      <li>Easier application of code optimization to improve performance.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">What is Intermediate Code Generation?</h2>
    <p className="leading-relaxed">
      Intermediate Code Generation is a compiler phase that converts source code into a machine-independent intermediate representation, 
      which is simpler to analyze and manipulate than high-level code.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Translation:</strong> Converts high-level code (like C/Java) into an intermediate form.</li>
      <li><strong>Portability:</strong> Runs on different machines without major changes.</li>
      <li><strong>Optimization:</strong> Intermediate code can be optimized before converting to machine code.</li>
    </ul>

    <p className="leading-relaxed">
      If machine code is generated directly from source, we need n code generators and optimizers for n target machines. 
      With machine-independent intermediate code, only one optimizer is required. Intermediate code can be language-specific (like Java Bytecode) 
      or language-independent (like Three-Address Code).
    </p>

    <h2 className="text-3xl font-bold mt-8">Intermediate Code Representations</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Postfix Notation</h3>
    <p className="leading-relaxed">
      Also called reverse Polish notation. The operator comes after the operands, removing the need for parentheses.
    </p>
    <ul className="list-disc ml-6">
      <li>Example 1: (a + b) * c → <code>ab + c *</code></li>
      <li>Example 2: (a - b) * (c + d) + (a - b) → <code>ab - cd + * ab - +</code></li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Three-Address Code (TAC)</h3>
    <p className="leading-relaxed">
      Each statement contains at most three addresses (two operands and one result). Form: <code>x = y op z</code>.
    </p>
    <pre className="bg-gray-100 p-4 rounded">
      {`// Example: a + b * c + d
T1 = b * c
T2 = a + T1
T3 = T2 + d
// T1, T2, T3 are temporary variables`}
    </pre>

    <p className="leading-relaxed">
      Three representations of TAC:
    </p>
    <ul className="list-disc ml-6">
      <li>Quadruples</li>
      <li>Triples</li>
      <li>Indirect Triples</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Syntax Tree</h3>
    <p className="leading-relaxed">
      A condensed representation of a parse tree. Internal nodes are operators, child nodes are operands. Parentheses help determine operation order.
    </p>
    <pre className="bg-gray-100 p-4 rounded">
      {`// Example: x = (a + b * c) / (a - b * c)`}
// Syntax tree representation shows operators as internal nodes and operands as children
    </pre>

    <h2 className="text-3xl font-bold mt-8">Advantages of Intermediate Code Generation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easier to implement: simplifies code generation process.</li>
      <li>Facilitates code optimization.</li>
      <li>Platform-independent representation.</li>
      <li>Enables code reuse across platforms.</li>
      <li>Easier debugging: closer to source code than machine code.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Intermediate Code Generation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increases compilation time.</li>
      <li>Requires additional memory for intermediate representation.</li>
      <li>Adds complexity to compiler design.</li>
      <li>May reduce performance compared to direct machine code generation.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Intermediate Code Generation is a key compiler phase that simplifies translating high-level languages into machine code. 
      By creating a machine-independent intermediate representation, compilers can optimize code more effectively, 
      enhance portability, and improve performance. It plays a critical role in making programming easier and more efficient.
    </p>

  </div>
);

export default IntermediateCodeGeneration;
