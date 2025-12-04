import React from 'react';

const DifferentialEquations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Differential Equations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>differential equation</strong> is a mathematical equation that relates a function with its derivatives.
      They are widely used in Physics, Chemistry, Biology, Economics, and other fields to predict the behavior of systems.
    </p>

    {/* Definition Section */}
    <h2 className="text-3xl font-bold mt-8">What is a Differential Equation?</h2>
    <p className="leading-relaxed">
      A differential equation involves the derivatives of a dependent variable with respect to an independent variable. 
      Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      d²y/dx² + x = 0
    </p>
    <p className="leading-relaxed">
      Here, <strong>x</strong> is the independent variable, and <strong>y</strong> is the dependent variable.
    </p>

    {/* Types of Differential Equations */}
    <h2 className="text-3xl font-bold mt-8">Types of Differential Equations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ordinary Differential Equations (ODEs)</li>
      <li>Partial Differential Equations (PDEs)</li>
      <li>Linear Differential Equations</li>
      <li>Nonlinear Differential Equations</li>
      <li>Homogeneous Differential Equations</li>
      <li>Nonhomogeneous Differential Equations</li>
    </ul>

    {/* Order and Degree */}
    <h2 className="text-3xl font-bold mt-8">Order and Degree</h2>
    <p className="leading-relaxed">
      <strong>Order:</strong> The highest derivative in the equation.<br/>
      <strong>Degree:</strong> The highest power of the highest-order derivative (if polynomial in derivatives).
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: d³y/dx³ + (d²y/dx²)² − 3 dy/dx + y = 0 → Order = 3, Degree = 1
    </p>

    {/* General and Particular Solutions */}
    <h2 className="text-3xl font-bold mt-8">General and Particular Solutions</h2>
    <p className="leading-relaxed">
      <strong>General Solution:</strong> Contains arbitrary constants and represents a family of solutions.<br/>
      <strong>Particular Solution:</strong> Obtained by substituting specific values for constants using initial/boundary conditions.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      General: y = a cos(x + b) <br/>
      Particular (a=2, b=-1): y = 2 cos(x - 1)
    </p>

    {/* Formation of Differential Equations */}
    <h2 className="text-3xl font-bold mt-8">Formation of a Differential Equation</h2>
    <p className="leading-relaxed">
      Steps to form a differential equation from a general solution:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Differentiate the general solution as many times as there are arbitrary constants.</li>
      <li>Eliminate arbitrary constants using derivatives.</li>
      <li>Express the relation between function and derivatives as a differential equation.</li>
    </ul>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: y = C₁ e²ˣ + C₂ e⁻²ˣ → d²y/dx² − 4y = 0
    </p>

    {/* Homogeneous Differential Equations */}
    <h2 className="text-3xl font-bold mt-8">Homogeneous Differential Equations</h2>
    <p className="leading-relaxed">
      A differential equation is homogeneous if every term is a multiple of the dependent variable and its derivatives or zero.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: (x−y) dy/dx = x + 2y → F(x, y) = (x+2y)/(x−y) is homogeneous.
    </p>

    {/* Variable Separable Differential Equation */}
    <h2 className="text-3xl font-bold mt-8">Variable Separable Differential Equations</h2>
    <p className="leading-relaxed">
      A differential equation is separable if it can be written as g(y) dy = h(x) dx.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: dy/dx = (x+1)/(2−y) → ∫(2−y) dy = ∫(x+1) dx → Solution: 4y−y²−x²−4x = C
    </p>

    {/* Linear Differential Equations */}
    <h2 className="text-3xl font-bold mt-8">Linear Differential Equations</h2>
    <p className="leading-relaxed">
      Form: dy/dx + P(x)y = Q(x). Solve using substitution y = u*v.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: dy/dx − y/x = 1 → Solution: y = x ln(cx)
    </p>

    {/* Modelling Example */}
    <h2 className="text-3xl font-bold mt-8">Writing a Differential Equation (Modelling)</h2>
    <p className="leading-relaxed">
      Savings account with interest r and contribution rate q:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Δx/Δt = r x(t) + q → In the limit Δt→0 → dx/dt = r x + q
    </p>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Solve dy/dx + 2y = e⁻ˣ</li>
      <li>Solve the homogeneous equation dy/dx = (x² + xy)/(y² + xy)</li>
      <li>Solve d²y/dx² − 5 dy/dx + 6y = 0</li>
      <li>Find the differential equation for y = C₁ e²ˣ + C₂ e⁻²ˣ</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Differential equations are essential tools for modeling dynamic systems and analyzing rates of change.
      Understanding their types, order, degree, and solution methods allows solving problems in multiple disciplines.
    </p>

  </div>
);

export default DifferentialEquations;
