import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Decidable and Undecidable Problems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Decidable and Undecidable Problems in Theory of Computation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Oct, 2024</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      In the Theory of Computation, problems are classified into <strong>decidable</strong> and 
      <strong> undecidable</strong> categories based on whether an algorithm can solve them.
      A decidable problem has an algorithm that always provides a correct answer in finite time, 
      whereas an undecidable problem has no such algorithm for all possible inputs.
    </p>

    {/* Decidable Problems */}
    <h2 className="text-3xl font-bold mt-8">What are Decidable Problems?</h2>
    <p className="leading-relaxed">
      A problem is <strong>Decidable</strong> if a corresponding algorithm can always answer correctly.
      For example, finding all prime numbers between 1000 and 2000 can be done algorithmically.
    </p>
    <p className="leading-relaxed">
      In Turing machine terms, a problem is decidable if a Turing machine halts on every input with a yes/no answer. 
      These are also called <strong>Turing Decidable</strong> problems.
    </p>

    {/* Semi-Decidable */}
    <h2 className="text-3xl font-bold mt-8">Semi-Decidable Problems</h2>
    <p className="leading-relaxed">
      Semi-decidable problems are those where a Turing machine halts on accepted inputs but may run forever on rejected inputs.
      These are called <strong>Turing Recognisable</strong> problems.
    </p>

    {/* Examples of Decidable Problems */}
    <h2 className="text-3xl font-bold mt-8">Examples of Decidable Problems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Checking equivalence of two regular languages using set difference.</li>
      <li>Membership of a string in a given context-free language (CFL).</li>
      <li>Emptiness of a CFL by examining production rules.</li>
    </ul>

    {/* Undecidable Problems */}
    <h2 className="text-3xl font-bold mt-8">What are Undecidable Problems?</h2>
    <p className="leading-relaxed">
      Undecidable problems cannot be solved by any algorithm for all inputs. A Turing machine may run forever without giving an answer.
    </p>
    <p className="leading-relaxed">
      Example: Fermat's Theorem, where no algorithm can verify the equation aⁿ + bⁿ = cⁿ for all integers n{">"}2 in finite time.
    </p>

    {/* Examples of Undecidable Problems */}
    <h2 className="text-3xl font-bold mt-8">Examples of Undecidable Problems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Determining whether a CFG generates all possible strings.</li>
      <li>Checking equality of two CFGs.</li>
      <li>Ambiguity of a CFG.</li>
      <li>Converting an ambiguous CFG to a non-ambiguous CFG.</li>
      <li>Determining if a CFL is regular.</li>
      <li>The Halting Problem: deciding if a program halts on an input.</li>
      <li>Membership, finiteness, or emptiness of Turing Machine languages.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Decidable and Undecidable Problems</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">Aspect</th>
          <th className="border border-gray-400 px-4 py-2">Decidable Problems</th>
          <th className="border border-gray-400 px-4 py-2">Undecidable Problems</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Definition</td>
          <td className="border border-gray-400 px-4 py-2">Solvable by an algorithm in finite time.</td>
          <td className="border border-gray-400 px-4 py-2">No algorithm can solve for all cases.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Solvability</td>
          <td className="border border-gray-400 px-4 py-2">Always solvable step-by-step.</td>
          <td className="border border-gray-400 px-4 py-2">Cannot be solved for all inputs.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Algorithm</td>
          <td className="border border-gray-400 px-4 py-2">Exists for every input.</td>
          <td className="border border-gray-400 px-4 py-2">No universal algorithm exists.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Halting</td>
          <td className="border border-gray-400 px-4 py-2">Always halts with an answer.</td>
          <td className="border border-gray-400 px-4 py-2">May never halt for some inputs.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Examples</td>
          <td className="border border-gray-400 px-4 py-2">Checking if a string is in a regular language.</td>
          <td className="border border-gray-400 px-4 py-2">Halting Problem, CFG equality, etc.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Decision Procedure</td>
          <td className="border border-gray-400 px-4 py-2">Clear method exists.</td>
          <td className="border border-gray-400 px-4 py-2">No guaranteed method.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Complexity</td>
          <td className="border border-gray-400 px-4 py-2">May be complex but computable.</td>
          <td className="border border-gray-400 px-4 py-2">Too complex; no universal solution.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Applications</td>
          <td className="border border-gray-400 px-4 py-2">Useful for algorithms, compiling, searching.</td>
          <td className="border border-gray-400 px-4 py-2">Shows limits of computation.</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Decidable problems have predictable solutions using algorithms, while undecidable problems reveal the limits of computation.
      Understanding this distinction helps identify which problems are solvable and which are beyond algorithmic reach.
    </p>

  </div>
);

export default Home;
