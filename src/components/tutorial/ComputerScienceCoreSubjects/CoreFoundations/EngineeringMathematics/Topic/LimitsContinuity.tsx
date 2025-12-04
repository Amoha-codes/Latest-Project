import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Limits, Continuity & Differentiability ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Limits, Continuity and Differentiability
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Limits, Continuity, and Differentiation are fundamental concepts in calculus. They are essential 
      for analyzing and understanding functional behavior and are crucial for solving real-world problems 
      in physics, engineering, and economics.
    </p>

    {/* Table of Content */}
    <h2 className="text-3xl font-bold mt-8">Table of Content</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limits</li>
      <li>Continuity</li>
      <li>Differentiability</li>
      <li>Interconnection Between Limits, Continuity, and Differentiability</li>
      <li>Applications</li>
      <li>Solved Examples</li>
      <li>Practice Problems</li>
    </ul>

    {/* Limits Section */}
    <h2 className="text-3xl font-bold mt-8">Limits</h2>
    <p className="leading-relaxed">
      Limits are a fundamental concept in calculus that describe the behavior of a function as it approaches
      a certain point. The limit of a function <b>f(x)</b> as <b>x approaches a</b> is the value that <b>f(x)</b> 
      gets closer to as x approaches a.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-center">
      limₓ→a f(x) = L
    </p>

    <h3 className="text-xl font-bold mt-4">Key Characteristics</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Approaching Behavior</b> – describes how a function behaves near a point.</li>
      <li><b>Existence and Uniqueness</b> – not all limits exist.</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-4">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-center">
      limₓ→2 (3x + 1) = 7
    </p>

    {/* Continuity */}
    <h2 className="text-3xl font-bold mt-8">Continuity</h2>
    <p className="leading-relaxed">
      A function is continuous at a point if it is smooth and has no breaks at that point. For a function 
      <b>f(x)</b> to be continuous at <b>x = a</b>:
    </p>

    <ul className="list-decimal ml-6 leading-relaxed">
      <li>f(a) is defined</li>
      <li>limₓ→a f(x) exists</li>
      <li>limₓ→a f(x) = f(a)</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-4">
      Example: f(x) = x² is continuous for all real numbers.
    </p>

    {/* Differentiability */}
    <h2 className="text-3xl font-bold mt-8">Differentiability</h2>
    <p className="leading-relaxed">
      A function is differentiable if its derivative exists at a point. Derivative represents rate of change.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-center">
      f′(a) = limₕ→0 [ f(a+h) − f(a) ] / h
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Smoothness</b> – no sharp corners.</li>
      <li><b>Tangent Exists</b> at that point.</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-4">
      Example: For f(x) = x² → f′(x) = 2x
    </p>

    {/* Interconnection */}
    <h2 className="text-3xl font-bold mt-8">Interconnection</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>To be continuous, a limit must exist.</li>
      <li>To be differentiable, a function must be continuous.</li>
      <li>Continuous does NOT imply differentiable.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <p className="font-semibold mt-2">Example 1:</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      limₓ→2 (x² − 4) / (x − 2) = 4
    </p>

    <p className="font-semibold mt-2">Example 2:</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      limₓ→∞ (3x² + 2x − 1) / (x² + 5) = 3
    </p>

    <p className="font-semibold mt-2">Example 3: One-sided Limit</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      limₓ→0− |x|/x = −1, limₓ→0+ |x|/x = 1 → Limit does not exist
    </p>

    <p className="font-semibold mt-2">Example 4: Continuity Check</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      f(x) = x² if x ≤ 2, 4x−4 if x &gt; 2 → Continuous at x = 2
    </p>

    <p className="font-semibold mt-2">Example 5: Differentiability</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      f(x) = |x| is NOT differentiable at x = 0
    </p>

    <p className="font-semibold mt-2">Example 6: L'Hôpital Rule</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      limₓ→0 (sin x)/x = 1
    </p>

    <p className="font-semibold mt-2">Example 7: IVT</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      x³ − x − 1 = 0 has root between 1 and 2
    </p>

    <p className="font-semibold mt-2">Example 9: Squeeze Theorem</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      limₓ→0 x² sin(1/x) = 0
    </p>

    <p className="font-semibold mt-2">Example 10: Uniform Continuity</p>
    <p className="leading-relaxed bg-gray-400 p-3 rounded">
      f(x) = x³ is uniformly continuous on [a, b]
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>limₓ→3 (x² − 9) / (x−3)</li>
      <li>limₓ→0 sin(3x)/x</li>
      <li>Check continuity at x = 2</li>
      <li>Find values of a,b making f(x) continuous</li>
      <li>limₓ→∞ ln(x)/x</li>
      <li>Check differentiability of f(x)=|x−1|</li>
      <li>Use IVT to show root between 2 and 3</li>
      <li>Apply MVT to x³ on [0,2]</li>
      <li>limₓ→0 (1−cos x)/x²</li>
      <li>Why f(x)=1/x is not uniformly continuous on (0,1)</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Structural Engineering – stress & strain calculation</li>
      <li>Electrical Engineering – circuit analysis</li>
      <li>Mechanical Engineering – thermodynamics, motion systems</li>
      <li>Control Systems – stability and control</li>
      <li>Fluid Mechanics – flow analysis using calculus</li>
      <li>Computer Engineering – algorithm optimization</li>
    </ul>

  </div>
);

export default Home;
