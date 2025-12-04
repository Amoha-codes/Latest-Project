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
      Each equation represents a straight line or plane, and the solution is the set of values that satisfy all equations simultaneously.
    </p>

    {/* General Form */}
    <h2 className="text-3xl font-bold mt-8">General Form of a System of Linear Equations</h2>
    <p className="leading-relaxed">
      A system of n linear equations in n variables x₁, x₂, ..., xₙ can be written as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁<br/>
      a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂<br/>
      ...<br/>
      aₙ₁x₁ + aₙ₂x₂ + ... + aₙₙxₙ = bₙ
    </p>
    <p className="leading-relaxed">
      Here, aᵢⱼ are coefficients and bᵢ are constants. The matrix form of this system is AX = B, where:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A is the coefficient matrix</li>
      <li>X is the column vector of variables</li>
      <li>B is the column vector of constants</li>
    </ul>

    {/* Types of Systems */}
    <h2 className="text-3xl font-bold mt-8">Types of System of Linear Equations</h2>
    <p className="leading-relaxed">
      1) Homogeneous System (AX = 0): Always has the trivial solution X = 0.  
      - Unique solution if rank(A) = number of unknowns  
      - Infinite solutions if rank(A) &lt; number of unknowns
    </p>
    <p className="leading-relaxed">
      Example: 
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      x + y - z = 0<br/>
      x + y + z = 0<br/>
      x - y + 2z = 0
    </p>

    <p className="leading-relaxed">
      2) Non-Homogeneous System (AX = B):  
      - No solution if rank([A:B]) ≠ rank(A)  
      - Unique solution if rank([A:B]) = rank(A) = number of unknowns  
      - Infinite solutions if rank([A:B]) = rank(A) &lt; number of unknowns
    </p>
    <p className="leading-relaxed">
      Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      x + y - 2z = 6<br/>
      x - 6y + z = 9<br/>
      2x - y + 2z = 2
    </p>

    {/* Geometric Interpretation */}
    <h2 className="text-3xl font-bold mt-8">Geometric Interpretation</h2>
    <p className="leading-relaxed">
      For two variables, a system represents lines on the xy-plane. Solutions can be:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Lines intersect at one point → unique solution</li>
      <li>Lines are parallel → no solution</li>
      <li>Lines coincide → infinitely many solutions</li>
    </ul>

    {/* Solution Methods */}
    <h2 className="text-3xl font-bold mt-8">Methods to Solve Systems</h2>
    <p className="leading-relaxed">
      If |A| ≠ 0, common methods include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cramer's Rule – uses determinants to find variables</li>
      <li>Inverse Method – multiply B by A⁻¹ to find X</li>
      <li>Gauss Elimination – transforms the system into upper triangular form</li>
      <li>LU Decomposition – factorizes A into lower and upper triangular matrices</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Structural Analysis – forces and displacements in frameworks</li>
      <li>Electrical Circuit Analysis – currents and voltages using Kirchhoff's laws</li>
      <li>Control Systems – modeling and designing controllers</li>
      <li>Optimization Problems – linear programming for production and resource allocation</li>
    </ul>

  </div>
);

export default Home;
