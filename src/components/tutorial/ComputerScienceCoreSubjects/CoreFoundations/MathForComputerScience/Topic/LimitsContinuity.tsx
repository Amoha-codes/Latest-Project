import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Limits, Continuity and Differentiability ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Limits, Continuity and Differentiability
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Limits, Continuity, and Differentiability are fundamental concepts in calculus. They are essential for analyzing functional behavior and solving real-world problems in physics, engineering, and economics.
    </p>

    {/* Table of Content */}
    <h2 className="text-3xl font-bold mt-8">Table of Content</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limits</li>
      <li>Continuity</li>
      <li>Differentiability</li>
      <li>Interconnection Between Limits, Continuity, and Differentiability</li>
      <li>Applications</li>
    </ul>

    {/* Limits */}
    <h2 className="text-3xl font-bold mt-8">Limits</h2>
    <p className="leading-relaxed">
      Limits describe the behavior of a function as it approaches a particular point. Notation: <strong>lim x→a f(x) = L</strong>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Approaching Behavior: How function behaves as it approaches a point.</li>
      <li>Existence and Uniqueness: Not all limits exist; proving existence is crucial.</li>
    </ul>
    <p className="leading-relaxed"><strong>Example:</strong> lim x→2 (3x + 1) = 7</p>

    {/* Continuity */}
    <h2 className="text-3xl font-bold mt-8">Continuity</h2>
    <p className="leading-relaxed">
      A function f(x) is continuous at a point a if:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>f(a) is defined</li>
      <li>lim x→a f(x) exists</li>
      <li>lim x→a f(x) = f(a)</li>
    </ul>
    <p className="leading-relaxed"><strong>Example:</strong> f(x) = x² is continuous at all points.</p>

    {/* Differentiability */}
    <h2 className="text-3xl font-bold mt-8">Differentiability</h2>
    <p className="leading-relaxed">
      A function f(x) is differentiable at a point a if its derivative exists there:
      <br/>
      <strong>f'(a) = lim h→0 [f(a+h) - f(a)] / h</strong>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Smoothness: Differentiable functions are smooth, without sharp corners.</li>
      <li>Tangent Existence: A tangent line can be drawn at differentiable points.</li>
    </ul>
    <p className="leading-relaxed"><strong>Example:</strong> f(x) = x² → f'(x) = 2x</p>

    {/* Interconnection */}
    <h2 className="text-3xl font-bold mt-8">Interconnection Between Limits, Continuity, and Differentiability</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limits and Continuity: A limit must exist for continuity at a point.</li>
      <li>Continuity and Differentiability: Differentiability implies continuity, but not vice versa.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <ul className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>lim(x→2) (x²-4)/(x-2) = 4</li>
      <li>lim(x→∞) (3x²+2x-1)/(x²+5) = 3</li>
      <li>One-sided limit: lim(x→0⁻)|x|/x = -1, lim(x→0⁺)|x|/x = 1 → limit does not exist</li>
     <li>{`Continuity: f(x) = { x² if x ≤ 2, 4x-4 if x>2 } → continuous at x=2`}</li>
      <li>Differentiability: f(x) = |x| → not differentiable at x=0</li>
      <li>L'Hôpital's Rule: lim(x→0) (sin x)/x = 1</li>
      <li>Intermediate Value Theorem: x³-x-1=0 → root exists between 1 and 2</li>
      <li>Mean Value Theorem: f(x) = x² on [1,4] → c=2.5</li>
      <li>Squeeze Theorem: lim(x→0) x² sin(1/x) = 0</li>
      <li>Uniform Continuity: f(x) = x³ is uniformly continuous on [a,b]</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ul className="list-decimal ml-6 leading-relaxed space-y-1">
      <li>lim(x→3) (x²-9)/(x-3)</li>
      <li>lim(x→0) (sin(3x)/x)</li>
     <li>Check continuity of f(x) = {'{ x²-4 if x<2, 2x-2 if x≥2 }'}</li>
  <li>Find a,b to make f(x) = {'{ ax+b if x<1, x² if x≥1 }'} continuous everywhere</li>
 
      <li>lim(x→∞) (ln(x)/x) using L'Hôpital</li>
      <li>Check differentiability of f(x)=|x-1| at x=1</li>
      <li>Use IVT for x³-2x-5=0, root between 2 and 3</li>
      <li>Apply MVT for f(x)=x³ on [0,2]</li>
      <li>lim(x→0) (1-cos(x))/x²</li>
      <li>Prove f(x)=1/x is not uniformly continuous on (0,1)</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Structural Engineering: Stress & strain analysis</li>
      <li>Electrical Engineering: Circuit analysis with Fourier transforms</li>
      <li>Mechanical Engineering: Differential equations for machinery & thermodynamics</li>
      <li>Control Systems: Design controllers for dynamic systems</li>
      <li>Fluid Mechanics: Predict fluid behavior using vector calculus</li>
      <li>Computer Engineering: Algorithm design & software development</li>
      <li>Environmental Engineering: Mathematical modeling of environmental issues</li>
    </ul>

  </div>
);

export default Home;
