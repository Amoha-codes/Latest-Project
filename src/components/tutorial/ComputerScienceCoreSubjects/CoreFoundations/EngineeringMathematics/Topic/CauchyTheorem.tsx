import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Cauchy's Mean Value Theorem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cauchy's Mean Value Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Cauchy&apos;s Mean Value Theorem provides a relation between the change of two
      functions over a fixed interval with their derivatives. It is a special case of the
      Lagrange Mean Value Theorem. It is also called the Extended Mean Value Theorem or
      the Second Mean Value Theorem.
    </p>

    <p className="leading-relaxed">
      According to the theorem, if a function passes through two points given as [a, f(a)]
      and [b, f(b)] then there exists a point through which tangent on the curve passes
      which is parallel to the secant passing through the two given points.
      For the functions f(x) continuous over [a, b] and differentiable over (a, b),
      there exists a point c in (a, b) such that:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm font-mono text-center">
      f′(c) = ( f(b) − f(a) ) / ( b − a )
    </p>

    {/* Statement */}
    <h2 className="text-3xl font-bold mt-6">Statement</h2>
    <p className="leading-relaxed">
      Cauchy&apos;s Mean Value Theorem states that, for any two functions f(x) and g(x)
      satisfying the following conditions:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>f(x), g(x) are continuous in the closed interval [a, b]</li>
      <li>f(x), g(x) are differentiable in the open interval (a, b)</li>
      <li>g′(x) ≠ 0 for all x ∈ (a, b)</li>
    </ul>

    <p className="leading-relaxed mt-2">
      Then there exists a point c in (a, b) such that:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm font-mono text-center">
      ( f(b) − f(a) ) / ( g(b) − g(a) ) = f′(c) / g′(c)
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider f(x) = x² and g(x) = x over the interval [1, 3].
      <br /> f(1) = 1, f(3) = 9, g(1) = 1, g(3) = 3
      <br /> f′(x) = 2x, g′(x) = 1
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm font-mono">
      f′(c) / g′(c) = (9 − 1) / (3 − 1) ⇒ 2c = 8 / 2 ⇒ c = 2
    </p>

    {/* Proof */}
    <h2 className="text-3xl font-bold mt-6">Proof of Cauchy&apos;s Mean Value Theorem</h2>

    <p className="leading-relaxed">
      Cauchy&apos;s mean value theorem is proved using Rolle&apos;s Theorem.
      Consider an auxiliary function:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm font-mono">
      F(x) = f(x) + P × g(x)
    </p>

    <p className="leading-relaxed">
      Choose P such that F(a) = F(b). Using Rolle&apos;s Theorem, F′(c) = 0 for some c in (a, b).
      After simplification:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm font-mono text-center">
      f′(c) / g′(c) = ( f(b) − f(a) ) / ( g(b) − g(a) )
    </p>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-6">Limitations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Applicable only for continuous functions</li>
      <li>Applicable only for differentiable functions</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-6">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Used to solve problems in Real Analysis</li>
      <li>Predicts the behaviour of curves</li>
      <li>Used to derive Lagrange&apos;s and Rolle&apos;s Theorem</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <p className="leading-relaxed font-bold">Example 1</p>
    <p className="leading-relaxed">
      Find c for f(x) = 3x² + 4x + 5 and g(x) = x² − x + 25 in the interval [1, 2]
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm font-mono">
      f′(x) = 6x + 4 , g′(x) = 2x − 1
      <br /> Result: c = 1.5
    </p>

    <p className="leading-relaxed font-bold mt-4">Example 2</p>
    <p className="leading-relaxed">
      f(x) = 2 ln x , g(x) = x² over [2, 3]
      <br /> c = 2.9
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Let f(x)= x² + 3x and g(x)= x+1. Find c in [1,4].</li>
      <li>f(x)= sin x, g(x)= cos x, find c in [0,π/2].</li>
      <li>f(x)= eˣ , g(x)= x find c in [1,3].</li>
      <li>f(x)= x³ , g(x)= x find c in [0,2].</li>
      <li>f(x)= tan(x), g(x)= x find c in [0,π/4].</li>
    </ul>
  </div>
);

export default Home;
