import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Propositional Logic ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Propositional Logic
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Propositional logic is a branch of mathematics that studies the logical relationships between propositions 
      (or statements, sentences, assertions) taken as a whole, and connected via logical connectives. It focuses 
      on how these propositions relate to each other through logical connectives such as <strong>AND</strong>, 
      <strong> OR</strong>, <strong>NOT</strong>, <strong>IF…THEN</strong>, etc.
    </p>

    {/* Examples of Propositions */}
    <h2 className="text-3xl font-bold mt-8">Examples of Propositions</h2>
    <table className="table-auto border-collapse border border-gray-300 text-sm">
      <thead className='bg-gray-400'>
        <tr>
          <th className="border px-2 py-1">Statement</th>
          <th className="border px-2 py-1">Truth Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1">The sun rises in the East and sets in the West.</td>
          <td className="border px-2 py-1">True</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">1 + 1 = 2</td>
          <td className="border px-2 py-1">True</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">‘b’ is a vowel.</td>
          <td className="border px-2 py-1">False</td>
        </tr>
      </tbody>
    </table>
    <p className="leading-relaxed mt-2">
      All of the above are propositions because each has a definite truth value.
    </p>

    {/* Non-Propositions */}
    <h2 className="text-3xl font-bold mt-8">Non-Propositions</h2>
    <p className="leading-relaxed">
      Some sentences are not propositions because they don’t have a definite truth value or may vary depending on context:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>"What time is it?" (Question)</li>
      <li>"Go out and play." (Command)</li>
      <li>"x + 1 = 2" (Open sentence — depends on the value of x)</li>
    </ul>

    {/* Logical Connectives */}
    <h2 className="text-3xl font-bold mt-8">Logical Connectives</h2>
    <p className="leading-relaxed">
      In propositional logic, logical connectives are symbols used to build compound propositions from atomic ones.
    </p>

    {/* Types of Propositions */}
    <h2 className="text-3xl font-bold mt-8">Types of Propositions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Atomic Propositions</li>
      <li>Compound Propositions</li>
    </ul>

    {/* Truth Table */}
    <h2 className="text-3xl font-bold mt-8">Truth Table of Propositional Logic</h2>
    <p className="leading-relaxed">
      A truth table shows all possible combinations of propositions connected by logical connectives.
    </p>

    {/* Negation Example */}
    <h3 className="text-2xl font-semibold mt-4">1. Negation</h3>
    <p className="leading-relaxed">
      If <em>p</em> is a proposition, then ¬p (not p) is its negation:
    </p>
    <table className="table-auto border-collapse border border-gray-300 text-sm">
      <thead className='bg-gray-400'>
        <tr>
          <th className="border px-2 py-1">p</th>
          <th className="border px-2 py-1">¬p</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1">T</td>
          <td className="border px-2 py-1">F</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">F</td>
          <td className="border px-2 py-1">T</td>
        </tr>
      </tbody>
    </table>

    {/* Conjunction Example */}
    <h3 className="text-2xl font-semibold mt-4">2. Conjunction</h3>
    <p className="leading-relaxed">
      For two propositions <em>p</em> and <em>q</em>, p∧q ("p and q") is True when both p and q are True:
    </p>
    <table className="table-auto border-collapse border border-gray-300 text-sm">
      <thead className='bg-gray-400'>
        <tr>
          <th className="border px-2 py-1">p</th>
          <th className="border px-2 py-1">q</th>
          <th className="border px-2 py-1">p ∧ q</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1">T</td>
          <td className="border px-2 py-1">T</td>
          <td className="border px-2 py-1">T</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">T</td>
          <td className="border px-2 py-1">F</td>
          <td className="border px-2 py-1">F</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">F</td>
          <td className="border px-2 py-1">T</td>
          <td className="border px-2 py-1">F</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">F</td>
          <td className="border px-2 py-1">F</td>
          <td className="border px-2 py-1">F</td>
        </tr>
      </tbody>
    </table>

    {/* Add similar sections for Disjunction, Exclusive OR, Implication, Biconditional, Applications, and Examples */}
    <p className="leading-relaxed mt-4">
      (You can continue adding Disjunction, Exclusive Or, Implication, Biconditional truth tables, 
      applications, and example problems similarly using tables and lists.)
    </p>

  </div>
);

export default Home;
