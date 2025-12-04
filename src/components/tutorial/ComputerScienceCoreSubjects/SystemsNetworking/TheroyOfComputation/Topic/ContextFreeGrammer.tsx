import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Simplifying Context Free Grammars ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Simplifying Context Free Grammars
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Jan, 2025</p>

    <p className="leading-relaxed text-lg">
      A Context-Free Grammar (CFG) consists of production rules used to generate
      strings of a language. Many CFGs contain redundant productions, unreachable
      symbols, or unnecessary complexity. Simplifying a CFG reduces its size while
      preserving the language, making parsing and analysis more efficient.
    </p>

    {/* Why Simplify */}
    <h2 className="text-3xl font-bold mt-8">Why Simplify a CFG?</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient parsing due to fewer rules</li>
      <li>Better readability and understanding</li>
      <li>Optimization for compilers and language processors</li>
    </ul>

    {/* ================= Types of Redundant Productions ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Redundant Productions</h2>

    {/* 1. Useless Productions */}
    <h3 className="text-2xl font-semibold mt-4">1. Useless Productions</h3>
    <p className="leading-relaxed">
      A useless production is one that can never participate in generating any string.
      A variable is useless if:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>It cannot derive a terminal string</li>
      <li>It cannot be reached from the start symbol</li>
    </ul>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → abS | abA | abB<br />
      A → cd<br />
      B → aB<br />
      C → dc
    </p>

    <p className="leading-relaxed">
      Here, variable <strong>C</strong> is unreachable, and production <strong>B → aB</strong> never terminates.
      After removing useless productions:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → abS | abA<br />
      A → cd
    </p>

    {/* 2. Null Productions */}
    <h3 className="text-2xl font-semibold mt-4">2. Null (λ) Productions</h3>
    <p className="leading-relaxed">
      Null productions are of type A → λ (empty string).  
      They may be removed only if the grammar does not generate λ as a whole.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → ABCd<br />
      A → BC<br />
      B → bB | λ<br />
      C → cC | λ
    </p>

    <p className="leading-relaxed">
      Nullable variables: B, C, and A (since BC are nullable).  
      We replace nullable variables by λ in all possible combinations.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → ABCd | ABd | ACd | BCd | Ad | Bd | Cd | d<br />
      A → BC | B | C<br />
      B → bB | b<br />
      C → cC | c
    </p>

    {/* 3. Unit Productions */}
    <h3 className="text-2xl font-semibold mt-4">3. Unit Productions</h3>

    <p className="leading-relaxed">
      Unit productions are of the form A → B.  
      To remove them, find all variables A such that A ⇒* B.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → Aa | B<br />
      A → b | B<br />
      B → A | a
    </p>

    <p className="leading-relaxed">Remove unit productions:</p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → Aa<br />
      A → b<br />
      B → a
    </p>

    <p className="leading-relaxed font-semibold">
      After adding implied productions using A ⇒* B:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → Aa | b | a<br />
      A → b | a<br />
      B → a | b
    </p>

    <p className="leading-relaxed">
      Since B does not appear in S-productions, remove B:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S → Aa | b | a<br />
      A → b | a
    </p>

    {/* Final Note */}
    <h2 className="text-3xl font-bold mt-8">Important Note</h2>
    <p className="leading-relaxed">
      To correctly simplify any CFG, always follow this order:
    </p>

    <ul className="list-disc ml-6 leading-relaxed font-semibold">
      <li>First remove null productions</li>
      <li>Then remove unit productions</li>
      <li>Finally remove useless productions</li>
    </ul>

  </div>
);

export default Home;
