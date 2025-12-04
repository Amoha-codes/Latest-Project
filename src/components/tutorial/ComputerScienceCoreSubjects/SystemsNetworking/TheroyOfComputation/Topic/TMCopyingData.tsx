import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Turing Machine for Copying Data ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Turing Machine for Copying Data
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Prerequisite */}
    <p className="text-lg leading-relaxed">
      <strong>Prerequisite:</strong> Understanding of Turing Machine concepts.
    </p>

    {/* Problem */}
    <h2 className="text-3xl font-bold mt-8">Problem</h2>
    <p className="leading-relaxed">
      Draw a Turing Machine which can copy data from one segment of the tape to another.
    </p>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        First, convert all 0's and 1's into 0's and 1's while moving right. Convert B (blank) into C and move left.
      </li>
      <li>
        Then, convert all 0's and 1's into 0's and 1's while moving left.
      </li>
      <li>
        If 1 is encountered, convert it into X and move right. Convert all 0's and 1's into 0's and 1's while moving right. Convert C into C and move right. Convert all 0's and 1's into 0's and 1's while moving right. Convert B into 1 and move left. Convert all 0's and 1's into 0's and 1's while moving left. Convert C into C and move left. Convert all 0's and 1's into 0's and 1's while moving left. Convert all X into X and move right. Repeat from Step 2 until the end.
      </li>
      <li>
        If 0 is encountered, convert it into Y and move right. Convert all 0's and 1's into 0's and 1's while moving right. Convert C into C and move right. Convert all 0's and 1's into 0's and 1's while moving right. Convert B into 0 and move left. Convert all 0's and 1's into 0's and 1's while moving left. Convert C into C and move left. Convert all 0's and 1's into 0's and 1's while moving left. Convert all Y into Y and move right. Repeat from Step 2 until the end.
      </li>
      <li>
        Otherwise, if C is found, convert it into C and move left. Convert all X into 1 and all Y into 0 while moving left. Convert B into B, move right, and stop the machine.
      </li>
    </ol>

    {/* Notes */}
    <p className="leading-relaxed">
      Here, <strong>q0</strong> is the initial state, <strong>q1–q11</strong> are the transition states, and <strong>q12</strong> is the final state. 
      Variables <strong>0, 1</strong> represent data inside the machine, while <strong>X, Y, C</strong> are used for copying. 
      Movements <strong>R</strong> and <strong>L</strong> indicate right and left head movements.
    </p>

  </div>
);

export default Home;
