import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Indefinite Integrals ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Indefinite Integrals
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 May, 2020</p>

    {/* Antiderivative */}
    <h2 className="text-3xl font-bold mt-8">Antiderivative</h2>
    <p className="leading-relaxed">
      A function Φ(x) is called an antiderivative (or integral) of a function f(x) if
      Φ′(x) = f(x). The derivative of Φ(x) gives back the original function f(x).
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      Example: (x⁴ / 4)′ = x³
    </p>

    <p className="leading-relaxed">
      If Φ(x) is an antiderivative of f(x), then Φ(x) + C is also an antiderivative,
      where C is a constant.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Indefinite Integral</h2>
    <p className="leading-relaxed">
      The family of all antiderivatives of a function f(x) is called the indefinite integral
      of f(x) and is denoted by:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      ∫ f(x) dx = Φ(x) + C
    </p>

    <p className="leading-relaxed">
      The process of finding the indefinite integral of a function is called integration.
    </p>

    {/* Formulas */}
    <h2 className="text-3xl font-bold mt-8">Fundamental Integration Formulas</h2>
    <ul className="list-disc ml-6 leading-relaxed font-mono">
      <li>∫ xⁿ dx = (xⁿ⁺¹ / (n+1)) + C</li>
      <li>∫ (1/x) dx = loge|x| + C</li>
      <li>∫ eˣ dx = eˣ + C</li>
      <li>∫ aˣ dx = (aˣ / loge a) + C</li>
      <li>∫ sin(x) dx = −cos(x) + C</li>
      <li>∫ cos(x) dx = sin(x) + C</li>
      <li>∫ sec²(x) dx = tan(x) + C</li>
      <li>∫ cosec²(x) dx = −cot(x) + C</li>
      <li>∫ sec(x)tan(x) dx = sec(x) + C</li>
      <li>∫ cosec(x)cot(x) dx = −cosec(x) + C</li>
      <li>∫ cot(x) dx = log|sin(x)| + C</li>
      <li>∫ tan(x) dx = log|sec(x)| + C</li>
      <li>∫ sec(x) dx = log|sec(x)+tan(x)| + C</li>
      <li>∫ cosec(x) dx = log|cosec(x) − cot(x)| + C</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>

    <p className="font-semibold">Example 1: Evaluate ∫ x⁴ dx</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      ∫ x⁴ dx = x⁵/5 + C
    </p>

    <p className="font-semibold">Example 2: Evaluate ∫ 2/(1 + cos2x) dx</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      1 + cos2x = 2cos²x<br />
      ∫ 2/(1+cos2x) dx = ∫ sec²x dx = tan(x) + C
    </p>

    <p className="font-semibold">Example 3: Evaluate ∫ (x³−x²+x−1)/(x−1) dx</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      ∫ (x² + 1) dx = x³/3 + x + C
    </p>

    {/* Methods */}
    <h2 className="text-3xl font-bold mt-8">Methods of Integration</h2>

    {/* Substitution */}
    <h3 className="text-2xl font-bold mt-6">Integration by Substitution</h3>
    <p className="leading-relaxed">
      This method reduces the given integral to a standard form by substitution.
      If t = f(x), then dt = f′(x) dx and:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      ∫ g(f(x)) f′(x) dx = ∫ g(t) dt
    </p>

    <p className="font-semibold mt-4">Example: ∫ e^(2x−3) dx</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      Let t = 2x − 3 → dx = dt/2<br />
      ∫ e^(2x−3) dx = (1/2) e^(2x−3) + C
    </p>

    {/* By parts */}
    <h3 className="text-2xl font-bold mt-6">Integration by Parts</h3>
    <p className="leading-relaxed">
      If u and v are functions of x:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      ∫ u v dx = u ∫ v dx − ∫ (u′ ∫ v dx) dx
    </p>

    <p className="font-semibold">ILATE rule for choosing first function:</p>
    <ul className="list-disc ml-6">
      <li>I – Inverse trigonometric</li>
      <li>L – Logarithmic</li>
      <li>A – Algebraic</li>
      <li>T – Trigonometric</li>
      <li>E – Exponential</li>
    </ul>

    <p className="font-semibold">Example: ∫ x sin(3x) dx</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      = −(x cos 3x)/3 + (cos 3x)/9 + C
    </p>

    {/* Partial fractions */}
    <h3 className="text-2xl font-bold mt-6">Integration by Partial Fractions</h3>
    <p className="leading-relaxed">
      Rational functions can be expressed in partial fractions and integrated.
    </p>

    <p className="font-semibold mt-4">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      ∫ (x−1)/((x+1)(x−2)) dx = (2/3) log|x+1| + (1/3) log|x−2| + C
    </p>

  </div>
);

export default Home;
