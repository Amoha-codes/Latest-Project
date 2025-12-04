import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Turing Machine for Addition ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Turing Machine for Addition
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Prerequisite */}
    <p className="text-lg leading-relaxed">
      <strong>Prerequisite:</strong> Understanding of Turing Machine concepts.
    </p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Numbers can be represented in unary format for addition using a Turing Machine. In unary format, 
      a number is represented as a sequence of identical symbols, typically 0's or 1's. For example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>5 = 0 0 0 0 0</li>
      <li>3 = 0 0 0</li>
    </ul>

    <p className="text-lg leading-relaxed">
      Using a Turing Machine, we can perform addition by placing two unary numbers on the tape separated 
      by a special symbol, typically "c", and using states to control the addition process.
    </p>

    {/* Example Inputs */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>
    <p className="leading-relaxed">
      Example 1: 2 + 3
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Input: 0 0 c 0 0 0<br/>
      Output: 0 0 0 0 0
    </p>

    <p className="leading-relaxed">
      Example 2: 4 + 3
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Input: 0 0 0 0 c 0 0 0<br/>
      Output: 0 0 0 0 0 0 0
    </p>

    {/* Approach */}
    <h2 className="text-3xl font-bold mt-8">Approach Used</h2>
    <p className="leading-relaxed">
      The Turing Machine processes the tape as follows:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Convert the first 0 in the first number into X.</li>
      <li>Traverse right until the first blank symbol is found, and convert it into 0.</li>
      <li>Move left, ignoring all 0's and the separator "c", to return next to the first X.</li>
      <li>Repeat this process until encountering "c" instead of X on return.</li>
      <li>Finally, convert the "c" into a blank symbol to complete the addition.</li>
    </ul>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Step-by-Step Procedure</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Step 1: Convert 0 into X. If symbol is "c", convert it to blank (B), move right, and go to step 6.</li>
      <li>Step 2: Ignore 0's and move right. Ignore "c", move right, then go to step 3.</li>
      <li>Step 3: Ignore 0's and move right. Convert a blank (B) into 0, move left, then go to step 4.</li>
      <li>Step 4: Ignore 0's and move left. Ignore "c", move left, then go to step 3.</li>
      <li>Step 5: Ignore 0's and move left. Ignore X, move right, then go to step 1.</li>
      <li>Step 6: End – addition is completed, tape contains the sum.</li>
    </ol>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      This Turing Machine efficiently adds two numbers in unary format using a finite number of states, 
      a tape with a separator symbol, and systematic movement and modification of tape symbols.
    </p>

  </div>
);

export default Home;
