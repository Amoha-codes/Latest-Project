import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Main Heading ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mathematics for Computer Science
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Mathematics is the language of logic, structure, and precision, and it plays a fundamental role in shaping computer science. From the binary language of computers to advanced concepts like machine learning and cryptography, math provides the foundation for nearly every area of computing.
    </p>

    <p className="text-lg leading-relaxed">
      At its core, a computer is a machine that operates in two states: ON and OFF. Mathematically, we represent these states as 1 and 0, forming the basis of binary code, the language computers understand. This simple concept has evolved into complex systems we see today, including algorithms, artificial intelligence, graphics, networks, and more.
    </p>

  

    {/* Why Learn Section */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Mathematics for Computer Science</h2>
    <p className="leading-relaxed">
      Mathematics provides you with the tools to think logically, solve problems efficiently, and build systems that are secure, scalable, and intelligent. It’s not just about numbers; it’s about structured thinking, which is at the core of computer science.
    </p>

    <p className="leading-relaxed">
      Learning math enables you to:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Help in Solving Problems:</strong> Understand how to approach problems with logic and precision.</li>
      <li><strong>Write Efficient Code:</strong> Analyze and improve program performance using mathematical reasoning.</li>
      <li><strong>Master Core Concepts:</strong> Grasp foundational topics like data structures, cryptography, AI, and graphics.</li>
      <li><strong>Build Secure Systems:</strong> Use number theory and modular arithmetic for encryption and data protection.</li>
      <li><strong>Succeed in Advanced Fields:</strong> Tackle machine learning, simulations, and theoretical computer science with confidence.</li>
    </ul>

    <p className="leading-relaxed">
      Learning mathematics gives you the mindset and methods needed to excel in every area of computing.
    </p>

    {/* ================= Number Theory ================= */}
    <h2 className="text-3xl font-bold mt-8">Number Theory</h2>
    <p className="leading-relaxed">
      Focuses on numeric systems, conversions, and arithmetic operations used in computing. Includes binary math, modular arithmetic, GCD, and number-theoretic algorithms essential for cryptography.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Decimal, Binary, Octal, Hexadecimal systems</li>
      <li>Conversion between number systems</li>
      <li>Arithmetic Operations</li>
      <li>Modular Arithmetic</li>
      <li>Greatest Common Divisor (GCD)</li>
      <li>Congruency</li>
      <li>Fermat's Little Theorem</li>
      <li>Euclid's Division Algorithm</li>
    </ul>

    {/* ================= Combinatorics ================= */}
    <h2 className="text-3xl font-bold mt-8">Combinatorics</h2>
    <p className="leading-relaxed">
      Deals with counting, arrangement, and discrete structures. Covers permutations, combinations, pigeonhole principle, inclusion-exclusion, and recurrence relations used in algorithm design.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Basic Counting Rules</li>
      <li>Tree Diagram</li>
      <li>Permutation and Combination</li>
      <li>Pigeonhole Principle</li>
      <li>Inclusion-Exclusion Principle</li>
      <li>Recurrence Relations</li>
      <li>Algorithms and Complexity</li>
    </ul>

    {/* ================= Discrete Mathematics ================= */}
    <h2 className="text-3xl font-bold mt-8">Discrete Mathematics</h2>
    <p className="leading-relaxed">
      Studies logic, sets, functions, and relations fundamental to data structures, algorithms, and digital circuits. Induction is key to proving algorithm correctness.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Set Theory</li>
      <li>Propositional Logic</li>
      <li>Functions in Mathematics</li>
      <li>Relations and Their Properties</li>
      <li>Principle of Mathematical Induction</li>
      <li>Boolean Algebra</li>
    </ul>

    {/* ================= Linear Algebra ================= */}
    <h2 className="text-3xl font-bold mt-8">Linear Algebra</h2>
    <p className="leading-relaxed">
      Explores vectors, matrices, and transformations used in graphics, machine learning, and data science. Includes eigenvalues, systems of equations, and PCA.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Vector and Vector Spaces</li>
      <li>Matrices</li>
      <li>Matrix Diagonalization</li>
      <li>Eigenvalues and Eigenvectors</li>
      <li>System of Linear Equations</li>
      <li>Gaussian Elimination to Solve Linear Equations</li>
      <li>Principal Component Analysis</li>
    </ul>

    {/* ================= Calculus ================= */}
    <h2 className="text-3xl font-bold mt-8">Calculus</h2>
    <p className="leading-relaxed">
      Used in optimization and modeling of continuous systems. Covers limits, derivatives, integrals, and differential equations relevant in algorithm analysis and simulations.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limits, Continuity & Differentiation</li>
      <li>Integration</li>
      <li>Partial Derivative</li>
      <li>Differential Equation</li>
    </ul>

    {/* ================= Graph Theory ================= */}
    <h2 className="text-3xl font-bold mt-8">Graph Theory</h2>
    <p className="leading-relaxed">
      Mathematical study of graphs, their types, and properties. Topics include paths, circuits, planarity, and coloring key for modeling networks and relationships.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Graph Theory Basics</li>
      <li>Types of Graphs with Examples</li>
      <li>Graph Representations</li>
      <li>Walks, Trails, Paths, Cycles, and Circuits</li>
      <li>Planar Graphs and Graph Coloring</li>
      <li>Handshaking Lemma</li>
    </ul>

    {/* ================= Probability and Statistics ================= */}
    <h2 className="text-3xl font-bold mt-8">Probability and Statistics</h2>
    <p className="leading-relaxed">
      Provides tools for analyzing uncertainty and data. Covers probability theory, distributions, Bayes’ theorem, and statistical inference for machine learning and data modeling.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Probability Theory</li>
      <li>Bayes' Theorem</li>
      <li>Probability Distribution</li>
      <li>Descriptive Statistics</li>
      <li>Sampling</li>
      <li>Hypothesis Testing</li>
      <li>Regression Analysis</li>
    </ul>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications of Mathematics in Computer Science</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
  <li><strong>Algorithms and Data Structures:</strong> design and analyze efficient algorithms using logic, combinatorics, and complexity theory.</li>
  <li><strong>Computer Graphics:</strong> linear algebra and geometry help with 2D/3D rendering, animations, and transformations.</li>
  <li><strong>Machine Learning and AI:</strong> statistics, probability, and calculus power model training, optimization, and predictions.</li>
  <li><strong>Cryptography:</strong> number theory and modular arithmetic secure data through encryption and hashing.</li>
  <li><strong>Databases and Information Retrieval: </strong>set theory and logic manage queries, relationships, and indexing efficiently.</li>
  <li><strong>Networks and Communication:</strong> graph theory models connections, routing, and data flow in computer networks.</li>
  <li><strong>Compiler Design and Automata:</strong> formal languages and automata theory enable syntax analysis and language processing.</li>
</ol>


  </div>
);

export default Home;
