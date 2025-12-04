import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Normal Distribution ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Normal Distribution
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Normal Distribution, also called the Gaussian or Bell-shaped Distribution, is a widely used probability distribution in statistics. It is symmetric around the mean and forms the characteristic bell-shaped curve.
      It plays a central role in the Central Limit Theorem (CLT) and describes scenarios where most values cluster near the mean with probabilities decreasing as we move away from it.
    </p>

    {/* PDF */}
    <h2 className="text-3xl font-bold mt-8">Probability Density Function (PDF)</h2>
    <p className="leading-relaxed">
      The PDF gives the likelihood of a continuous random variable taking a specific value:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      fX(x) = 1 / (σ√2π) * e<sup>-((x-μ)² / 2σ²)</sup>
    </p>
    <p className="leading-relaxed">
      Where μ is the mean, σ is the standard deviation, and x is the value of interest. 
      Values near the mean are more probable, and the probability decreases as we move further away.
    </p>

    {/* Z-score */}
    <h2 className="text-3xl font-bold mt-8">Z-Score</h2>
    <p className="leading-relaxed">
      Z-score tells how many standard deviations a value is from the mean:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      z = (X - μ) / σ
    </p>
    <p className="leading-relaxed">
      Higher z-scores indicate values farther from the mean, with smaller probabilities.
    </p>

    {/* 68-95-99.7 Rule */}
    <h2 className="text-3xl font-bold mt-8">68–95–99.7 Rule</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>68% of values lie within ±1 standard deviation from the mean</li>
      <li>95% lie within ±2 standard deviations</li>
      <li>99.7% lie within ±3 standard deviations</li>
    </ul>

    {/* Expectation, Variance, Std Dev */}
    <h2 className="text-3xl font-bold mt-8">Expectation, Variance, and Standard Deviation</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Expected Value (Mean): E[X] = μ</li>
      <li>Variance: Var[X] = σ²</li>
      <li>Standard Deviation: σ = √Var[X]</li>
    </ul>

    {/* Standard Normal Distribution */}
    <h2 className="text-3xl font-bold mt-8">Standard Normal Distribution</h2>
    <p className="leading-relaxed">
      When μ = 0 and σ = 1, the distribution is called the Standard Normal Distribution. Its PDF is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      fX(x) = 1 / √(2π) * e<sup>-x² / 2</sup>
    </p>

    {/* CDF */}
    <h2 className="text-3xl font-bold mt-8">Cumulative Distribution Function (CDF)</h2>
    <p className="leading-relaxed">
      The CDF gives the probability that X ≤ x. There is no simple formula for a general normal distribution, so standard normal tables are used. 
      Converting to z-scores allows using one table for all normal distributions.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Wire Measurements</h2>
    <p className="leading-relaxed">
      Suppose measurements follow N(μ=10, σ²=4). Find P(X  13):
    </p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Standardize: z = (13 - 10) / 2 = 1.5</li>
      <li>From Z-table: P(Z ≤ 1.5) = 0.93319</li>
      <li>Therefore, P(Z ≥ 1.5) = 1 - 0.93319 = 0.06681</li>
    </ul>
    <p className="leading-relaxed">
      Probability of exceeding 13 milliamperes ≈ 6.7%.
    </p>

    {/* Python Implementation */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation</h2>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto font-mono shadow-inner">
{`import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

mean = 10
std_dev = 2
size = 1000

data = np.random.normal(loc=mean, scale=std_dev, size=size)

sns.histplot(data, kde=True, stat="density", bins=30, color="skyblue", linewidth=0.8)
plt.title(f'Normal Distribution (μ={mean}, σ={std_dev})')
plt.xlabel('Value')
plt.ylabel('Density')
plt.show()`}
    </pre>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Scientific Research: Measurement errors and experimental design</li>
      <li>Finance: Stock returns for risk assessment and portfolio optimization</li>
      <li>Engineering: Modeling dimensions of manufactured parts</li>
      <li>Psychometrics: Test scores and IQ scores</li>
      <li>Healthcare: Biological measurements like blood pressure</li>
    </ul>

  </div>
);

export default Home;
