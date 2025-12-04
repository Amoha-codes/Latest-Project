import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Hypergeometric Distribution ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hypergeometric Distribution Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2024</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The hypergeometric distribution models the probability of obtaining a specific number of successes 
      in a fixed number of draws from a finite population. Unlike the binomial distribution, it does not 
      replace items once they are drawn, making it useful for sampling without replacement.
    </p>

    {/* Key Terminology */}
    <h2 className="text-3xl font-bold mt-8">Key Terminology</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Population Size (N):</strong> Total items in the population.</li>
      <li><strong>Number of Successes (K):</strong> Number of successes in the population.</li>
      <li><strong>Sample Size (n):</strong> Number of items drawn from the population.</li>
      <li><strong>Successes in Sample (k):</strong> Number of successes observed in the sample.</li>
    </ul>

    {/* Formula */}
    <h2 className="text-3xl font-bold mt-8">Hypergeometric Probability Mass Function</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X = k) = [(K choose k) × (N-K choose n-k)] / (N choose n)
    </p>

    {/* Formula Explanation */}
    <h2 className="text-3xl font-bold mt-8">Derivation</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Choose k successes from K: (K choose k)</li>
      <li>Choose (n-k) failures from (N-K): (N-K choose n-k)</li>
      <li>Total ways to choose n items from N: (N choose n)</li>
    </ul>

    {/* Comparison with Binomial */}
    <h2 className="text-3xl font-bold mt-8">Comparison with Binomial Distribution</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Hypergeometric:</strong> Sampling without replacement; probability changes with each draw.</li>
      <li><strong>Binomial:</strong> Sampling with replacement; probability constant across trials.</li>
    </ul>

    {/* Properties */}
    <h2 className="text-3xl font-bold mt-8">Key Properties</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      Mean: E[X] = n * K / N <br/>
      Variance: Var[X] = n * K * (N - K) * (N - n) / [N^2 * (N-1)] <br/>
      Mode: Most likely number of successes (approximated from K, N, n)
    </p>

    {/* Example Problem */}
    <h2 className="text-3xl font-bold mt-8">Example: Drawing Cards</h2>
    <p className="leading-relaxed">
      A deck has 52 cards (N=52), with 4 aces (K=4). Draw 5 cards (n=5). Probability of exactly 2 aces (k=2):
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X=2) = [(4 choose 2) × (48 choose 3)] / (52 choose 5)
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Statistical Sampling:</strong> Quality control and surveys without replacement.</li>
      <li><strong>Genetics & Biology:</strong> Predicting inheritance patterns and traits.</li>
      <li><strong>Hypergeometric Testing:</strong> Hypothesis testing in bioinformatics and epidemiology.</li>
    </ul>

    {/* Properties and Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Unimodal, usually peaking near the mean.</li>
      <li>Probabilities depend on sample size and successes in population.</li>
    </ul>

    {/* Programming Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementation in Programming</h2>
    <p className="leading-relaxed">
      Python, R, and MATLAB provide functions to compute hypergeometric probabilities. 
      Visualization of PMF helps understand probability distributions.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      The hypergeometric distribution is essential for modeling sampling without replacement. 
      Its properties, applications, and formulas make it a key tool in statistics, genetics, and quality control.
    </p>

    {/* FAQ */}
    <h2 className="text-3xl font-bold mt-8">FAQ</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Difference from Binomial:</strong> Hypergeometric is without replacement; binomial assumes replacement.</li>
      <li><strong>When to Use:</strong> Sampling from finite populations without replacement, such as surveys or genetics.</li>
      <li><strong>Visualization:</strong> Use Python or R to plot PMF for different parameters.</li>
    </ul>

  </div>
);

export default Home;
