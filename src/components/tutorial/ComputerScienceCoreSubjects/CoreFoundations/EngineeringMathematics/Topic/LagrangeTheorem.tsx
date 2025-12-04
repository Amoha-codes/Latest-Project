import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Lagrange's Mean Value Theorem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Lagrange's Mean Value Theorem (LMVT)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In calculus, <strong>Lagrange’s Mean Value Theorem (LMVT)</strong> is a special theorem that connects
      the derivative of a function with its overall change on a given interval. It states that if a function
      is continuous and differentiable, then there exists at least one point where the slope of the tangent
      equals the slope of the secant line joining the endpoints of the curve.
    </p>

    {/* Formula */}
    <h2 className="text-3xl font-bold mt-8">Formula Used in LMVT</h2>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-lg text-center font-semibold">
      f′(c) = [ f(b) − f(a) ] / ( b − a )
    </p>

    {/* Statement */}
    <h2 className="text-3xl font-bold mt-8">Statement of LMVT</h2>
    <p className="leading-relaxed">
      Lagrange’s Mean Value Theorem states that for a function <strong>f(x)</strong> satisfying:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>f(x) is <strong>continuous</strong> on the closed interval [a, b]</li>
      <li>f(x) is <strong>differentiable</strong> on the open interval (a, b)</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Then there exists a point <strong>c</strong> in (a, b) such that:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-center font-semibold">
      f′(c) = [ f(b) − f(a) ] / ( b − a )
    </p>

    {/* Proof */}
    <h2 className="text-3xl font-bold mt-8">Proof of Lagrange's Mean Value Theorem</h2>
    <p className="leading-relaxed">
      To prove LMVT, consider the function f(x) and define an auxiliary function:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      g(x) = f(x) − ( (f(b) − f(a)) / (b − a) ) (x − a)
    </p>

    <p className="leading-relaxed">
      The function g(x) is continuous on [a, b] and differentiable on (a, b). Also:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>g(a) = f(a)</li>
      <li>g(b) = f(b) − (f(b) − f(a)) = f(a)</li>
    </ul>

    <p className="leading-relaxed">
      Thus, g(a) = g(b). By Rolle’s Theorem, there exists a point c ∈ (a, b) such that g′(c) = 0.
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      g′(x) = f′(x) − (f(b) − f(a)) / (b − a)
    </p>

    <p className="leading-relaxed font-semibold">
      Setting g′(c) = 0 gives:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-center font-semibold">
      f′(c) = [ f(b) − f(a) ] / ( b − a )
    </p>

    <p className="leading-relaxed font-bold">Hence, the theorem is proven.</p>

    {/* Sample Problems */}
    <h2 className="text-3xl font-bold mt-8">Sample Problems</h2>

    {/* Example 1 */}
    <h3 className="text-2xl font-semibold mt-4">Example 1</h3>
    <p className="leading-relaxed">
      Consider f(x) = x² on the interval [1, 3].
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>f(3) − f(1) / (3 − 1) = (9 − 1) / 2 = 4</li>
      <li>f′(x) = 2x ⇒ 2c = 4 ⇒ c = 2</li>
    </ul>

    <p className="font-semibold">Therefore, c = 2 satisfies LMVT.</p>

    {/* Example 2 */}
    <h3 className="text-2xl font-semibold mt-4">Example 2</h3>
    <p className="leading-relaxed">f(x) = sin(x) on [0, π/2]</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Average rate = 2/π</li>
      <li>f′(x) = cos(x) ⇒ cos(c) = 2/π</li>
      <li>c ≈ 0.6435</li>
    </ul>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Find the value of c for f(x) = x² + 2x on [0, 3].</li>
      <li>Verify LMVT for f(x) = x³ on [-1, 2].</li>
      <li>Does LMVT apply to f(x) = |x| on [-2, 2]?</li>
      <li>Find c for f(x) = sin(x) on [0, π/3].</li>
      <li>For f(x) = eˣ on [ln2, ln5] find c.</li>
    </ol>

  </div>
);

export default Home;
