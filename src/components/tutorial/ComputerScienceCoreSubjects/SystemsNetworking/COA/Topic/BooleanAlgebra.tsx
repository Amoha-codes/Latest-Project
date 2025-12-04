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
      Boolean Algebra is a branch of mathematics dealing with variables that have only two possible values — typically 0 and 1 (or false and true). It provides a formal way to represent and manipulate logical statements and binary operations, forming the foundation of digital electronics, computer logic, and programming conditions.
    </p>

    {/* Logical Operations */}
    <h2 className="text-3xl font-bold mt-8">Logical Operations</h2>
    <p className="leading-relaxed">
      The basic Boolean operations are:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Negation (NOT)</li>
      <li>Conjunction (AND)</li>
      <li>Disjunction (OR)</li>
    </ul>

    {/* Boolean Operations Table */}
    <h2 className="text-3xl font-bold mt-8">Basic Boolean Operations and Precedence</h2>
    <p className="leading-relaxed">Symbols and precedence of Boolean operators:</p>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Operator</th>
          <th className="border border-gray-400 px-4 py-2">Symbol</th>
          <th className="border border-gray-400 px-4 py-2">Precedence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">NOT</td>
          <td className="border border-gray-400 px-4 py-2">' or ⇁</td>
          <td className="border border-gray-400 px-4 py-2">First</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">AND</td>
          <td className="border border-gray-400 px-4 py-2">. or ∧</td>
          <td className="border border-gray-400 px-4 py-2">Second</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">OR</td>
          <td className="border border-gray-400 px-4 py-2">+ or ∨</td>
          <td className="border border-gray-400 px-4 py-2">Third</td>
        </tr>
      </tbody>
    </table>

    {/* Boolean Operations Explanation */}
    <h2 className="text-3xl font-bold mt-8">Boolean Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>NOT:</strong> Reverses a Boolean value. If A = 1, then (A)' = 0. Also written as ~A.
      </li>
      <li>
        <strong>AND:</strong> True only if both inputs are true. Examples:
        <ul className="list-disc ml-6">
          <li>A = True, B = True → A . B = True</li>
          <li>A = True, B = False → A . B = False</li>
          <li>A = False, B = False → A . B = False</li>
        </ul>
      </li>
      <li>
        <strong>OR:</strong> True if at least one input is true. Examples:
        <ul className="list-disc ml-6">
          <li>A = True, B = True → A + B = True</li>
          <li>A = True, B = False → A + B = True</li>
          <li>A = False, B = False → A + B = False</li>
        </ul>
      </li>
    </ul>

    {/* Extended Boolean Operations */}
    <h2 className="text-3xl font-bold mt-8">Extended Boolean Operations</h2>
    <p className="leading-relaxed">
      Additional operations include XOR, NAND, NOR, XNOR. Examples:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>XOR (⊕): True if an odd number of inputs is true.</li>
      <li>NAND (↑): False only if both inputs are true.</li>
      <li>NOR (↓): False if at least one input is true.</li>
      <li>XNOR (↔): True if inputs are equal.</li>
    </ul>

    {/* Boolean Expressions and Variables */}
    <h2 className="text-3xl font-bold mt-8">Boolean Expressions and Variables</h2>
    <p className="leading-relaxed">
      Boolean expressions produce a Boolean value (True or False). Boolean variables store 0 or 1. Example: P + Q = R, where P, Q, R are Boolean variables.
    </p>

    {/* Truth Tables */}
    <h2 className="text-3xl font-bold mt-8">Truth Tables</h2>
    <p className="leading-relaxed">
      Truth tables show all combinations of input and output values.
    </p>

    {/* Laws of Boolean Algebra */}
    <h2 className="text-3xl font-bold mt-8">Laws of Boolean Algebra</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Identity: A + 0 = A, A . 1 = A</li>
      <li>Commutative: A . B = B . A, A + B = B + A</li>
      <li>Associative: (A . B) . C = A . (B . C), (A + B) + C = A + (B + C)</li>
      <li>Distributive: A . (B + C) = A . B + A . C</li>
      <li>Inversion: (A')' = A</li>
      <li>Complement: A + A' = 1, A . A' = 0</li>
      <li>Domination: A + 1 = 1, A . 0 = 0</li>
      <li>Double Negation: (A')' = A</li>
    </ul>

    {/* De Morgan's Theorems */}
    <h2 className="text-3xl font-bold mt-8">De Morgan’s Theorems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>First Law: (P . Q)' = P' + Q'</li>
      <li>Second Law: (P + Q)' = P' . Q'</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Digital logic design for circuits and computers</li>
      <li>Algorithm design and optimization</li>
      <li>Telecommunications: error detection, signal encoding</li>
      <li>Artificial Intelligence: decision-making, neural networks</li>
      <li>Electrical engineering: switching circuits analysis</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <p className="leading-relaxed">
      Example 1: Truth Table for P + P . Q = P
    </p>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">P</th>
          <th className="border border-gray-400 px-4 py-2">Q</th>
          <th className="border border-gray-400 px-4 py-2">P . Q</th>
          <th className="border border-gray-400 px-4 py-2">P + P . Q</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">T</td>
          <td className="border border-gray-400 px-4 py-2">T</td>
          <td className="border border-gray-400 px-4 py-2">T</td>
          <td className="border border-gray-400 px-4 py-2">T</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">T</td>
          <td className="border border-gray-400 px-4 py-2">F</td>
          <td className="border border-gray-400 px-4 py-2">F</td>
          <td className="border border-gray-400 px-4 py-2">T</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">F</td>
          <td className="border border-gray-400 px-4 py-2">T</td>
          <td className="border border-gray-400 px-4 py-2">F</td>
          <td className="border border-gray-400 px-4 py-2">F</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">F</td>
          <td className="border border-gray-400 px-4 py-2">F</td>
          <td className="border border-gray-400 px-4 py-2">F</td>
          <td className="border border-gray-400 px-4 py-2">F</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
