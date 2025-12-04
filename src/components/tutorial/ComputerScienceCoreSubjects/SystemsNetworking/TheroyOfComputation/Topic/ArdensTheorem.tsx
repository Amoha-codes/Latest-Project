import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* =================== Arden's Theorem =================== */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Arden's Theorem in Theory of Computation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      A Regular Expression (RE) describes patterns of strings using union,
      concatenation, and Kleene star. A Deterministic Finite Automaton (DFA)
      checks if an input string matches the pattern by moving through states.
      There are two major methods to convert a Regular Expression (RE) into a DFA:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>State/Loop Elimination</li>
      <li>Arden’s Theorem</li>
    </ul>

    {/* =================== State Elimination =================== */}
    <h2 className="text-3xl font-bold mt-8">State/Loop Elimination</h2>
    <p className="leading-relaxed">
      This method removes states that are not essential except the start and final states.
      When a state is eliminated, the regular expressions on adjacent transitions are updated.
      This simplifies the automaton and helps generate an equivalent RE.
    </p>

    {/* =================== Arden's Theorem =================== */}
    <h2 className="text-3xl font-bold mt-10">Arden’s Theorem</h2>
    <p className="leading-relaxed">
      <strong>Theorem:</strong>  
      Let P, Q, and R be regular expressions over Σ.  
      If <strong>P does not contain ε</strong>, the equation:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      R = Q + RP
    </p>

    <p className="leading-relaxed">
      has a unique solution given by:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner font-semibold">
      R = QP*
    </p>

    <h3 className="text-2xl font-semibold mt-6">Explanation of Terms</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Q:</strong> Part of the expression independent of R.</li>
      <li><strong>P:</strong> Part associated with R.</li>
      <li><strong>R:</strong> The unknown regular expression being solved.</li>
      <li>Kleene Star (*) allows repetition of P any number of times.</li>
    </ul>

    <p className="leading-relaxed mt-4">
      Arden’s theorem directly solves equations in the form R = Q + RP by replacing R with QP*.
    </p>

    {/* =================== Proof =================== */}
    <h2 className="text-3xl font-bold mt-10">Proof of Arden’s Theorem</h2>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      R = Q + RP
    </p>

    <p>Substitute repeatedly:</p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      R = Q + (Q + RP)P <br />
      = Q + QP + RPP <br />
      = Q + QP + QP² + QP³ + ...  
    </p>

    <p className="leading-relaxed">
      Factoring:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner font-semibold">
      R = Q (ε + P + P² + P³ + ...) = QP*
    </p>

    <p className="leading-relaxed">
      Thus, <strong>R = QP*</strong> is the unique solution.
    </p>

    <p className="mt-4 leading-relaxed italic">
      Note: Arden's Theorem is used to convert finite automata into regular expressions.
    </p>

    {/* =================== Example =================== */}
    <h2 className="text-3xl font-bold mt-10">Example of Arden’s Theorem</h2>

    <p className="leading-relaxed">
      Given regular expression equations for states q0, q1, q2:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      q0 = ε + q1·1 + q2(0 + 1)  &nbsp;&nbsp; (A) <br />
      q1 = q0·0 + q1·2           &nbsp;&nbsp; (B) <br />
      q2 = q0·1 + q1·0           &nbsp;&nbsp; (C)
    </p>

    <h3 className="text-2xl font-semibold mt-6">Step 1: Substitute q2 in eq. (A)</h3>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      q0 = ε + q1·1 + (q0·1 + q1·0)(0 + 1)
    </p>

    <p className="leading-relaxed">
      Rewrite to the form R = Q + RP:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      R = q0 <br />
      Q = ε + q1(1 + 00 + 01) <br />
      P = 1(0 + 1)
    </p>

    <h3 className="text-2xl font-semibold mt-6">Step 2: Solve for q0</h3>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner font-semibold">
      q0 = [ε + q1(1 + 00 + 01)] · (1(0 + 1))*
    </p>

    <h3 className="text-2xl font-semibold mt-6">Step 3: Substitute q0 into eq. (B)</h3>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      q1 = 1(0 + 1)*0 + q1[2 + (1 + 00 + 01)(1(0 + 1))*0]
    </p>

    <h3 className="text-2xl font-semibold mt-6">Step 4: Solve for q1 using Arden's theorem</h3>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner font-semibold">
      q1 = 1(0 + 1)*0 · [2 + (1 + 00 + 01)(1(0 + 1))*0]*
    </p>

    <h3 className="text-2xl font-semibold mt-6">Step 5: Substitute q1 into q0</h3>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner font-semibold">
      q0 = [(1(0 + 1)*)0]* (1 + 00 + 01)(1(0 + 1))*
    </p>

    <h2 className="text-3xl font-bold mt-10">Final Regular Expression</h2>

    <p className="bg-gray-400 p-4 rounded-lg text-sm shadow-inner">
      Final RE = q0 + q1 =  
      <br /><br />
      [ε + (1(0 + 1)*0)[2 + (1 + 00 + 01)(1(0 + 1))*0]*]  
      + (1 + 00 + 01)(1(0 + 1))*
      + (1(0 + 1)*0[2 + (1 + 00 + 01)(1(0 + 1))*0]*)*
    </p>

    {/* =================== Features =================== */}
    <h2 className="text-3xl font-bold mt-10">Features of Arden’s Theorem</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Solves regular expression equations systematically.</li>
      <li>Always guarantees a unique solution.</li>
      <li>Efficient and algorithmic method.</li>
      <li>Applies strictly to regular languages.</li>
      <li>Strong connection to formal language theory.</li>
      <li>Used heavily in compiler design and pattern matching.</li>
    </ul>

    {/* =================== Applications =================== */}
    <h2 className="text-3xl font-bold mt-10">Applications of Arden’s Theorem</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Deriving regular expressions from automata.</li>
      <li>Converting DFA/NFA to equivalent regular expressions.</li>
      <li>Solving equations involving recursive regular expressions.</li>
    </ul>

  </div>
);

export default Home;
