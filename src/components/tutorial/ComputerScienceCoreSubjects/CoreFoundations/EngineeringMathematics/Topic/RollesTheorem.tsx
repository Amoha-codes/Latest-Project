import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Rolle’s Mean Value Theorem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Rolle’s Mean Value Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      In calculus, there exists a theorem that guarantees the existence of a point where the slope
      of the tangent is zero if a function starts and ends at the same value on an interval.
      This result is known as <strong>Rolle’s Theorem</strong>. It is one of the fundamental theorems
      in differential calculus and forms the foundation for the Mean Value Theorem.
    </p>

    {/* Formula Section */}
    <h2 className="text-3xl font-bold mt-8">Formula</h2>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      f'(c) = 0
    </p>

    {/* Statement */}
    <h2 className="text-3xl font-bold mt-8">Statement of Rolle’s Theorem</h2>
    <p className="leading-relaxed">
      A function <strong>f</strong> is defined in the closed interval <strong>[a, b]</strong> in such a way
      that it satisfies the following conditions:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>f(x)</strong> is continuous in the closed interval <strong>a ≤ x ≤ b</strong></li>
      <li><strong>f(x)</strong> is differentiable in the open interval <strong>a &lt; x &lt; b</strong></li>
      <li><strong>f(a) = f(b)</strong></li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Then, there exists at least one point <strong>c</strong> in the open interval <strong>(a, b)</strong> such that:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-bold">
      f'(c) = 0
    </p>

    {/* Geometric Interpretation */}
    <h2 className="text-3xl font-bold mt-8">Geometric Interpretation</h2>
    <p className="leading-relaxed">
      If a function begins and ends at the same height on a graph, then the curve must have
      at least one point between them where the tangent is horizontal. This means that
      <strong>the derivative at that point is zero</strong>.
    </p>

    <p className="leading-relaxed">
      There may be one or more such points depending on the shape of the curve.
    </p>

    {/* Proof */}
    <h2 className="text-3xl font-bold mt-8">Proof of Rolle’s Theorem</h2>
    <p className="leading-relaxed">
      Consider a function <strong>f</strong> that satisfies the conditions of Rolle's Theorem. Since
      <strong>f</strong> is continuous on <strong>[a, b]</strong> and differentiable on <strong>(a, b)</strong>, it attains its
      maximum and minimum on the closed interval, according to the Extreme Value Theorem.
    </p>

    <p className="leading-relaxed">
      If the maximum or minimum occurs at some point <strong>c</strong> in <strong>(a, b)</strong>,
      then <strong>f'(c) = 0</strong> because the tangent line at that point is horizontal.
    </p>

    <p className="leading-relaxed">
      If both maximum and minimum are at the endpoints <strong>a</strong> and <strong>b</strong>, then the
      function must be constant, implying:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-semibold">
      f'(x) = 0 &nbsp; for all &nbsp; x ∈ (a, b)
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Rolle’s Theorem in Computer Science</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Algorithm Correctness</strong> – ensures critical points in optimization problems.</li>
      <li><strong>Signal Processing</strong> – guarantees flat or zero-rate change points in wave signals.</li>
      <li><strong>Computer Graphics</strong> – ensures smooth transitions in curves and animation frames.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <h3 className="text-xl font-semibold mt-4">Example 1:</h3>
    <p className="leading-relaxed">
      Verify Rolle’s theorem for function &nbsp; <strong>y = x² + 4</strong>, &nbsp; on the interval
      &nbsp; <strong>[−1, 1]</strong>.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      f(-1) = 5, &nbsp; f(1) = 5 ⇒ f(-1) = f(1) <br />
      f'(x) = 2x ⇒ 2c = 0 ⇒ c = 0
    </p>

    <h3 className="text-xl font-semibold mt-4">Example 2:</h3>
    <p className="leading-relaxed">
      Verify Rolle’s theorem for &nbsp; <strong>y = 2x + 8</strong> &nbsp; on interval <strong>[−1, 1]</strong>.
      Since <strong>f(-1) ≠ f(1)</strong>, Rolle’s theorem is not applicable.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example 3:</h3>
    <p className="leading-relaxed">
      For <strong>f(x) = cos(x)</strong> on <strong>[0, 2π]</strong>, f(0) = f(2π) = 1, so Rolle’s theorem
      applies and <strong>f'(c) = 0</strong> gives <strong>c = π</strong>.
    </p>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Verify Rolle's theorem for f(x) = x² − 4x + 3 on [1, 3].</li>
      <li>Check if Rolle’s theorem applies to f(x) = eˣ on [0, ln(2)].</li>
      <li>Determine whether Rolle’s theorem can be applied to f(x) = |x| on [−2, 2].</li>
      <li>Verify Rolle’s theorem for f(x) = sin(x) on [0, 2π].</li>
      <li>Examine if Rolle’s theorem is applicable for f(x) = x³ − 3x on [−√3, √3].</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Rolle’s Theorem is a key foundational concept that ensures the existence of a point where
      the slope of the tangent is zero. It is widely used in theoretical and applied mathematics,
      especially in optimization and engineering applications.
    </p>

  </div>
);

export default Home;
