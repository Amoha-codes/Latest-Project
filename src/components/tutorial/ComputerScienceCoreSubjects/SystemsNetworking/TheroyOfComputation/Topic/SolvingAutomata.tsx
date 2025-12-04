import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Solving Automata Using Arden's Theorem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Solving Automata Using Arden's Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Jan, 2025</p>

    {/* Definition */}
    <p className="text-lg leading-relaxed">
      Arden&apos;s Theorem states that if <strong>P</strong> and <strong>Q</strong> are two regular
      expressions over Σ, and <strong>P does not contain ε</strong>, then the equation:
    </p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      R = Q + RP  ⇒  R = QP*
    </p>

    <p className="leading-relaxed">
      This theorem helps simplify state equations to obtain a Regular Expression, especially when
      deriving it directly from the FSM becomes difficult.
    </p>

    {/* Example: State Equations */}
    <h2 className="text-3xl font-bold mt-8">Example Automata</h2>

    <p className="leading-relaxed font-semibold">State Equations:</p>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      C = Ba <br />
      B = Bb + Cb + Aa <br />
      A = ε + Aa + Bb
    </p>

    {/* Solving Steps */}
    <h2 className="text-3xl font-bold mt-8">Solving Step-by-Step</h2>

    <p className="leading-relaxed font-semibold">1. Substitute B into C:</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      C = Ba <br />
      C = (Aa + Bb + Cb)a <br />
      C = Aaa + Bba + Cba
    </p>

    <p className="leading-relaxed font-semibold">2. Substitute C into B:</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      B = Bb + Cb + Aa <br />
      B = Aa + Bb + (Ba)b <br />
      B = Aa + B(b + ab) <br />
      B = Aa(b + ab)* &nbsp; (using R = QP*)
    </p>

    <p className="leading-relaxed font-semibold">3. Substitute B into A:</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      A = ε + Aa + Bb <br />
      A = ε + Aa + Aa(b + ab)b <br />
      A = ε + A(a + a(b + ab)b)
    </p>

    <p className="leading-relaxed font-semibold">Final Solution:</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner font-bold">
      A = (a + a(b + ab)b)*
    </p>

    {/* Steps for NFA to Regular Expression */}
    <h2 className="text-3xl font-bold mt-8">Steps to Convert NFA/DFA to Regular Expression</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Write the transition functions for each state.</li>
      <li>Form the state equations based on incoming transitions.</li>
      <li>Use reverse substitution to solve for the final state.</li>
      <li>Apply Arden&apos;s Theorem wherever required.</li>
    </ul>

    {/* Problem 1 */}
    <h2 className="text-3xl font-bold mt-8">
      Problem 1: Regular Expression for Even Number of a&apos;s
    </h2>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      A = ε + Ab + Ba <br />
      B = Aa + Bb
    </p>

    <p className="leading-relaxed font-semibold">Apply Arden to B:</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      B = Aa + Bb <br />
      B = Aa(b)*  
    </p>

    <p className="leading-relaxed font-semibold">Substitute B into A:</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      A = ε + Ab + (Aab)a* <br />
      A = ε + Ab + Aa(b)a* <br />
      A = ε(b + aba)
    </p>

    <p className="leading-relaxed font-bold">
      Final RE: ( b + ab*a )*
    </p>

    {/* Problem 2 */}
    <h2 className="text-3xl font-bold mt-8">
      Problem 2: Construct RE for Given NFA/DFA
    </h2>

    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      q1 = q1.a + q2.a + ε<br />
      q2 = q1.b + q2.b + q3.a<br />
      q3 = q2.a
    </p>

    <p className="leading-relaxed font-semibold">Step 1: Substitute q3 in q2</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      q2 = q1.b + q2.b + q2.aa <br />
      q2 = q1.b + q2(b + aa) <br />
      q2 = q1.b (b + aa)*
    </p>

    <p className="leading-relaxed font-semibold">Step 2: Substitute q2 in q1</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      q1 = q1.a + q1.b(b + aa)*a + ε <br />
      q1 = q1[a + b(b + aa)*a] + ε <br />
      q1 = [a + b(b + aa)*a]*
    </p>

    <p className="leading-relaxed font-semibold">Step 3: Substitute q1 in q2</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner text-sm">
      q2 = [a + b(b + aa)*a]* b (b + aa)*
    </p>

    <p className="leading-relaxed font-semibold">Step 4: Substitute q2 in q3</p>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner font-bold text-sm">
      q3 = [a + b(b+aa)* a]* b (b+aa)* a
    </p>

    <h2 className="text-3xl font-bold mt-8">Final Answer</h2>
    <p className="bg-gray-300 p-4 rounded-lg shadow-inner font-bold text-sm">
      q3 = [a + b(b+aa)* a]* b (b+aa)* a
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Arden&apos;s Theorem</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and systematic method</li>
      <li>Guarantees unique solution</li>
      <li>Useful in automata and compiler design</li>
      <li>Works well for regular expression simplification</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Arden&apos;s Theorem</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited to regular languages</li>
      <li>Cannot be applied to context-free / complex grammars</li>
      <li>May become computationally heavy for large systems</li>
      <li>Not suitable for context-sensitive languages</li>
    </ul>

  </div>
);

export default Home;
