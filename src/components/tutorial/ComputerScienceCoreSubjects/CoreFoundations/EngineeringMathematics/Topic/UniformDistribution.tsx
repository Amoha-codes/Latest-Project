import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Uniform Distribution ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Uniform Distribution in Data Science
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Jun, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Uniform Distribution, also called Rectangular Distribution, is a continuous probability distribution 
      where all outcomes in a given interval [a, b] are equally likely. Unlike the Normal Distribution, 
      it has a constant probability density, resulting in a "flat" distribution.
    </p>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Events and Interval:</strong> All events in [a, b] are random, independent, and equally likely. Example: selecting a random time in a 24-hour day.</li>
      <li><strong>Probability Density Function (PDF):</strong> Constant across the interval:
        <p className="font-mono bg-gray-400 p-2 rounded-lg mt-1">f(x) = 1 / (b - a), a ≤ x ≤ b</p>
        For x outside [a, b]: <span className="font-mono bg-gray-400 p-2 rounded-lg">f(x) = 0</span>
      </li>
      <li><strong>Cumulative Distribution Function (CDF):</strong> Probability that X ≤ x:
        <p className="font-mono bg-gray-400 p-2 rounded-lg mt-1">
          F(x) = 0, x &lt; a<br/>
          F(x) = (x - a)/(b - a), a ≤ x ≤ b<br/>
          F(x) = 1, x &gt; b
        </p>
      </li>
    </ul>

    {/* Properties */}
    <h2 className="text-3xl font-bold mt-8">Properties</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Expected Value (Mean):</strong> E[X] = (a + b)/2  
        <span className="font-mono block mt-1">Example: a=0, b=25 → E[X]=12.5</span>
      </li>
      <li><strong>Variance:</strong> Var[X] = (b - a)² / 12  
        <span className="font-mono block mt-1">Example: a=0, b=25 → Var[X] ≈ 52.08</span>
      </li>
      <li><strong>Standard Deviation:</strong> σ = √Var[X]  
        <span className="font-mono block mt-1">Example: a=0, b=25 → σ ≈ 7.21</span>
      </li>
    </ul>

    {/* Real-World Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Copper Wire Current</h2>
    <p className="leading-relaxed">
      Current in a copper wire is uniformly distributed over [0,25]. Calculations:
    </p>
    <ul className="list-disc ml-6 space-y-2">
      <li>PDF: <span className="font-mono">f(x) = 1 / 25 = 0.04, 0 ≤ x ≤ 25</span></li>
      <li>Expected Value: <span className="font-mono">E[X] = 12.5</span></li>
      <li>Variance: <span className="font-mono">Var[X] ≈ 52.08</span></li>
      <li>Standard Deviation: <span className="font-mono">σ ≈ 7.21</span></li>
      <li>CDF: <span className="font-mono">F(x) = 0 if x&lt;0, F(x) = x/25 if 0≤x≤25, F(x) = 1 if x&gt;25</span></li>
    </ul>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation</h2>
    <p className="leading-relaxed">
      Generate samples and visualize the PDF using NumPy and Matplotlib:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto font-mono shadow-inner">
{`import numpy as np
import matplotlib.pyplot as plt

a = 0
b = 25
samples = np.random.uniform(a, b, 1000)

plt.hist(samples, bins=30, density=True, alpha=0.6, color='g')

x = np.linspace(a, b, 1000)
plt.plot(x, np.ones_like(x)/(b-a), 'r-', lw=2)

plt.title('Uniform Distribution PDF')
plt.xlabel('X')
plt.ylabel('Probability Density')
plt.show()`}
    </pre>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Random Sampling: Simulations often use uniform random numbers.</li>
      <li>Quality Control: Models unbiased variations in product measurements.</li>
      <li>Lottery and Gaming: Random selection in lotteries or card shuffling.</li>
      <li>Random Time Intervals: Models equally likely event occurrence within a time frame.</li>
    </ul>

  </div>
);

export default Home;
