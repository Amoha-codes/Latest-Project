import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Turing Machine for Multiplication ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Turing Machine for Multiplication
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Prerequisite */}
    <p className="text-lg leading-relaxed">
      <strong>Prerequisite:</strong> Understanding of Turing Machine concepts.
    </p>

    {/* Problem */}
    <h2 className="text-3xl font-bold mt-8">Problem: Multiply Two Numbers</h2>
    <p className="leading-relaxed">
      Draw a Turing Machine which multiplies two numbers represented in unary format. The machine operates on numbers separated by a symbol "C". Steps:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Step 1: Ignore 0's and C while moving right. If B (blank) is found, convert it into C and move left.</li>
      <li>Step 2: Ignore 0's while moving left. Convert C into C and move right.</li>
      <li>Step 3: Convert all X into X while moving right. If 0 is found, convert it into X and move left. If C is found, convert it into B and move right to stop the machine.</li>
      <li>Step 4: If X found, convert it into X and move left. Then convert C into C and move left. Convert Y into Y and move left.</li>
      <li>Step 5: If B found, convert it into B and move right. If Y found, convert it into 0 and move right. If C found, convert it into C and move right, then go to Step 3 and repeat. Otherwise, if 0 is found after Step 4, convert it into Y and move right. Then process Y, C, 0, X, and B appropriately while moving left or right according to the multiplication procedure.</li>
      <li>Step 6: Repeat Step 5 until multiplication is complete.</li>
    </ol>

    <p className="leading-relaxed">
      Here, <strong>q0</strong> is the initial state, <strong>q1–q11</strong> are transition states, and <strong>q12</strong> is the final state. Variables X, Y, 0, C are used for multiplication, and R, L indicate right and left moves.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      This Turing Machine demonstrates multiplication using unary representation by systematically marking, moving, and updating tape symbols. The machine halts after completing the multiplication, leaving the result on the tape.
    </p>

  </div>
);

export default Home;
