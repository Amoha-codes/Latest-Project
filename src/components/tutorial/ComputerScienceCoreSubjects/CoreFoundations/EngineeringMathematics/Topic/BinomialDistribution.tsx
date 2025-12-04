import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Binomial Distribution ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Binomial Distribution in Data Science
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Binomial Distribution calculates the probability of a specific number of successes in a fixed number of independent trials 
      where each trial has two outcomes: success or failure. It is widely used in quality control, election predictions, 
      medical testing, and decision-making based on probability.
    </p>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Bernoulli Trial:</strong> Experiment with two outcomes (success/failure). Example: Coin toss.</li>
      <li><strong>Number of Trials (n):</strong> Fixed number of independent trials. Example: Flipping a coin 5 times, n=5.</li>
      <li><strong>Success Probability (p):</strong> Probability of success per trial. Example: For a fair coin, p=0.5.</li>
      <li><strong>Failure Probability (q):</strong> Probability of failure per trial, q=1−p. Example: q=0.5 for tails.</li>
    </ul>

    {/* Formula */}
    <h2 className="text-3xl font-bold mt-8">Binomial Distribution Formula (PMF)</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X = x) = (n choose x) × p^x × (1-p)^(n-x) <br/>
      where (n choose x) = n! / (x!(n-x)!)
    </p>

    {/* Example: Coin Toss */}
    <h2 className="text-3xl font-bold mt-8">Example: Tossing a Coin</h2>
    <p className="leading-relaxed">
      Flip a coin 4 times (n=4). Probability of exactly 2 heads (x=2) with p=0.5:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X=2) = (4 choose 2) × (0.5)^2 × (0.5)^2 = 6 × 0.25 × 0.25 = 0.375
    </p>

    {/* Cumulative Distribution Function */}
    <h2 className="text-3xl font-bold mt-8">Cumulative Distribution Function (CDF)</h2>
    <p className="leading-relaxed">
      The CDF gives the probability of at most x successes in n trials:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      F(x) = P(X ≤ x) = Σ P(X = k), k=0 to x
    </p>
    <p className="leading-relaxed">
      Example: Probability of ≤3 heads in 5 tosses:
      P(X ≤ 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)
    </p>

    {/* Expected Value */}
    <h2 className="text-3xl font-bold mt-8">Expected Value</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      E[X] = n × p
    </p>
    <p className="leading-relaxed">Example: 5 coin tosses → E[X] = 5 × 0.5 = 2.5 heads on average.</p>

    {/* Variance & Standard Deviation */}
    <h2 className="text-3xl font-bold mt-8">Variance and Standard Deviation</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      Var[X] = n × p × (1-p) <br/>
      σ = √Var[X]
    </p>

    {/* Practical Example */}
    <h2 className="text-3xl font-bold mt-8">Practical Example: Airline Ticket Sales</h2>
    <p className="leading-relaxed">
      65 tickets sold, flight capacity 60. Probability passenger shows up p=0.9. Random variable X = passengers showing up.
      Probability ≤60 passengers show:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X ≤ 60) = 1 − (P(X=61) + ... + P(X=65)) ≈ 0.7909
    </p>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import binom

n = 10
p = 0.5
x = np.arange(0, n+1)

pmf = binom.pmf(x, n, p)
plt.figure(figsize=(8,6))
plt.bar(x, pmf, color='skyblue', edgecolor='black')
plt.title('Binomial PMF (n=10, p=0.5)')
plt.xlabel('Number of successes')
plt.ylabel('Probability')
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()

cdf = binom.cdf(x, n, p)
plt.figure(figsize=(8,6))
plt.plot(x, cdf, color='purple', marker='o', linestyle='-', linewidth=2)
plt.title('Binomial CDF (n=10, p=0.5)')
plt.xlabel('Number of successes')
plt.ylabel('Cumulative Probability')
plt.grid(True)
plt.show()

probability_3_heads = binom.pmf(3, n, p)
print(f'Probability of exactly 3 heads: {probability_3_heads:.4f}')`}
    </pre>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Quality Control:</strong> Number of defective items in a batch.</li>
      <li><strong>Election Predictions:</strong> Probability of a candidate receiving a certain number of votes.</li>
      <li><strong>Medical Testing:</strong> Predict positive results in a set of tests.</li>
      <li><strong>Customer Behavior:</strong> Probability a customer buys a product or certain number of sales occur.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Binomial Distribution models scenarios with binary outcomes, helping to calculate exact probabilities and cumulative probabilities,
      supporting data-driven decisions in science, business, and engineering.
    </p>

  </div>
);

export default Home;
