import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Probability Distribution ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Probability Distribution - Function, Formula, Table
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A probability distribution is a function that assigns probabilities to possible outcomes of a random variable.
      Unlike a frequency distribution, it is theoretical and describes the likelihood of outcomes in any random experiment.
    </p>

    {/* Properties */}
    <h2 className="text-3xl font-bold mt-8">Properties</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each outcome probability is ≥ 0.</li>
      <li>The sum of probabilities of all outcomes equals 1.</li>
    </ul>

    {/* Probability Function */}
    <h2 className="text-3xl font-bold mt-8">Probability Distribution of a Random Variable</h2>
    <p className="leading-relaxed">
      For a discrete random variable X with values {`x1, x2, ..., xn`}, the probability function p(x) is defined as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      P(x) = P(X = x)
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Drawing Two Cards with Replacement</h2>
    <p className="leading-relaxed">
      Let X = number of aces in 2 draws from a 52-card deck:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>P(X = 0) = 48/52 × 48/52 = 144/169</li>
      <li>P(X = 1) = 48/52 × 4/52 + 4/52 × 48/52 = 24/169</li>
      <li>P(X = 2) = 4/52 × 4/52 = 1/169</li>
    </ul>
    <p className="leading-relaxed font-semibold">
      Probability Distribution Table:
    </p>
    <table className="table-auto border-collapse border border-gray-400 text-sm">
      <thead>
        <tr>
          <th className="border border-gray-400 px-2">X</th>
          <th className="border border-gray-400 px-2">0</th>
          <th className="border border-gray-400 px-2">1</th>
          <th className="border border-gray-400 px-2">2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-2">P(X = x)</td>
          <td className="border border-gray-400 px-2">144/169</td>
          <td className="border border-gray-400 px-2">24/169</td>
          <td className="border border-gray-400 px-2">1/169</td>
        </tr>
      </tbody>
    </table>

    {/* Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Probability Distributions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Discrete Probability Distribution: For countable values (e.g., Binomial, Poisson).</li>
      <li>Continuous Probability Distribution: For uncountable values (e.g., Uniform, Normal).</li>
    </ul>

    {/* Example: Discrete */}
    <h2 className="text-3xl font-bold mt-8">Discrete Probability Distribution</h2>
    <p className="leading-relaxed">
      <strong>Bernoulli Trials:</strong> Independent trials with success/failure outcomes and constant probability of success.
    </p>

    <p className="leading-relaxed">
      Example: Tossing a fair die 50 times. Success = even number, Failure = odd number. Here, p = q = 1/2.
    </p>

    <p className="leading-relaxed">
      <strong>Binomial Distribution:</strong> Models number of successes in n Bernoulli trials. Formula:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      P(Y = x) = nCx * p^x * (1-p)^(n-x)
    </p>

    <p className="leading-relaxed">
      Example: 10 coin tosses, probability of exactly 6 heads:
    </p>
    <p className="leading-relaxed font-semibold">
      P(X=6) = 10C6 * (1/2)^6 * (1/2)^4 = 105/512
    </p>

    <p className="leading-relaxed">
      <strong>Poisson Distribution:</strong> Models events occurring in a fixed interval. Formula:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      P(X = x) = (λ^x * e^-λ)/x!
    </p>

    <p className="leading-relaxed">
      Example: Bakery sells 5 cupcakes/hour. Probability of selling exactly 3:
    </p>
    <p className="leading-relaxed font-semibold">
      P(X=3) ≈ 0.14
    </p>

    {/* Continuous */}
    <h2 className="text-3xl font-bold mt-8">Continuous Probability Distribution</h2>
    <p className="leading-relaxed">
      <strong>Uniform Distribution:</strong> Equally likely outcomes over [a, b]. 
      <br/>PDF: f(x) = 1/(b-a) for x ∈ [a,b]
    </p>
    <p className="leading-relaxed">
      <strong>Normal Distribution:</strong> Symmetric, bell-shaped around mean μ with standard deviation σ.
      <br/>PDF: f(x) = (1/(σ√2π)) e^(-(x-μ)^2/(2σ²))
    </p>

    {/* Chi-Square */}
    <h2 className="text-3xl font-bold mt-8">Chi-Square Distribution</h2>
    <p className="leading-relaxed">
      Used in hypothesis testing. Mean = k, Variance = 2k. Example:
      Testing coin fairness with 55 heads, 45 tails:
    </p>
    <p className="leading-relaxed font-semibold">
      χ² = (55-50)²/50 + (45-50)²/50 = 1.0 {"< 3.84 → Fail to reject H0."}
    </p>

    {/* Solved Questions */}
    <h2 className="text-3xl font-bold mt-8">Solved Questions</h2>
    <p className="leading-relaxed">
      1. Box with 4 blue and 3 green balls, draw 3 balls. X = number of green balls. Probability Distribution:
    </p>
    <table className="table-auto border-collapse border border-gray-400 text-sm">
      <thead>
        <tr>
          <th className="border border-gray-400 px-2">X</th>
          <th className="border border-gray-400 px-2">0</th>
          <th className="border border-gray-400 px-2">1</th>
          <th className="border border-gray-400 px-2">2</th>
          <th className="border border-gray-400 px-2">3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-2">P(X)</td>
          <td className="border border-gray-400 px-2">4/35</td>
          <td className="border border-gray-400 px-2">18/35</td>
          <td className="border border-gray-400 px-2">12/35</td>
          <td className="border border-gray-400 px-2">1/35</td>
        </tr>
      </tbody>
    </table>

    <p className="leading-relaxed">
      2. 10 bulbs (3 defective), draw 4. X = number of defective bulbs. Probability Distribution:
    </p>
    <table className="table-auto border-collapse border border-gray-400 text-sm">
      <thead>
        <tr>
          <th className="border border-gray-400 px-2">X</th>
          <th className="border border-gray-400 px-2">0</th>
          <th className="border border-gray-400 px-2">1</th>
          <th className="border border-gray-400 px-2">2</th>
          <th className="border border-gray-400 px-2">3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-2">P(X)</td>
          <td className="border border-gray-400 px-2">1/6</td>
          <td className="border border-gray-400 px-2">1/2</td>
          <td className="border border-gray-400 px-2">3/10</td>
          <td className="border border-gray-400 px-2">1/30</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
