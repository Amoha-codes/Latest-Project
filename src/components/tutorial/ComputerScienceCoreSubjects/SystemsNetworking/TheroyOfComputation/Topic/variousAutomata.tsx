import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Applications of Automata ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Applications of Various Automata
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Automata are used to design and analyze the behavior of computational systems. Each type 
      of automaton has specific capabilities and limitations, making it suitable for various 
      practical applications. Automata theory is fundamental to programming languages, compilers, 
      and modern technologies like AI, machine learning, and quantum computing.
    </p>

    {/* Finite Automata */}
    <h2 className="text-3xl font-bold mt-8">Finite Automata (FA)</h2>
    <p className="leading-relaxed">
      Finite Automata are used in:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Lexical Analysis in Compilers: Identifying keywords, operators, and tokens.</li>
      <li>Pattern Recognition with Regular Expressions: Matching patterns in text files.</li>
      <li>Digital Circuit Design: Designing sequential circuits like Mealy and Moore machines.</li>
      <li>Text Editors: Finding and replacing patterns.</li>
      <li>Spell Checkers: Recognizing valid word forms.</li>
      <li>Decision Making and Learning: Automating processes.</li>
    </ul>
    <p className="leading-relaxed">
      Examples:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      - Traffic light controllers switching between red, yellow, green.<br />
      - TCP connection states (SYN, ACK, FIN) modeled as a finite state machine.
    </p>

    {/* Pushdown Automata */}
    <h2 className="text-3xl font-bold mt-8">Pushdown Automata (PDA)</h2>
    <p className="leading-relaxed">
      Pushdown Automata are used in:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Syntax Analysis in Compilers: Parsing nested structures using a stack.</li>
      <li>Stack-Based Applications: Evaluating arithmetic expressions.</li>
      <li>Tower of Hanoi Problem: Recursive and stack-based solutions.</li>
      <li>Network Protocols: Validating structured communication.</li>
      <li>Natural Language Processing: Parsing sentences and generating syntax trees.</li>
      <li>Cryptography: Designing encryption/decryption algorithms.</li>
      <li>Automatic Theorem Proving: Verifying correctness of software models.</li>
    </ul>
    <p className="leading-relaxed">
      Examples:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      - Matching HTML tags with a stack to ensure correct opening and closing.<br />
      - Ensuring balanced parentheses in expressions like (a+b)*(c-d).
    </p>

    {/* Linear Bounded Automata */}
    <h2 className="text-3xl font-bold mt-8">Linear Bounded Automata (LBA)</h2>
    <p className="leading-relaxed">
      LBAs are used in:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Genetic Programming: Modeling evolutionary algorithms.</li>
      <li>Semantic Analysis in Compilers: Analyzing code semantics.</li>
      <li>Context-Sensitive Language Recognition: Recognizing languages beyond context-free.</li>
      <li>Game Theory: Modeling agent interactions and strategies.</li>
    </ul>
    <p className="leading-relaxed">
      Examples:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      - Embedded system firmware validation with limited memory.<br />
      - Recognizing languages of the form {`{aⁿbⁿcⁿ | n ≥ 1}`}, which PDA cannot handle.
    </p>

    {/* Turing Machine */}
    <h2 className="text-3xl font-bold mt-8">Turing Machine (TM)</h2>
    <p className="leading-relaxed">
      Turing Machines are the most powerful automata and have applications in:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Solving Recursively Enumerable Problems.</li>
      <li>Artificial Intelligence: Decision-making and machine learning.</li>
      <li>Robotics: Modeling robot actions and control systems.</li>
      <li>Neural Networks: Modeling complex architectures.</li>
      <li>Complexity Theory: Analyzing computational complexity.</li>
      <li>Computational Biology: Modeling biological systems.</li>
      <li>Quantum Computing: Exploring classical-quantum relationships.</li>
      <li>Digital Circuit Design: Verifying complex digital circuits.</li>
    </ul>
    <p className="leading-relaxed">
      Examples:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      - Designing an algorithm to check if a number is a palindrome.<br />
      - Proving the Halting Problem is undecidable.
    </p>

  </div>
);

export default Home;
