import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Turing Machine for Subtraction ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Turing Machine for Subtraction | Set 1
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Prerequisite */}
    <p className="text-lg leading-relaxed">
      <strong>Prerequisite:</strong> Understanding of Turing Machine concepts.
    </p>

    {/* Problem 1 */}
    <h2 className="text-3xl font-bold mt-8">Problem 1: Subtract Two Numbers</h2>
    <p className="leading-relaxed">
      Draw a Turing Machine which subtracts two numbers. The machine operates on unary numbers separated by a symbol "C". Steps:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Step 1: If 0 found, convert 0 into X and go right. Convert all 0's into 0's while moving right.</li>
      <li>Step 2: Convert C into C and go right. Convert all X into X while moving right.</li>
      <li>Step 3: Convert 0 into X and move left. Convert all X into X while moving left.</li>
      <li>Step 4: Convert C into C and move left. Convert all 0's into 0's and all X into X while moving left. Then move right and repeat the process.</li>
      <li>Step 5: If C found, convert C into C and go right. Convert all X into blank (B) and go right. Convert 0 into 0 and move left. Stop the machine.</li>
    </ol>
    <p className="leading-relaxed">
      Here, <strong>q0</strong> is the initial state, <strong>q1–q5</strong> are transition states, and <strong>q6</strong> is the final state. Variables X, 0, C are used for subtraction, and R, L indicate right and left moves.
    </p>

    {/* Problem 2 */}
    <h2 className="text-3xl font-bold mt-8">Problem 2: Subtract Two Numbers m and n (m &gt; n)</h2>
    <p className="leading-relaxed">
      Draw a Turing Machine to subtract two numbers where m is greater than n. Steps:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Step 1: If 0 found, convert all 0's into 0's while moving right. Convert C into C and move right.</li>
      <li>Step 2: If X found, convert all X into X and move right. If 0 found, convert 0 into X and move left to next step. Otherwise, go to step 5.</li>
      <li>Step 3: Convert all X into X while moving left. Convert C into C and move left.</li>
      <li>Step 4: Convert all 0's into 0's while moving left. Convert blank (B) into B and move right. Convert 0 into B and move right. Repeat the process.</li>
      <li>Step 5: If B found, convert B into B and move left. Convert all X into B while moving left. Convert C into B and move left. Stop the machine.</li>
    </ol>
    <p className="leading-relaxed">
      Here, <strong>q0</strong> is the initial state, <strong>q1–q5</strong> are transition states, and <strong>q6</strong> is the final state. Variables B, X, 0, C are used for subtraction (m &gt; n), and R, L indicate right and left moves.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      These Turing Machines demonstrate subtraction using unary representation by systematically marking, moving, and updating tape symbols. The machine halts after completing the subtraction, leaving the result on the tape.
    </p>

  </div>
);

export default Home;
