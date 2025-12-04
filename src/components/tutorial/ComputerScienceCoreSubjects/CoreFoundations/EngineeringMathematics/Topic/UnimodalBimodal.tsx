import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Unimodal & Bimodal Functions ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Unimodal and Bimodal Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2024</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Before understanding unimodal and bimodal functions, it is important to know the
      meaning of the term <strong>"mode"</strong>. A <strong>mode</strong> refers to the
      value at which a function reaches its maximum or peak value. Based on the number
      of peaks, functions are categorized as <strong>unimodal</strong>,
      <strong>bimodal</strong>, or <strong>multimodal</strong> functions.
    </p>

    {/* Unimodal Function */}
    <h2 className="text-3xl font-bold mt-8">Unimodal Function</h2>

    <p className="leading-relaxed">
      A function <strong>f(x)</strong> is called a <strong>unimodal function</strong> if
      there exists a value <strong>m</strong> such that:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>f(x) is monotonically increasing for <strong>x ≤ m</strong></li>
      <li>f(x) is monotonically decreasing for <strong>x ≥ m</strong></li>
    </ul>

    <p className="leading-relaxed">
      Here, <strong>f(m)</strong> represents the maximum value of the function, and there
      is no other local maximum. A unimodal function has exactly
      <strong> one peak (mode)</strong>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Mathematical Characteristics</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single Peak:</strong> The function has only one maximum point.</li>
      <li><strong>Monotonic:</strong> Increasing before the peak, decreasing after.</li>
      <li><strong>Concavity:</strong> Concave up before mode & concave down after mode.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Examples of Unimodal Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Quadratic Function:</strong> f(x) = ax² + bx + c (where a &lt; 0)</li>
      <li><strong>Normal Distribution Curve</strong> in probability statistics</li>
    </ul>

    {/* Bimodal Function */}
    <h2 className="text-3xl font-bold mt-8">Bimodal Function</h2>

    <p className="leading-relaxed">
      A function is called a <strong>bimodal function</strong> if it contains
      <strong> exactly two local maximum points</strong> (modes). It represents two
      different dominant behaviors or groups in a dataset.
    </p>

    <h3 className="text-xl font-semibold mt-4">
      Mathematical Characteristics of Bimodal Functions
    </h3>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Two maximum points</strong> or peaks</li>
      <li><strong>Valley</strong> exists between two peaks</li>
      <li>May or may not be symmetric</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Examples of Bimodal Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Mixture of two normal distributions</strong></li>
      <li><strong>Piecewise-defined functions</strong> with two maxima</li>
      <li>Test score distributions where two groups perform differently</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Statistics:</strong> Data modeling & probability distributions</li>
      <li><strong>Optimization:</strong> Finding global maxima in unimodal functions</li>
      <li><strong>Machine Learning:</strong> Clustering using mixture models</li>
      <li><strong>Economics:</strong> Market segmentation and demand curves</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Unimodal and Bimodal Functions</h2>

    <table className="min-w-full mt-4 border border-gray-500 text-left text-sm">
      <thead>
        <tr className="bg-gray-400 font-bold">
          <th className="border p-2">Feature</th>
          <th className="border p-2">Unimodal Function</th>
          <th className="border p-2">Bimodal Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2 font-semibold">Number of Peaks</td>
          <td className="border p-2">One peak</td>
          <td className="border p-2">Two peaks</td>
        </tr>
        <tr>
          <td className="border p-2 font-semibold">Monotonicity</td>
          <td className="border p-2">Monotonic before & after the peak</td>
          <td className="border p-2">Not monotonic</td>
        </tr>
        <tr>
          <td className="border p-2 font-semibold">Examples</td>
          <td className="border p-2">Quadratic function, Normal distribution</td>
          <td className="border p-2">Mixture of two normal distributions</td>
        </tr>
      </tbody>
    </table>

    {/* FAQs */}
    <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

    <p className="leading-relaxed font-semibold mt-2">
      What is the difference between unimodal and bimodal functions?
    </p>
    <p>Unimodal functions have <strong>one peak</strong>, while bimodal functions have <strong>two peaks</strong>.</p>

    <p className="leading-relaxed font-semibold mt-2">
      Are all probability distributions unimodal or bimodal?
    </p>
    <p>No. They can be unimodal, bimodal, or multimodal depending on data behavior.</p>

    <p className="leading-relaxed font-semibold mt-2">
      Why are unimodal functions important in optimization?
    </p>
    <p>
      Because they have a single peak, making it easier to locate the global maximum or minimum
      using algorithms like <strong>binary search</strong>.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Unimodal and bimodal functions are crucial in mathematics and applied sciences. While
      unimodal functions contain a single peak, bimodal functions include two distinct peaks.
      They help in analyzing real-world data behavior in fields like machine learning, economics,
      statistics, and optimization.
    </p>

  </div>
);

export default Home;
