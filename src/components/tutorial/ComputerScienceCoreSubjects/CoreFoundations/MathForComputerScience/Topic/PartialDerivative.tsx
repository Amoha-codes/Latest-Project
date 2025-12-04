import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Partial Derivatives Section ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Partial Derivatives in Engineering Mathematics
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      In multivariable calculus, a partial derivative measures the rate of change of a function 
      with respect to one of its variables, while all other variables are held constant. 
      They are essential in physics, engineering, economics, statistics, and machine learning.
    </p>

    <h2 className="text-3xl font-bold mt-8">Notation and Calculation</h2>
    <p className="leading-relaxed">
      The most common notations are <strong>∂f/∂x</strong> or <strong>fx</strong> for the partial derivative 
      with respect to x. To calculate:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Identify the variable to differentiate.</li>
      <li>Treat other variables as constants.</li>
      <li>Differentiate using standard rules.</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="leading-relaxed">
      For f(x,y) = x²y + 3xy²:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∂f/∂x = 2xy + 3y²</li>
      <li>∂f/∂y = x² + 6xy</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Higher-Order Partial Derivatives</h2>
    <p className="leading-relaxed">
      Second-order partial derivatives include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∂²f/∂x², ∂²f/∂y² (second derivatives w.r.t one variable)</li>
      <li>∂²f/∂x∂y or ∂²f/∂y∂x (mixed derivatives)</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="leading-relaxed">
      For f(x,y) = sin(xy):
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∂²f/∂x² = −y² sin(xy)</li>
      <li>∂²f/∂y² = −x² sin(xy)</li>
      <li>∂²f/∂x∂y = cos(xy) − xy sin(xy)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Computing Partial Derivatives</h2>
    <p className="leading-relaxed">
      Steps to compute:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Identify the variable to differentiate.</li>
      <li>Apply differentiation rules (product, chain, quotient) treating others as constants.</li>
      <li>Differentiate again for higher-order derivatives if needed.</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="leading-relaxed">
      f(x,y,z) = e^(xy) · z³:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∂f/∂x = y · e^(xy) · z³</li>
      <li>∂f/∂y = x · e^(xy) · z³</li>
      <li>∂f/∂z = 3z² · e^(xy)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Heat Transfer: Temperature distribution changes.</li>
      <li>Fluid Dynamics: Velocity and pressure analysis.</li>
      <li>Structural Analysis: Stress and strain computation.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <p className="leading-relaxed font-semibold">Basic Partial Differentiation:</p>
    <p className="leading-relaxed">
      Given f(x,y) = x²y + 3xy²:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∂f/∂x = 2xy + 3y²</li>
      <li>∂f/∂y = x² + 6xy</li>
    </ul>

    <p className="leading-relaxed font-semibold">Higher-order Partial Derivatives:</p>
    <p className="leading-relaxed">
      For f(x,y) = x³y² + 2xy:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∂²f/∂x² = 6xy²</li>
      <li>∂²f/∂y² = 2x³</li>
      <li>∂²f/∂x∂y = 6xy² + 2</li>
    </ul>

    <p className="leading-relaxed font-semibold">Directional Derivative:</p>
    <p className="leading-relaxed">
      f(x,y) = x² + 2xy at (1,2) in direction u = (3/5, 4/5):
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∇f = (2x + 2y, 2x + 2y) = (6,6)</li>
      <li>Directional derivative = ∇f · u = 42/5 = 8.4</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Unsolved Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Find df/dx and df/dy for f(x, y) = x²y³ + 4xy + e^y</li>
      <li>Find Laplacian ∇²g for g(x, y, z) = x²y + e^(yz) + z³</li>
      <li>For x²y + y³ + z³ = 6, find ∂z/∂x and ∂z/∂y treating z as function of x and y</li>
      <li>Compute directional derivative at (1,−1,2) in direction v = (2, −1, 2)</li>
    </ul>

  </div>
);

export default Home;
