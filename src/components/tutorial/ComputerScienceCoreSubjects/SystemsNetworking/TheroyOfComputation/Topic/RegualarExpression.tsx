import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Arden's Theorem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Solving Automata Using Arden&apos;s Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Jan, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Arden&apos;s Theorem provides a systematic method to convert a finite automaton 
      into a corresponding regular expression by solving state equations.
      For an equation of the form <strong>R = Q + RP</strong>, where P does not contain ε,
      the unique solution is <strong>R = QP*</strong>.
    </p>

    {/* Example Header */}
    <h2 className="text-3xl font-bold mt-8">Example: Solving Automata Using Arden&apos;s Theorem</h2>

    {/* Given Transitions */}
    <p className="leading-relaxed font-semibold">Given State Equations:</p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      C = Ba <br />
      B = Bb + Cb + Aa <br />
      A = ε + Aa + Bb
    </p>

    {/* Step 1 */}
    <h2 className="text-2xl font-bold mt-6">Step 1: Substitute B into C</h2>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      C = Ba <br />
      C = (Aa + Bb + Cb)a <br />
      C = Aaa + Bba + Cba
    </p>

    {/* Step 2 */}
    <h2 className="text-2xl font-bold mt-6">Step 2: Apply Arden&apos;s Theorem on C</h2>

    <p className="leading-relaxed">
      The equation for C is of the form:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      C = Q + CP <br />
      Q = Aaa + Bba <br />
      P = ba
    </p>

    <p className="leading-relaxed">
      Applying Arden&apos;s theorem:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      C = (Aaa + Bba)(ba)*
    </p>

    {/* Step 3 */}
    <h2 className="text-2xl font-bold mt-6">Step 3: Substitute C back into B</h2>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      B = Bb + Cb + Aa <br />
      B = Bb + (Aaa + Bba)(ba)*b + Aa
    </p>

    <p className="leading-relaxed">
      Rearrange B to isolate it:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      B = Aa + (Aaa + Bba)(ba)*b + Bb
    </p>

    <p className="leading-relaxed">
      Take B terms on one side:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      B = Aa + Aaa(ba)*b + Bba(ba)*b + Bb <br />
      B = Q + BP
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Q = Aa + Aaa(ba)*b <br />
      P = ba(ba)*b + b
    </p>

    <p className="leading-relaxed">
      Apply Arden&apos;s Theorem again:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      B = QP* = (Aa + Aaa(ba)*b) (ba(ba)*b + b)*
    </p>

    {/* Step 4 */}
    <h2 className="text-2xl font-bold mt-6">Step 4: Solve for A</h2>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A = ε + Aa + Bb
    </p>

    <p className="leading-relaxed">
      Substitute B into A:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A = ε + Aa + (Aa + Aaa(ba)*b)(ba(ba)*b + b)*
    </p>

    <p className="leading-relaxed">
      Rearranging A gives form A = Q + AP.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Q = ε + (Aa + Aaa(ba)*b)(ba(ba)*b + b)* <br />
      P = a
    </p>

    <p className="leading-relaxed">
      Applying Arden&apos;s theorem:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A = Q a*
    </p>

    {/* Final */}
    <h2 className="text-3xl font-bold mt-8">Final Regular Expression</h2>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      R = A = (ε + (Aa + Aaa(ba)*b)(ba(ba)*b + b)*) a*
    </p>

    <p className="leading-relaxed">
      Thus, the automaton is successfully converted into a regular expression 
      using Arden&apos;s Theorem by solving state equations step-by-step.
    </p>

  </div>
);

export default Home;
