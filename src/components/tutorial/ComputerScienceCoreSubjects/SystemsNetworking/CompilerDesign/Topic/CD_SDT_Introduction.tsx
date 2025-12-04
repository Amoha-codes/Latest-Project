import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Syntax Directed Translation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Syntax Directed Translation in Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      <strong>Syntax-Directed Translation (SDT)</strong> is a method used in compiler design to convert 
      source code into another form while analyzing its structure. It integrates <strong>syntax analysis (parsing)</strong> 
      with <strong>semantic rules</strong> to produce intermediate code, machine code, or optimized instructions.
    </p>

    <p className="leading-relaxed">
      In SDT, each grammar rule is linked with <strong>semantic actions</strong> that define how translation should occur. 
      These actions help in tasks like evaluating expressions, checking types, generating code, and handling errors.
    </p>

    <p className="leading-relaxed">
      SDT ensures a systematic and structured way of translating programs, allowing information to be processed 
      bottom-up or top-down through the parse tree.
    </p>

    {/* Key Elements */}
    <h2 className="text-3xl font-bold mt-8">Key Elements of SDT</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Lexical values of nodes (variable names, numbers).</li>
      <li>Constants used in computations.</li>
      <li>Attributes associated with non-terminals storing intermediate results.</li>
    </ul>

    <p className="leading-relaxed">
      Translation can often be performed <strong>during parsing</strong> without explicitly building the parse tree.
    </p>

    {/* SDT vs SDD */}
    <h2 className="text-3xl font-bold mt-8">SDD vs SDT Scheme</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Syntax Directed Definition (SDD)</th>
          <th className="border px-4 py-2">Syntax Directed Translation (SDT)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Attributes and semantic rules associated with grammar symbols and productions.</td>
          <td className="border px-4 py-2">Translation of a string into a sequence of actions using semantic actions in production rules.</td>
        </tr>
        <tr>
         <td className="border px-4 py-2">E → E + T {'{ E.val := E1.val + T.val }'}</td>

          <td className="border px-4 py-2">E → E + T {'{print(\'+\')}' };</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Semantic rules usually at the end of production.</td>
          <td className="border px-4 py-2">Position of action defines execution order (middle or end of production).</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">More readable, specifies non-terminals and calculations.</td>
          <td className="border px-4 py-2">More efficient, specifies what and when to calculate, generates intermediate code.</td>
        </tr>
      </tbody>
    </table>

    {/* Attributes */}
    <h2 className="text-3xl font-bold mt-8">Attributes in SDT</h2>
    <p className="leading-relaxed">
      An <strong>attribute</strong> is any quantity associated with a programming construct in a parse tree. 
      Attributes carry semantic information during compilation.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data types of variables</li>
      <li>Line numbers for error handling</li>
      <li>Instruction details for code generation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Attributes</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Synthesized Attributes:</strong> Computed using children and the node itself; used in bottom-up evaluation.
      </li>
      <li>
        <strong>Inherited Attributes:</strong> Computed using parent, siblings, and the node; used in top-down evaluation.
      </li>
    </ul>

    {/* Attribute Grammars */}
    <h2 className="text-3xl font-bold mt-8">Attribute Grammars</h2>
    <p className="leading-relaxed">
      An <strong>Attributed Grammar</strong> adds extra information (attributes) to syntax rules, assisting in semantic analysis.
    </p>

    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Production Rule</th>
          <th className="border px-4 py-2">Semantic Rule</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">D → T L</td>
          <td className="border px-4 py-2">L.in := T.type</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">T → int</td>
          <td className="border px-4 py-2">T.type := integer</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">T → real</td>
          <td className="border px-4 py-2">T.type := real</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">L → L1 , id</td>
          <td className="border px-4 py-2">L1.in := L.in; addtype(id.entry, L.in)</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">L → id</td>
          <td className="border px-4 py-2">addtype(id.entry, L.in)</td>
        </tr>
      </tbody>
    </table>

    {/* Translation Rules */}
    <h2 className="text-3xl font-bold mt-8">Grammar and Translation Rules</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">SDT Scheme</th>
          <th className="border px-4 py-2">SDD Scheme</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">E → E + T {'{print(\'+\')}' }</td>
          <td className="border px-4 py-2">E → E + T E.code = E.code || T.code || '+' </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">E → E - T {'{print(\'-\')}' }</td>
          <td className="border px-4 py-2">E → E - T E.code = E.code || T.code || '-'</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">E → T</td>
          <td className="border px-4 py-2">E → T E.code = T.code</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">T → 0 {'{print(\'0\')}' }</td>
          <td className="border px-4 py-2">T → 0 T.code = '0'</td>
        </tr>
        <tr>
         <td className="border px-4 py-2">T → 1 {'{ print(\'1\') }'}</td>

          <td className="border px-4 py-2">T → 1 T.code = '1'</td>
        </tr>
      </tbody>
    </table>

    {/* Example of SDT Evaluation */}
    <h2 className="text-3xl font-bold mt-8">Example: Evaluating Arithmetic Expression</h2>
    <p className="leading-relaxed">
      Grammar for arithmetic expressions:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">
  E → E + T {'{ E.val = E.val + T.val }'}{"\n"}
  E → T {'{ E.val = T.val }'}{"\n"}
  T → T * F {'{ T.val = T.val * F.val }'}{"\n"}
  T → F {'{ T.val = F.val }'}{"\n"}
  F → INTLIT {'{ F.val = INTLIT.lexval }'}
</pre>


    <p className="leading-relaxed">
      Expression: <strong>2 + 3 * 4</strong>
    </p>

    <p className="leading-relaxed">
      <strong>Step 1: Build Parse Tree</strong> (bottom-up evaluation)
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`        E
       /|\\
      E + T
     /   /|\\
    T   T * F
   /   /   |
  F   F    4
  |   |
  2   3`}
    </pre>

    <p className="leading-relaxed">
      <strong>Step 2: Apply Translation Rules</strong>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>F → 2 → F.val = 2</li>
      <li>F → 3 → F.val = 3</li>
      <li>F → 4 → F.val = 4</li>
      <li>T → F → T.val = 3</li>
      <li>T → T * F → T.val = 3 * 4 = 12</li>
      <li>E → T → E.val = 12</li>
      <li>E → E + T → E.val = 2 + 12 = 14</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Final computed value: <strong>14</strong>
    </p>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of SDT</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ease of implementation with clear structured rules.</li>
      <li>Separation of translation from parsing (modular design).</li>
      <li>Efficient code generation using intermediate code and optimization.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of SDT</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited expressiveness compared to attribute grammars.</li>
      <li>Inflexible for complex translation rules.</li>
      <li>Limited error recovery during translation.</li>
    </ul>

  </div>
);

export default Home;
