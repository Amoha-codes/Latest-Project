import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Poisson Distribution ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Poisson Distribution in Data Science
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Poisson Distribution is a discrete probability distribution that models the number of events 
      occurring in a fixed interval of time or space given a constant average rate (λ). Unlike the 
      Binomial Distribution, it is used for events that occur continuously or randomly, making it 
      suitable for rare events like accidents, calls, or website hits.
    </p>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Events:</strong> Independent occurrences within a time frame or spatial area.</li>
      <li><strong>Average Rate (λ):</strong> Expected number of events in the interval; shapes the distribution.</li>
      <li><strong>Time or Space Interval:</strong> Duration or area over which events are measured.</li>
    </ul>

    {/* Formula */}
    <h2 className="text-3xl font-bold mt-8">Poisson Distribution Formula</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X = x) = (λ^x * e^(-λ)) / x!
    </p>

    {/* Example Problem */}
    <h2 className="text-3xl font-bold mt-8">Example: Call Center</h2>
    <p className="leading-relaxed">
      A call center receives on average 3 calls per hour (λ=3). Probability of exactly 4 calls in one hour (x=4):
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X=4) = (3^4 * e^-3) / 4! ≈ 0.168
    </p>

    {/* CDF */}
    <h2 className="text-3xl font-bold mt-8">Cumulative Distribution Function (CDF)</h2>
    <p className="leading-relaxed">
      CDF gives the probability of observing at most x events:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      F(x) = P(X ≤ x) = Σ P(X = k), k = 0 to x
    </p>
    <p className="leading-relaxed">
      Example: Probability of 3 or fewer calls in one hour:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X ≤ 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)
    </p>

    {/* Expected Value */}
    <h2 className="text-3xl font-bold mt-8">Expected Value</h2>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      E[X] = λ
    </p>

    {/* Variance and Standard Deviation */}
    <h2 className="text-3xl font-bold mt-8">Variance and Standard Deviation</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Variance:</strong> Var[X] = λ</li>
      <li><strong>Standard Deviation:</strong> σ = √λ</li>
    </ul>

    {/* Real-Life Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Traffic Accidents</h2>
    <p className="leading-relaxed">
      Traffic accidents occur at an average rate of 2 per month (λ=2). Probability of exactly 3 accidents:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-4 rounded-lg shadow-inner">
      P(X=3) = (2^3 * e^-2) / 3! ≈ 0.180
    </p>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation</h2>
    <p className="leading-relaxed">
      Using <code>scipy.stats.poisson</code> to compute PMF and CDF:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto font-mono shadow-inner">
{`import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import poisson

lambda_val = 3
k = np.arange(0, 10)

pmf = poisson.pmf(k, lambda_val)
plt.bar(k, pmf, color='lightgreen', edgecolor='black')
plt.title('Poisson Distribution PMF (λ=3)')
plt.xlabel('Number of events (k)')
plt.ylabel('Probability')
plt.show()

cdf = poisson.cdf(k, lambda_val)
plt.plot(k, cdf, color='purple', marker='o')
plt.title('Poisson Distribution CDF (λ=3)')
plt.xlabel('Number of events (k)')
plt.ylabel('Cumulative Probability')
plt.show()

probability_4_events = poisson.pmf(4, lambda_val)
print(f'Probability of exactly 4 events: {probability_4_events:.4f}')`}
    </pre>

    {/* Relation to Exponential */}
    <h2 className="text-3xl font-bold mt-8">Relation with Exponential Distribution</h2>
    <p className="leading-relaxed">
      Poisson models the number of events in a fixed interval, while Exponential models the waiting time 
      between consecutive events. Both share the same rate parameter λ.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Traffic and accident analysis</li>
      <li>Telecommunications: call center traffic</li>
      <li>Medical: rare disease cases</li>
      <li>Queuing theory: customer arrivals at service points</li>
    </ul>

  </div>
);

export default Home;
