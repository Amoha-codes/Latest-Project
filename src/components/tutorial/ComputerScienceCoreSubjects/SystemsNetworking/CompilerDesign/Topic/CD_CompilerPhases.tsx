import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Phases of a Compiler ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Phases of a Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A compiler transforms a high-level language program into machine code through several
      well-defined phases. Each phase performs a specific task and passes its output to the next
      phase. Generally, a compiler consists of <strong>six major phases</strong>, forming the 
      front end and back end of compilation.
    </p>

    {/* ============== 1. Lexical Analysis ============== */}
    <h2 className="text-3xl font-bold mt-8">1. Lexical Analysis</h2>
    <p className="leading-relaxed">
      Lexical Analysis converts the raw source code into a sequence of <strong>tokens</strong>.  
      The lexical analyzer scans characters and groups them into meaningful units such as:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Keywords</li>
      <li>Identifiers</li>
      <li>Operators</li>
      <li>Literals</li>
      <li>Punctuation symbols</li>
    </ul>
    <p className="leading-relaxed">
      Example: <code>int x = 10;</code> produces tokens <strong>int</strong>, <strong>x</strong>, 
      <strong>=</strong>, <strong>10</strong>, <strong>;</strong>.
    </p>

    {/* ============== 2. Syntax Analysis ============== */}
    <h2 className="text-3xl font-bold mt-8">2. Syntax Analysis (Parsing)</h2>
    <p className="leading-relaxed">
      Syntax Analysis checks whether the token sequence follows the grammar of the programming
      language. It builds:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Parse Tree</strong> – Detailed structure based on grammar productions.</li>
      <li><strong>Syntax Tree</strong> – Simplified hierarchical structure.</li>
    </ul>
    <p className="leading-relaxed">
      It ensures valid program structure (e.g., matching parentheses, valid expressions).
    </p>

    {/* ============== 3. Semantic Analysis ============== */}
    <h2 className="text-3xl font-bold mt-8">3. Semantic Analysis</h2>
    <p className="leading-relaxed">
      Semantic Analysis ensures that the program is logically meaningful. It performs:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Type Checking</strong> – Verifies operand compatibility.</li>
      <li><strong>Scope Checking</strong> – Ensures variables are declared before use.</li>
      <li><strong>Semantic Rule Validation</strong></li>
    </ul>
    <p className="leading-relaxed">
      Example: Assigning a <strong>float</strong> value to an <strong>int</strong> variable 
      triggers a type mismatch error.
    </p>

    {/* ============== 4. Intermediate Code Generation ============== */}
    <h2 className="text-3xl font-bold mt-8">4. Intermediate Code Generation</h2>
    <p className="leading-relaxed">
      Intermediate Code (IR) is a machine-independent, low-level representation used to simplify 
      optimization and code generation. Example:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      a = b + c * d <br/><br/>
      t1 = c * d <br/>
      t2 = b + t1 <br/>
      a = t2
    </p>

    <p className="leading-relaxed">
      IR improves portability and allows easier optimization.
    </p>

    {/* ============== 5. Code Optimization ============== */}
    <h2 className="text-3xl font-bold mt-8">5. Code Optimization</h2>
    <p className="leading-relaxed">
      Code Optimization improves execution speed and reduces memory usage without changing program output.
      Techniques include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Constant Folding</li>
      <li>Dead Code Elimination</li>
      <li>Strength Reduction</li>
      <li>Loop Optimization</li>
      <li>Common Subexpression Elimination</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example Optimization:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <strong>Before:</strong><br/>
      x = y + z;<br/>
      for (int j = 0; j &lt; n; j++) &#123; a[j] = 6 * x * j; &#125;<br/><br/>

      <strong>After:</strong><br/>
      x = y + z;<br/>
      for (int j = 0; j &lt; n; j++) &#123; a[j] = 6 * x * j; &#125;
    </p>

    {/* ============== 6. Code Generation ============== */}
    <h2 className="text-3xl font-bold mt-8">6. Code Generation</h2>
    <p className="leading-relaxed">
      Code Generation converts the optimized intermediate code into machine code or assembly.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <strong>Three Address Code</strong><br/>
      t1 = c * d<br/>
      t2 = b + t1<br/>
      a = t2<br/><br/>

      <strong>Assembly Code</strong><br/>
      LOAD R1, c<br/>
      LOAD R2, d<br/>
      MUL R1, R2<br/>
      LOAD R3, b<br/>
      ADD R3, R1<br/>
      STORE a, R3
    </p>

    {/* Symbol Table */}
    <h2 className="text-3xl font-bold mt-8">Symbol Table</h2>
    <p className="leading-relaxed">
      The Symbol Table stores identifiers and their attributes (type, scope, memory location).  
      It is essential for semantic analysis and type checking.
    </p>

    {/* Error Handling */}
    <h2 className="text-3xl font-bold mt-8">Error Handling in Compiler Phases</h2>
    <p className="leading-relaxed">Errors may occur in any compiler phase:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Lexical:</strong> invalid characters, malformed tokens.</li>
      <li><strong>Syntax:</strong> missing semicolons, unmatched brackets.</li>
      <li><strong>Semantic:</strong> undeclared variables, type mismatch.</li>
      <li><strong>Intermediate Code:</strong> invalid operations.</li>
      <li><strong>Optimization:</strong> faulty redundant code removal.</li>
      <li><strong>Code Generation:</strong> register overflow, invalid machine instructions.</li>
    </ul>

    {/* Front End & Back End */}
    <h2 className="text-3xl font-bold mt-8">Two Parts of the Compilation Process</h2>
    <p className="leading-relaxed">
      A compiler is divided into:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Front-End:</strong> Lexical Analysis, Syntax Analysis, Semantic Analysis, 
        Intermediate Code Generation.
      </li>
      <li>
        <strong>Back-End:</strong> Optimization, Code Generation, Assembly Generation.
      </li>
    </ul>

    <p className="leading-relaxed">
      The front end analyzes the program to create an intermediate representation, while the 
      back end converts it into executable machine code.
    </p>

  </div>
);

export default Home;
