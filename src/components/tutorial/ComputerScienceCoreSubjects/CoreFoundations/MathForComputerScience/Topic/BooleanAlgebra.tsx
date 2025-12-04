import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Boolean Algebra ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Boolean Algebra
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Boolean Algebra is a branch of mathematics dealing with variables having only two values — 0 and 1 (false and true). It focuses on logic operations like <strong>AND</strong>, <strong>OR</strong>, and <strong>NOT</strong>.
      <br />
      It forms the foundation for digital electronics, computer logic, and programming conditions.
    </p>

    {/* Logical Operations */}
    <h2 className="text-3xl font-bold mt-8">Logical Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Negation or NOT Operation</li>
      <li>Conjunction or AND Operation</li>
      <li>Disjunction or OR Operation</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-4">3 Basic Boolean Operations</p>
    <p className="leading-relaxed">
      The table below shows the symbols and precedence of basic Boolean operators:
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-2">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Operator</th>
          <th className="border border-gray-300 px-4 py-2">Symbol</th>
          <th className="border border-gray-300 px-4 py-2">Precedence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">NOT</td>
          <td className="border border-gray-300 px-4 py-2">' or ⇁</td>
          <td className="border border-gray-300 px-4 py-2">First</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">AND</td>
          <td className="border border-gray-300 px-4 py-2">. or ∧</td>
          <td className="border border-gray-300 px-4 py-2">Second</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">OR</td>
          <td className="border border-gray-300 px-4 py-2">+ or ∨</td>
          <td className="border border-gray-300 px-4 py-2">Third</td>
        </tr>
      </tbody>
    </table>

    {/* Boolean Examples */}
    <h2 className="text-3xl font-bold mt-8">Boolean Variables & Expressions</h2>
    <p className="leading-relaxed">
      Let <strong>A</strong> and <strong>B</strong> be Boolean variables (0 or 1). Operations work as:
    </p>

    <h3 className="text-2xl font-semibold mt-4">Negation (NOT)</h3>
    <p className="leading-relaxed">
      <code>A' = ~A</code>: reverses value.
      <br />If A = 1 → A' = 0, If A = 0 → A' = 1
    </p>

    <h3 className="text-2xl font-semibold mt-4">Conjunction (AND)</h3>
    <p className="leading-relaxed">
      True only if both are True:
      <br />A ⋅ B = True only if A = True and B = True
    </p>

    <h3 className="text-2xl font-semibold mt-4">Disjunction (OR)</h3>
    <p className="leading-relaxed">
      True if any is True:
      <br />A + B = True if A or B is True, else False
    </p>

    {/* Extended Boolean Table */}
    <h2 className="text-3xl font-bold mt-8">Boolean Algebra Table (Extended)</h2>
    <table className="table-auto border-collapse border border-gray-400 mt-2">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Operation</th>
          <th className="border border-gray-300 px-4 py-2">Symbol</th>
          <th className="border border-gray-300 px-4 py-2">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">AND</td>
          <td className="border border-gray-300 px-4 py-2">⋅ or ∧</td>
          <td className="border border-gray-300 px-4 py-2">Returns true only if both inputs are true.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">OR</td>
          <td className="border border-gray-300 px-4 py-2">+ or ∨</td>
          <td className="border border-gray-300 px-4 py-2">Returns true if at least one input is true.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">NOT</td>
          <td className="border border-gray-300 px-4 py-2">¬ or ∼</td>
          <td className="border border-gray-300 px-4 py-2">Reverses the input.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">XOR</td>
          <td className="border border-gray-300 px-4 py-2">⊕</td>
          <td className="border border-gray-300 px-4 py-2">True if exactly odd number of inputs are true.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">NAND</td>
          <td className="border border-gray-300 px-4 py-2">↑</td>
          <td className="border border-gray-300 px-4 py-2">False only if both inputs are true.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">NOR</td>
          <td className="border border-gray-300 px-4 py-2">↓</td>
          <td className="border border-gray-300 px-4 py-2">False if at least one input is true.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">XNOR</td>
          <td className="border border-gray-300 px-4 py-2">↔</td>
          <td className="border border-gray-300 px-4 py-2">True if both inputs are equal.</td>
        </tr>
      </tbody>
    </table>

    {/* Additional content like Laws, De Morgan's Theorems, Applications, Examples */}
    <p className="leading-relaxed mt-4">
      All Boolean Algebra laws (Identity, Commutative, Associative, Distributive, Inversion, etc.) and De Morgan's Theorems can be added below in similar JSX-safe format using <code>table</code> and <code>sup</code> wherever needed.
    </p>

  </div>
);

export default Home;
