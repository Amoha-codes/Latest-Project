import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= System of Linear Equations ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      System of Linear Equations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A system of linear equations is a set of two or more linear equations involving the same variables.
      Each equation represents a straight line or plane, and the solution is the set of values that satisfy
      all equations simultaneously.
    </p>

    {/* Example Section */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider a simple system of linear equations in two variables:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      x + y = 5 <br />
      2x - y = 1
    </p>

    {/* General Form */}
    <h2 className="text-3xl font-bold mt-8">General Form of System of Linear Equations</h2>
    <p className="leading-relaxed">
      A system of n linear equations in n variables x₁, x₂, x₃,…, xₙ can be written as:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      a₁₁x₁ + a₁₂x₂ + … + a₁ₙxₙ = b₁ <br />
      a₂₁x₁ + a₂₂x₂ + … + a₂ₙxₙ = b₂ <br />
      ... <br />
      aₙ₁x₁ + aₙ₂x₂ + … + aₙₙxₙ = bₙ
    </p>

    <p className="leading-relaxed">
      The coefficients aᵢⱼ are constants, and b₁, b₂,…, bₙ are constants on the right side.
    </p>

    {/* Matrix Representation */}
    <h2 className="text-3xl font-bold mt-8">Matrix Representation: AX = B</h2>

    <p className="leading-relaxed">
      The system can be represented in matrix form:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A = [aᵢⱼ], &nbsp; X = [x₁ x₂ ... xₙ]ᵀ, &nbsp; B = [b₁ b₂ ... bₙ]ᵀ <br /><br />
      AX = B
    </p>

    <p className="leading-relaxed">
      Solving the system means finding values of X that satisfy the matrix equation.
    </p>

    {/* Types of Systems */}
    <h2 className="text-3xl font-bold mt-8">Types of System of Linear Equations</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Homogeneous System (AX = 0)</strong></li>
      <li><strong>Non-Homogeneous System (AX = B)</strong></li>
    </ul>

    {/* Homogeneous system */}
    <h3 className="text-2xl font-semibold mt-4">Homogeneous System (AX = 0)</h3>
    <p className="leading-relaxed">
      Always has at least one solution (X = 0), called the trivial solution.
      If Rank(A) = number of unknowns → Unique solution.
      If Rank(A) &lt; number of unknowns → Infinite solutions.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: <br />
      x + y - z = 0 <br />
      x + y + z = 0 <br />
      x - y + 2z = 0
    </p>

    {/* Non homogeneous */}
    <h3 className="text-2xl font-semibold mt-4">Non-Homogeneous System (AX = B)</h3>
    <p className="leading-relaxed">
      If Rank[A:B] ≠ Rank(A) → No Solution (Inconsistent). <br />
      If Rank[A:B] = Rank(A) = unknowns → Unique Solution. <br />
      If Rank[A:B] = Rank(A) ≠ unknowns → Infinite Solutions.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: <br />
      x + y - 2z = 6 <br />
      x - 6y + z = 9 <br />
      2x - y + 2z = 2
    </p>

    {/* Geometrical Interpretation */}
    <h2 className="text-3xl font-bold mt-8">Geometric Interpretation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>One solution:</strong> Lines intersect at one point</li>
      <li><strong>No solution:</strong> Lines are parallel</li>
      <li><strong>Infinite solutions:</strong> Lines are coincident</li>
    </ul>

    {/* Solving methods */}
    <h2 className="text-3xl font-bold mt-8">Methods to Solve System of Linear Equations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cramer’s Rule (using determinants)</li>
      <li>Inverse Matrix Method</li>
      <li>Gauss Elimination Method</li>
      <li>LU Decomposition Method</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Structural analysis of mechanical and civil systems</li>
      <li>Electrical circuits using Kirchhoff’s laws</li>
      <li>Control systems and stability design</li>
      <li>Optimization and linear programming</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      A system of linear equations can have a unique solution, no solution, or infinitely many solutions.
      Matrix techniques and computational methods make solving such systems efficient and essential
      in engineering and scientific applications.
    </p>

  </div>
);

export default Home;
